'use client';

import { Mail} from 'lucide-react';

interface ContactProps {
  onStartProject: () => void;
}

const Contact = ({ onStartProject }: ContactProps) => {

  return (
    <section id="contact" className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <span className="inline-block px-6 py-2 bg-primary-100 text-primary-600 rounded-full font-semibold text-sm tracking-wide mb-6">
            Let&apos;s talk
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let&apos;s make something great together.
          </h2>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Ready to transform your business? Reach out and let&apos;s discuss your project.
          </p>
        </div>

        {/* Contact Information */}
        <div className="text-center space-y-6 animate-fade-in">
          {/* Contact Details */}
          <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
            <div className="flex flex-col items-center space-y-4">
              <div className="bg-primary-600 w-12 h-12 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-white" />
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Get in Touch</h3>
                <a 
                  href="mailto:support@evalaunche.com" 
                  className="text-primary-600 text-base font-semibold hover:text-primary-700 transition-colors duration-300"
                >
                  support@evalaunche.com
                </a>
                <p className="text-sm text-gray-600 mt-2">We&apos;ll get back to you within 24 hours</p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
              <div className="text-xl font-bold text-primary-600 mb-1">24h</div>
              <div className="text-sm text-gray-600">Response</div>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
              <div className="text-xl font-bold text-primary-600 mb-1">100%</div>
              <div className="text-sm text-gray-600">Satisfaction</div>
            </div>
            <div className="bg-primary-50 p-4 rounded-lg border border-primary-100">
              <div className="text-xl font-bold text-primary-600 mb-1">10+</div>
              <div className="text-sm text-gray-600">Years</div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-primary-50 p-6 rounded-xl border border-primary-200 mt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Why Choose <span className="text-primary-600">eVALaunche</span>?</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                <span>Free consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                <span>Transparent pricing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary-500 rounded-full flex-shrink-0"></div>
                <span>24/7 support</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
