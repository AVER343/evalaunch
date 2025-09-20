import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Database, Download, Trash2, Mail, Phone, MapPin, CheckCircle, AlertTriangle, Users, FileText } from 'lucide-react';

export default function GDPR() {
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
            <h1 className="text-2xl font-bold text-gray-900">GDPR Compliance</h1>
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
              GDPR Compliance Statement
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We are committed to protecting your privacy and personal data in accordance with the 
              General Data Protection Regulation (GDPR). This page explains how we comply with GDPR 
              requirements and what rights you have regarding your personal information.
            </p>
          </div>

          {/* What is GDPR */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <FileText className="h-6 w-6 text-primary-600 mr-3" />
              What is GDPR?
            </h3>
            
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">European Data Protection Law</h4>
                  <p className="text-gray-700">
                    The General Data Protection Regulation (GDPR) is a comprehensive data protection law 
                    that gives EU citizens more control over their personal data. It applies to any 
                    organization that processes personal data of EU residents, regardless of where the 
                    organization is located.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our GDPR Compliance */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our GDPR Compliance</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="flex items-center mb-3">
                    <Lock className="h-6 w-6 text-blue-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Data Protection</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Encrypt all personal data</li>
                    <li>• Implement access controls</li>
                    <li>• Regular security audits</li>
                    <li>• Secure data transmission</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-green-50 rounded-xl border border-green-200">
                  <div className="flex items-center mb-3">
                    <Eye className="h-6 w-6 text-green-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Transparency</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Clear privacy notices</li>
                    <li>• Plain language policies</li>
                    <li>• Regular updates</li>
                    <li>• Easy-to-understand rights</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="p-6 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="flex items-center mb-3">
                    <Users className="h-6 w-6 text-purple-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">User Rights</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Right to access data</li>
                    <li>• Right to rectification</li>
                    <li>• Right to erasure</li>
                    <li>• Right to data portability</li>
                  </ul>
                </div>
                
                <div className="p-6 bg-yellow-50 rounded-xl border border-yellow-200">
                  <div className="flex items-center mb-3">
                    <Database className="h-6 w-6 text-yellow-600 mr-2" />
                    <h4 className="text-lg font-semibold text-gray-900">Data Minimization</h4>
                  </div>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Collect only necessary data</li>
                    <li>• Regular data reviews</li>
                    <li>• Automatic data deletion</li>
                    <li>• Purpose limitation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Your Rights Under GDPR */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Rights Under GDPR</h3>
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Eye className="h-5 w-5 text-blue-600 mr-2" />
                    Right to Access
                  </h4>
                  <p className="text-gray-600 mb-3">You can request a copy of all personal data we hold about you.</p>
                  <div className="text-sm text-blue-600 font-medium">Response time: 30 days</div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <FileText className="h-5 w-5 text-green-600 mr-2" />
                    Right to Rectification
                  </h4>
                  <p className="text-gray-600 mb-3">You can ask us to correct any inaccurate personal data.</p>
                  <div className="text-sm text-green-600 font-medium">Response time: 30 days</div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gradient-to-br from-red-50 to-red-100 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Trash2 className="h-5 w-5 text-red-600 mr-2" />
                    Right to Erasure
                  </h4>
                  <p className="text-gray-600 mb-3">You can request deletion of your personal data in certain circumstances.</p>
                  <div className="text-sm text-red-600 font-medium">Response time: 30 days</div>
                </div>
                
                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <Download className="h-5 w-5 text-purple-600 mr-2" />
                    Right to Data Portability
                  </h4>
                  <p className="text-gray-600 mb-3">You can request your data in a structured, machine-readable format.</p>
                  <div className="text-sm text-purple-600 font-medium">Response time: 30 days</div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Exercise Your Rights */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Exercise Your Rights</h3>
            
            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500 mb-6">
              <div className="flex items-start">
                <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Easy Process</h4>
                  <p className="text-gray-700">
                    Exercising your GDPR rights is simple. Just contact us using any of the methods below, 
                    and we&apos;ll respond within 30 days.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white border border-gray-200 rounded-xl">
                <Mail className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                <p className="text-sm text-gray-600 mb-3">Send your request to our data protection team</p>
                <a href="mailto:ashish.amrev@gmail.com" className="text-primary-600 hover:underline text-sm">
                  ashish.amrev@gmail.com
                </a>
              </div>
              
              <div className="text-center p-6 bg-white border border-gray-200 rounded-xl">
                <Phone className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                <p className="text-sm text-gray-600 mb-3">Speak directly with our team</p>
                <a href="tel:+918219973883" className="text-primary-600 hover:underline text-sm">
                  +91-821-9973883
                </a>
              </div>
              
              <div className="text-center p-6 bg-white border border-gray-200 rounded-xl">
                <FileText className="h-8 w-8 text-primary-600 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Contact Form</h4>
                <p className="text-sm text-gray-600 mb-3">Use our website contact form</p>
                <Link href="/#contact" className="text-primary-600 hover:underline text-sm">
                  Visit Contact Page
                </Link>
              </div>
            </div>
          </div>

          {/* Data Processing Lawful Basis */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why We Process Your Data</h3>
            
            <div className="space-y-4">
              <div className="p-6 bg-blue-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Consent</h4>
                <p className="text-gray-600 mb-3">
                  When you subscribe to our newsletter or agree to cookies, we process your data based on your consent.
                </p>
                <div className="text-sm text-blue-600 font-medium">You can withdraw consent at any time</div>
              </div>
              
              <div className="p-6 bg-green-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Contract Performance</h4>
                <p className="text-gray-600 mb-3">
                  When you engage our services, we process your data to fulfill our contractual obligations.
                </p>
                <div className="text-sm text-green-600 font-medium">Necessary for service delivery</div>
              </div>
              
              <div className="p-6 bg-purple-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Legitimate Interest</h4>
                <p className="text-gray-600 mb-3">
                  We may process data for our legitimate business interests, such as improving our services.
                </p>
                <div className="text-sm text-purple-600 font-medium">Balanced with your rights and interests</div>
              </div>
            </div>
          </div>

          {/* Data Retention */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">How Long We Keep Your Data</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Client Data</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Project data: 7 years after completion</li>
                  <li>• Contact information: Until you request deletion</li>
                  <li>• Communication records: 3 years</li>
                  <li>• Financial records: 7 years (legal requirement)</li>
                </ul>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Website Data</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Analytics data: 26 months</li>
                  <li>• Cookie data: As per cookie policy</li>
                  <li>• Newsletter subscribers: Until unsubscribe</li>
                  <li>• Contact form submissions: 2 years</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Data Breach Procedures */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Breach Response</h3>
            
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h4 className="font-semibold text-gray-900 mb-3">Our Commitment to Security</h4>
              <p className="text-gray-700 mb-4">
                In the unlikely event of a data breach that poses a risk to your rights and freedoms, 
                we will notify you within 72 hours of becoming aware of the breach.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Immediate Actions:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Contain and assess the breach</li>
                    <li>• Notify relevant authorities</li>
                    <li>• Inform affected individuals</li>
                    <li>• Implement additional security measures</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">What We&apos;ll Tell You:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Nature of the breach</li>
                    <li>• Data categories affected</li>
                    <li>• Likely consequences</li>
                    <li>• Measures we&apos;re taking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* International Transfers */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">International Data Transfers</h3>
            
            <div className="p-6 bg-blue-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Safe Data Transfers</h4>
              <p className="text-gray-600 mb-4">
                When we transfer your data outside the European Economic Area (EEA), we ensure 
                appropriate safeguards are in place to protect your personal information.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Safeguards We Use:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Standard Contractual Clauses (SCCs)</li>
                    <li>• Adequacy decisions by the European Commission</li>
                    <li>• Binding Corporate Rules</li>
                    <li>• Certification schemes</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Third-Party Services:</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Google Analytics (Privacy Shield)</li>
                    <li>• Email services (SCCs)</li>
                    <li>• Cloud storage (Adequacy decisions)</li>
                    <li>• Payment processors (SCCs)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Data Protection Contact</h3>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                For any questions about our GDPR compliance or to exercise your rights, please contact our 
                data protection team:
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
                    <p className="text-gray-600 text-sm">Data Protection Officer</p>
                    <p className="text-gray-600 text-sm">India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Changes to Policy */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h3>
            <p className="text-gray-600 leading-relaxed">
              We may update this GDPR compliance statement from time to time to reflect changes in our 
              practices or legal requirements. We will notify you of any material changes by posting the 
              updated policy on our website and updating the &quot;Last Updated&quot; date.
            </p>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500 text-center">
              This GDPR compliance statement is effective as of {new Date().toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })} and applies to all personal data processing by eVALaunche.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
