'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import Chatbot from './Chatbot';
import { MessageCircle } from 'lucide-react';

interface ChatbotContextType {
  isOpen: boolean;
  openChatbot: () => void;
  closeChatbot: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};

interface ChatbotProviderProps {
  children: ReactNode;
}

export default function ChatbotProvider({ children }: ChatbotProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openChatbot = () => setIsOpen(true);
  const closeChatbot = () => setIsOpen(false);

  return (
    <ChatbotContext.Provider value={{ isOpen, openChatbot, closeChatbot }}>
      {children}
      <Chatbot isOpen={isOpen} onClose={closeChatbot} onOpen={openChatbot} />
      {!isOpen && (
        <button
          onClick={openChatbot}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group backdrop-blur-sm border-2 bg-white/90 border-primary-500 hover:bg-primary-50 hover:border-primary-600"
          aria-label="Open Chatbot"
        >
          <div className="flex items-center justify-center w-full h-full">
            <MessageCircle className="h-6 w-6 text-primary-600 group-hover:rotate-12 transition-transform duration-300" />
          </div>
          <div className="absolute -top-1 -right-1 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold transition-all duration-300 bg-primary-500">
            AI
          </div>
        </button>
      )}
    </ChatbotContext.Provider>
  );
}
