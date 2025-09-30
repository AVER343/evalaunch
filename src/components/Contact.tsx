'use client';

import { Mail, Phone, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useChatbot } from './ChatbotProvider';

interface ContactProps {
  onStartProject: () => void;
}

const Contact = ({ onStartProject }: ContactProps) => {
  const { openChatbot } = useChatbot();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s <span className="text-primary-600">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready to transform your business with innovative technology solutions? 
            Let&apos;s discuss your project and explore how we can help you achieve your goals.
          </p>
          
          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>100% Satisfaction</span>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <div className="text-center space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Ready to transform your business with cutting-edge technology? We&apos;re here to help you succeed. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                we&apos;d love to hear from you and discuss how we can bring your vision to life.
              </p>
              
              {/* Contact Details */}
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-2xl p-8 border border-primary-200">
                <div className="flex flex-col items-center space-y-6">
                  <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Email Us</h4>
                    <a 
                      href="mailto:support@evalaunche.com" 
                      className="text-primary-600 text-xl font-semibold hover:text-primary-700 transition-colors duration-300"
                    >
                      support@evalaunche.com
                    </a>
                    <p className="text-gray-600 mt-2">We&apos;ll get back to you within 24 hours</p>
                    
                    {/* AI Chatbot CTA */}
                    <div className="mt-6">
                      {/* <button
                        onClick={openChatbot}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                      >
                        <MessageCircle className="h-5 w-5" />
                        <span>Chat with our AI Assistant</span>
                      </button> */}
                      <p className="text-sm text-gray-500 mt-2">Get instant answers about our services</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-gradient-to-r from-secondary-50 to-secondary-100 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-secondary-600 mb-2">24h</div>
                  <div className="text-sm text-gray-600">Response Time</div>
                </div>
                <div className="bg-gradient-to-r from-accent-50 to-accent-100 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-accent-600 mb-2">100%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="bg-gradient-to-r from-primary-50 to-primary-100 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-xl border border-yellow-200 mt-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">Why Choose <span className="text-yellow-600">eVALaunche</span>?</h4>
                <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Free consultation and project assessment</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Transparent pricing with no hidden costs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>24/7 support and maintenance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
