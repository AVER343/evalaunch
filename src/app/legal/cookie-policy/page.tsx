import Link from 'next/link';
import { ArrowLeft, Cookie, Shield, Settings, BarChart3, Target, Mail, Phone, MapPin, CheckCircle, AlertTriangle } from 'lucide-react';

export default function CookiePolicy() {
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
            <h1 className="text-2xl font-bold text-gray-900">Cookie Policy</h1>
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
              <Cookie className="h-8 w-8 text-primary-600 mr-3" />
              Cookie Policy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We use cookies to make your experience on our website better. This policy explains what cookies are, 
              how we use them, and how you can control them. We&apos;re committed to being transparent about our 
              data practices and giving you control over your privacy.
            </p>
          </div>

          {/* What Are Cookies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="h-6 w-6 text-primary-600 mr-3" />
              What Are Cookies?
            </h3>
            
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Simple Explanation</h4>
                  <p className="text-gray-700">
                    Cookies are small text files that websites store on your device (computer, phone, or tablet) 
                    when you visit them. Think of them as digital &quot;memory&quot; that helps websites remember your 
                    preferences and provide a better experience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Types of Cookies We Use */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center mb-3">
                    <Settings className="h-6 w-6 text-blue-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Essential Cookies</h4>
                  </div>
                  <p className="text-gray-600 mb-3">These are necessary for our website to work properly.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Keep you logged in</li>
                    <li>• Remember your preferences</li>
                    <li>• Ensure security</li>
                    <li>• Load pages correctly</li>
                  </ul>
                  <div className="mt-3 text-xs text-blue-600 font-medium">Cannot be disabled</div>
                </div>
                
                <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                  <div className="flex items-center mb-3">
                    <BarChart3 className="h-6 w-6 text-yellow-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Analytics Cookies</h4>
                  </div>
                  <p className="text-gray-600 mb-3">Help us understand how visitors use our website.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Count page visits</li>
                    <li>• Track popular content</li>
                    <li>• Improve user experience</li>
                    <li>• Identify technical issues</li>
                  </ul>
                  <div className="mt-3 text-xs text-yellow-600 font-medium">Can be disabled</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="flex items-center mb-3">
                    <Target className="h-6 w-6 text-purple-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Marketing Cookies</h4>
                  </div>
                  <p className="text-gray-600 mb-3">Help us show you relevant content and offers.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Remember your interests</li>
                    <li>• Show relevant ads</li>
                    <li>• Measure ad effectiveness</li>
                    <li>• Personalize content</li>
                  </ul>
                  <div className="mt-3 text-xs text-purple-600 font-medium">Can be disabled</div>
                </div>
                
                <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="flex items-center mb-3">
                    <Cookie className="h-6 w-6 text-gray-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Third-Party Cookies</h4>
                  </div>
                  <p className="text-gray-600 mb-3">Set by other services we use.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Google Analytics</li>
                    <li>• Social media buttons</li>
                    <li>• Embedded videos</li>
                    <li>• Payment processors</li>
                  </ul>
                  <div className="mt-3 text-xs text-gray-600 font-medium">Can be disabled</div>
                </div>
              </div>
            </div>
          </div>

          {/* How We Use Cookies */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How We Use Cookies</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Website Functionality</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Remember your login status</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Save your preferences</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Keep your shopping cart</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Ensure security</span>
                    </li>
                  </ul>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Analytics & Improvement</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Understand user behavior</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Improve website performance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Fix technical issues</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Create better content</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Cookie Management */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h3>
            
            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">You&apos;re in Control</h4>
                  <p className="text-gray-700">
                    You can control and delete cookies at any time. However, disabling certain cookies may 
                    affect your experience on our website.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Browser Settings</h4>
                  <p className="text-sm text-gray-600 mb-3">Most browsers allow you to control cookies through their settings.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Chrome: Settings → Privacy and Security → Cookies</li>
                    <li>• Firefox: Options → Privacy & Security → Cookies</li>
                    <li>• Safari: Preferences → Privacy → Cookies</li>
                    <li>• Edge: Settings → Cookies and Site Permissions</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-4 bg-white border border-gray-200 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Our Cookie Banner</h4>
                  <p className="text-sm text-gray-600 mb-3">When you first visit our site, you&apos;ll see a cookie banner.</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Accept all cookies</li>
                    <li>• Reject non-essential cookies</li>
                    <li>• Customize your preferences</li>
                    <li>• Learn more about each type</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Third-Party Services */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h3>
            
            <div className="space-y-4">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Google Analytics</h4>
                <p className="text-gray-600 mb-3">
                  We use Google Analytics to understand how visitors interact with our website. 
                  This helps us improve our content and user experience.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-500">Privacy Policy:</span>
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Google Privacy Policy
                  </a>
                </div>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Social Media</h4>
                <p className="text-gray-600 mb-3">
                  Our website may include social media buttons and embedded content from platforms like 
                  Facebook, Twitter, and LinkedIn.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span className="text-gray-500">These services have their own cookie policies.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How Long We Keep Cookies</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">Session</div>
                <div className="text-sm text-gray-600">Deleted when you close your browser</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">30 Days</div>
                <div className="text-sm text-gray-600">Most preference cookies</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">2 Years</div>
                <div className="text-sm text-gray-600">Analytics and marketing cookies</div>
              </div>
            </div>
          </div>

          {/* Your Rights */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Rights</h3>
            
            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">You Have the Right To:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Accept or reject cookies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Delete cookies from your device</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Change your preferences anytime</span>
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Request information about cookies we use</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Opt-out of marketing cookies</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-gray-700">Contact us with questions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Questions About Cookies?</h3>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies or this policy, please don&apos;t hesitate to contact us:
              </p>
              
              <p className="text-gray-600">
                Please use our contact form on the main website to get in touch with us.
              </p>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h3>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in our practices or 
              legal requirements. We will notify you of any material changes by posting the updated policy 
              on our website and updating the &quot;Last Updated&quot; date. We encourage you to review this policy 
              periodically to stay informed about our cookie practices.
            </p>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              This Cookie Policy is effective as of {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} and applies to all visitors of eVALaunche.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
