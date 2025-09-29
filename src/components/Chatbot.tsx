'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Mail, Phone } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  isTyping?: boolean;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const Chatbot = ({ isOpen, onClose, onOpen }: ChatbotProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm eVALaunche's AI assistant. I'm here to help you learn about our software development, AI/ML solutions, and digital marketing services. How can I assist you today?",
      sender: 'bot',
      timestamp: new Date(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [conversationCount, setConversationCount] = useState(0);
  const [faqs, setFaqs] = useState<Array<{question: string, answer: string}>>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const saveFAQ = (question: string, answer: string) => {
    const newFAQ = { question, answer };
    setFaqs(prev => [...prev, newFAQ]);
    
    // Save to localStorage
    const savedFAQs = JSON.parse(localStorage.getItem('chatbot-faqs') || '[]');
    savedFAQs.push(newFAQ);
    localStorage.setItem('chatbot-faqs', JSON.stringify(savedFAQs));
  };

  const loadFAQs = () => {
    const savedFAQs = JSON.parse(localStorage.getItem('chatbot-faqs') || '[]');
    setFaqs(savedFAQs);
  };

  const clearFAQs = () => {
    setFaqs([]);
    localStorage.removeItem('chatbot-faqs');
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    loadFAQs();
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const sendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText.trim(),
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: inputText.trim(),
          conversationCount: conversationCount
        }),
      });

      const data = await response.json();

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'bot',
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setConversationCount(data.conversationCount || conversationCount + 1);

      // Auto-save FAQ if it's a good Q&A pair
      if (data.response && data.response.length > 20 && !data.conversationLimit) {
        saveFAQ(inputText.trim(), data.response);
      }

      // Check if conversation limit reached
      if (data.conversationLimit) {
        setInputText('');
        return;
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm experiencing technical difficulties. Please email us directly at support@evalaunche.com for immediate assistance.",
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickActions = [
    "Tell me about your services",
    "What is your experience?",
    "How much does it cost?",
    "Can you help with my project?",
    "What technologies do you use?"
  ];

  return (
    <>
      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-20 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden hover:overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">eVALaunche AI Assistant</h3>
                <p className="text-sm opacity-90">
                  Online now • {conversationCount}/10 messages
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  <div className="flex items-start space-x-2">
                    {message.sender === 'bot' && (
                      <Bot className="h-4 w-4 mt-1 flex-shrink-0" />
                    )}
                    {message.sender === 'user' && (
                      <User className="h-4 w-4 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-900 rounded-2xl px-4 py-3 max-w-[80%]">
                  <div className="flex items-center space-x-2">
                    <Bot className="h-4 w-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* FAQ Section */}
          {faqs.length > 0 && (
            <div className="px-4 pb-2">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-gray-500">Saved FAQs ({faqs.length}):</p>
                <button
                  onClick={clearFAQs}
                  className="text-xs text-red-500 hover:text-red-700 transition-colors duration-200"
                >
                  Clear All
                </button>
              </div>
              <div className="max-h-32 overflow-y-auto space-y-2">
                {faqs.slice(-3).map((faq, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-2">
                    <p className="text-xs font-medium text-gray-700 mb-1">Q: {faq.question}</p>
                    <p className="text-xs text-gray-600 line-clamp-2">A: {faq.answer}</p>
                  </div>
                ))}
                {faqs.length > 3 && (
                  <p className="text-xs text-gray-400 text-center">+{faqs.length - 3} more...</p>
                )}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-500 mb-2">Quick questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action, index) => (
                  <button
                    key={index}
                    onClick={() => setInputText(action)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full transition-colors duration-200"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={conversationCount >= 9 ? "Last message before limit..." : "Type your message..."}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  disabled={isLoading || conversationCount >= 10}
                />
              <button
                onClick={sendMessage}
                disabled={!inputText.trim() || isLoading || conversationCount >= 10}
                className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="mt-3 text-center">
              <p className="text-xs text-gray-500">
                Need immediate help? 
                <a 
                  href="mailto:support@evalaunche.com" 
                  className="text-primary-600 hover:underline ml-1"
                >
                  Email us
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
