import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Database, Lock, Mail, Phone, MapPin, CheckCircle, Heart, Users, Settings } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
            <div></div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Last Updated */}
          <div className="mb-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="text-sm text-blue-800">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
              <Shield className="h-8 w-8 text-primary-600 mr-3" />
              Privacy Policy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We care about your privacy and want to be transparent about how we handle your personal information. 
              This policy explains what data we collect, why we need it, and how we protect it. We've written it 
              in plain language so you can easily understand our practices.
            </p>
          </div>

          {/* Our Promise */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Heart className="h-6 w-6 text-red-500 mr-3" />
              Our Promise to You
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">We Respect Your Privacy</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>We never sell your personal information</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>We only collect what we need</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>We keep your data secure</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span>You're always in control</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">We're Transparent</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Clear explanations of our practices</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Easy-to-understand language</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Regular updates when we make changes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-blue-500" />
                    <span>Always available to answer questions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* What We Collect */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Database className="h-6 w-6 text-primary-600 mr-3" />
              What Information We Collect
            </h3>
            
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Information You Give Us</h4>
                <p className="text-gray-600 mb-3">When you contact us or use our services, you might share:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Your name and email address</li>
                    <li>• Phone number (if you provide it)</li>
                    <li>• Company information</li>
                    <li>• Project details and requirements</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Messages you send us</li>
                    <li>• Feedback and reviews</li>
                    <li>• Any other information you choose to share</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect Automatically</h4>
                <p className="text-gray-600 mb-3">When you visit our website, we automatically collect some basic information:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-600">
                    <li>• Your IP address (general location)</li>
                    <li>• What pages you visit</li>
                    <li>• How long you stay on our site</li>
                    <li>• What device and browser you use</li>
                  </ul>
                  <ul className="space-y-2 text-gray-600">
                    <li>• How you found our website</li>
                    <li>• What you click on</li>
                    <li>• Any errors you encounter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="h-6 w-6 text-primary-600 mr-3" />
              How We Use Your Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-6 bg-blue-50 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">To Serve You Better</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Respond to your inquiries</li>
                    <li>• Provide our services</li>
                    <li>• Send project updates</li>
                    <li>• Offer customer support</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-green-50 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">To Improve Our Website</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Fix technical issues</li>
                    <li>• Make pages load faster</li>
                    <li>• Improve user experience</li>
                    <li>• Create better content</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 bg-purple-50 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">To Keep You Informed</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Send newsletters (if you subscribe)</li>
                    <li>• Share helpful resources</li>
                    <li>• Notify you of important updates</li>
                    <li>• Invite you to relevant events</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-yellow-50 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">For Legal Compliance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Meet legal requirements</li>
                    <li>• Protect our rights</li>
                    <li>• Ensure security</li>
                    <li>• Prevent fraud</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Information Sharing */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">We Don't Share Your Information</h3>
            
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500 mb-6">
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-red-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">We Never Sell Your Data</h4>
                  <p className="text-gray-700">
                    We don't sell, trade, or rent your personal information to anyone. Your data stays with us 
                    and trusted service providers who help us operate our business.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Limited Sharing Only When Necessary</h4>
              <p className="text-gray-600 mb-4">We only share information in these specific situations:</p>
              <ul className="space-y-2 text-gray-600">
                <li>• <strong>Service Providers:</strong> Trusted companies that help us run our business (like email services)</li>
                <li>• <strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li>• <strong>Business Transfers:</strong> If we merge with or are acquired by another company</li>
                <li>• <strong>With Your Consent:</strong> When you explicitly ask us to share information</li>
              </ul>
            </div>
          </div>

          {/* Data Security */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Lock className="h-6 w-6 text-primary-600 mr-3" />
              How We Protect Your Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Technical Safeguards</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• SSL encryption for all data transmission</li>
                  <li>• Secure servers and databases</li>
                  <li>• Regular security updates</li>
                  <li>• Access controls and monitoring</li>
                </ul>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Organizational Measures</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Staff training on data protection</li>
                  <li>• Limited access to personal data</li>
                  <li>• Regular security audits</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h3>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">You're Always in Control</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Access and Control</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• See what information we have about you</li>
                    <li>• Correct any mistakes</li>
                    <li>• Delete your information</li>
                    <li>• Download your data</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-3">Communication Preferences</h5>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Unsubscribe from emails anytime</li>
                    <li>• Choose what information you share</li>
                    <li>• Opt-out of data collection</li>
                    <li>• Request data portability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Questions About Your Privacy?</h3>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                We're here to help! If you have any questions about this privacy policy or want to exercise 
                your rights, please contact us:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700">ashish.amrev@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-primary-600" />
                    <span className="text-gray-700">+91-821-9973883</span>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-primary-600 mt-1" />
                  <div>
                    <p className="text-gray-700">eVALaunche Tech Solutions</p>
                    <p className="text-gray-600 text-sm">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Updates to This Policy</h3>
            <p className="text-gray-600 leading-relaxed">
              We may update this privacy policy from time to time to reflect changes in our practices or 
              legal requirements. When we make significant changes, we'll notify you by email or through 
              a notice on our website. We encourage you to review this policy periodically.
            </p>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              This Privacy Policy is effective as of {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} and applies to all information collected by eVALaunche.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
