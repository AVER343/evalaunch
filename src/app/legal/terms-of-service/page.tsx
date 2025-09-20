import Link from 'next/link';
import { ArrowLeft, FileText, Scale, Shield, AlertTriangle, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export default function TermsOfService() {
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
            <h1 className="text-2xl font-bold text-gray-900">Terms of Service</h1>
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
              <FileText className="h-8 w-8 text-primary-600 mr-3" />
              Terms of Service
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Welcome to eVALaunch! These terms explain the rules for using our website and services. 
              We&apos;ve written them in simple language so you can easily understand your rights and responsibilities.
            </p>
          </div>

          {/* Acceptance */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
              Agreement to Terms
            </h3>
            
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">By Using Our Services, You Agree To:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Follow these terms and conditions</li>
                    <li>• Use our services responsibly and legally</li>
                    <li>• Respect our intellectual property rights</li>
                    <li>• Provide accurate information when requested</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Our Services */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Scale className="h-6 w-6 text-primary-600 mr-3" />
              Our Services
            </h3>
            
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">What We Provide</h4>
                <p className="text-gray-600 mb-4">
                  eVALaunche offers software development, AI/ML solutions, and digital marketing services. 
                  We work with clients to create custom solutions that meet their specific needs.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Custom software development</li>
                  <li>• AI and machine learning solutions</li>
                  <li>• Digital marketing strategies</li>
                  <li>• Technical consulting and support</li>
                </ul>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Service Availability</h4>
                <p className="text-gray-600">
                  We strive to provide reliable services, but we cannot guarantee 100% uptime. 
                  We&apos;ll do our best to minimize any disruptions and keep you informed of any issues.
                </p>
              </div>
            </div>
          </div>

          {/* User Responsibilities */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Responsibilities</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Do&apos;s</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Provide accurate project information</li>
                  <li>• Communicate clearly about your needs</li>
                  <li>• Pay invoices on time</li>
                  <li>• Respect our team and processes</li>
                  <li>• Give honest feedback</li>
                </ul>
              </div>
              
              <div className="p-6 bg-red-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Don&apos;ts</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Share false or misleading information</li>
                  <li>• Use our services for illegal activities</li>
                  <li>• Attempt to reverse engineer our work</li>
                  <li>• Share confidential information without permission</li>
                  <li>• Harass or abuse our team members</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Intellectual Property */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="h-6 w-6 text-primary-600 mr-3" />
              Intellectual Property
            </h3>
            
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Our Rights</h4>
                <p className="text-gray-600 mb-3">
                  We own the rights to our website content, branding, and proprietary methodologies. 
                  This includes our designs, code, processes, and business methods.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Website design and content</li>
                  <li>• Company logos and branding</li>
                  <li>• Proprietary development processes</li>
                  <li>• Internal tools and methodologies</li>
                </ul>
              </div>
              
              <div className="p-6 bg-blue-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h4>
                <p className="text-gray-600 mb-3">
                  You own the rights to the custom work we create specifically for your project, 
                  once all payments are completed.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Custom software we build for you</li>
                  <li>• Project-specific designs and code</li>
                  <li>• Content created for your brand</li>
                  <li>• Project documentation and materials</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Payment Terms */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment Terms</h3>
            
            <div className="space-y-4">
              <div className="p-6 bg-yellow-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Payment Schedule</h4>
                <p className="text-gray-600 mb-3">
                  Payment terms will be clearly outlined in your project contract. 
                  Generally, we require:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 50% deposit to start the project</li>
                  <li>• 25% at project milestones</li>
                  <li>• 25% upon project completion</li>
                  <li>• Payment due within 30 days of invoice</li>
                </ul>
              </div>
              
              <div className="p-6 bg-red-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Late Payments</h4>
                <p className="text-gray-600">
                  Late payments may result in project delays or suspension of services. 
                  We reserve the right to charge interest on overdue amounts as permitted by law.
                </p>
              </div>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h3>
            
            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Important Legal Notice</h4>
                  <p className="text-gray-700 mb-3">
                    While we strive to provide excellent services, we cannot be held liable for:
                  </p>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Indirect or consequential damages</li>
                    <li>• Loss of profits or business opportunities</li>
                    <li>• Data loss beyond our reasonable control</li>
                    <li>• Third-party actions or decisions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy and Data */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Privacy and Data Protection</h3>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">We Respect Your Privacy</h4>
              <p className="text-gray-600 mb-4">
                Your privacy is important to us. We handle your personal and business information 
                according to our Privacy Policy and applicable data protection laws.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">We Will:</h5>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Keep your data secure and confidential</li>
                    <li>• Use information only for project purposes</li>
                    <li>• Delete data when no longer needed</li>
                    <li>• Comply with data protection regulations</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">We Won&apos;t:</h5>
                  <ul className="space-y-1 text-gray-600">
                    <li>• Sell or share your personal information</li>
                    <li>• Use your data for unrelated purposes</li>
                    <li>• Keep data longer than necessary</li>
                    <li>• Disclose information without permission</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Termination */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Termination</h3>
            
            <div className="space-y-4">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Project Termination</h4>
                <p className="text-gray-600 mb-3">
                  Either party may terminate a project with written notice. 
                  Upon termination:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• You&apos;ll pay for work completed up to that point</li>
                  <li>• We&apos;ll deliver any completed work</li>
                  <li>• Confidentiality obligations continue</li>
                  <li>• Intellectual property rights are preserved</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Changes to Terms */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Changes to These Terms</h3>
            
            <div className="p-6 bg-blue-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">We May Update These Terms</h4>
              <p className="text-gray-600 mb-3">
                We may update these terms from time to time to reflect changes in our services 
                or legal requirements. When we make significant changes:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• We&apos;ll notify you by email or website notice</li>
                <li>• Changes will be effective 30 days after notice</li>
                <li>• Continued use means you accept the new terms</li>
                <li>• You can terminate if you disagree with changes</li>
              </ul>
            </div>
          </div>

          {/* Governing Law */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h3>
            
            <div className="p-6 bg-gray-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Legal Jurisdiction</h4>
              <p className="text-gray-600">
                These terms are governed by the laws of India. Any disputes will be resolved 
                through the courts of India. We encourage resolving disputes through 
                communication and negotiation first.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Questions About These Terms?</h3>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                If you have any questions about these terms of service, please don&apos;t hesitate to contact us:
              </p>
              
              <p className="text-gray-600">
                Please use our contact form on the main website to get in touch with us.
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              These Terms of Service are effective as of {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} and apply to all users of eVALaunche services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
