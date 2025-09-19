'use client';

import { useState, useRef } from 'react';
import { X, Send, CheckCircle, Building, Calendar, DollarSign, Users, Target, Code, Smartphone, Globe, Database } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';

interface ProjectDetailsFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProjectDetailsForm = ({ isOpen, onClose }: ProjectDetailsFormProps) => {
  const [formData, setFormData] = useState({
    // Basic Information
    name: '',
    email: '',
    company: '',
    phone: '',
    
    // Project Details
    projectName: '',
    projectType: '',
    projectCategory: '',
    description: '',
    goals: '',
    targetAudience: '',
    
    // Technical Requirements
    platform: [],
    features: [],
    integrations: '',
    thirdPartyServices: '',
    
    // Timeline & Budget
    timeline: '',
    budget: '',
    urgency: '',
    
    // Additional Information
    currentChallenges: '',
    successMetrics: '',
    additionalNotes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const projectTypes = [
    'Web Application',
    'Mobile App (iOS)',
    'Mobile App (Android)',
    'Cross-Platform App',
    'E-commerce Platform',
    'AI/ML Solution',
    'Data Analytics Dashboard',
    'API Development',
    'System Integration',
    'Other'
  ];

  const projectCategories = [
    'Business Management',
    'E-commerce',
    'Healthcare',
    'Education',
    'Finance',
    'Entertainment',
    'Social Media',
    'Productivity',
    'IoT',
    'Other'
  ];

  const platforms = [
    { id: 'web', label: 'Web Application', icon: Globe },
    { id: 'ios', label: 'iOS App', icon: Smartphone },
    { id: 'android', label: 'Android App', icon: Smartphone },
    { id: 'desktop', label: 'Desktop Application', icon: Code },
    { id: 'api', label: 'API/Backend', icon: Database }
  ];

  const commonFeatures = [
    'User Authentication',
    'Payment Integration',
    'Real-time Chat',
    'Push Notifications',
    'File Upload/Download',
    'Search Functionality',
    'Admin Dashboard',
    'Analytics & Reporting',
    'Multi-language Support',
    'Offline Capability',
    'Social Media Integration',
    'Email Notifications'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handlePlatformChange = (platformId: string) => {
    setFormData(prev => ({
      ...prev,
      platform: prev.platform.includes(platformId)
        ? prev.platform.filter(p => p !== platformId)
        : [...prev.platform, platformId]
    }));
  };

  const handleFeatureChange = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate CAPTCHA
    if (!captchaValue) {
      alert('Please complete the CAPTCHA verification');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-project-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          captchaToken: captchaValue
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            projectName: '',
            projectType: '',
            projectCategory: '',
            description: '',
            goals: '',
            targetAudience: '',
            platform: [],
            features: [],
            integrations: '',
            thirdPartyServices: '',
            timeline: '',
            budget: '',
            urgency: '',
            currentChallenges: '',
            successMetrics: '',
            additionalNotes: ''
          });
          setCaptchaValue(null);
          recaptchaRef.current?.reset();
          onClose();
        }, 3000);
      } else {
        throw new Error('Failed to send project details');
      }
    } catch (error) {
      console.error('Error sending project details:', error);
      alert('Failed to send project details. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Project Details Form</h2>
              <p className="text-gray-600">Tell us about your project and we'll get back to you with a detailed proposal</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="h-6 w-6 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-12">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Project Details Sent!</h4>
              <p className="text-gray-600">Thank you for your detailed project information. We'll review it and get back to you within 24 hours with a comprehensive proposal.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Basic Information */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary-600" />
                  Basic Information
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>
              </div>

              {/* Project Overview */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-primary-600" />
                  Project Overview
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Name *</label>
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="What would you like to call your project?"
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Type *</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Category</label>
                      <select
                        name="projectCategory"
                        value={formData.projectCategory}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select category</option>
                        {projectCategories.map((category) => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Description *</label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Describe your project in detail..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Goals *</label>
                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      required
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="What do you want to achieve with this project?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
                    <textarea
                      name="targetAudience"
                      value={formData.targetAudience}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Who will use your application?"
                    />
                  </div>
                </div>
              </div>

              {/* Technical Requirements */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-primary-600" />
                  Technical Requirements
                </h3>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Platform(s) *</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {platforms.map((platform) => (
                        <label key={platform.id} className="flex items-center space-x-2 p-3 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.platform.includes(platform.id)}
                            onChange={() => handlePlatformChange(platform.id)}
                            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          />
                          <platform.icon className="h-4 w-4 text-gray-600" />
                          <span className="text-sm text-gray-700">{platform.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Required Features</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {commonFeatures.map((feature) => (
                        <label key={feature} className="flex items-center space-x-2 p-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.features.includes(feature)}
                            onChange={() => handleFeatureChange(feature)}
                            className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                          />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Third-party Integrations</label>
                    <textarea
                      name="integrations"
                      value={formData.integrations}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="e.g., Payment gateways, APIs, services you need to integrate with..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Other Services Needed</label>
                    <textarea
                      name="thirdPartyServices"
                      value={formData.thirdPartyServices}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="e.g., Hosting, domain, SSL certificates, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Timeline & Budget */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary-600" />
                  Timeline & Budget
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timeline *</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      <option value="1-2 months">1-2 months</option>
                      <option value="3-4 months">3-4 months</option>
                      <option value="5-6 months">5-6 months</option>
                      <option value="6+ months">6+ months</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      <option value="Under $10k">Under $10,000</option>
                      <option value="$10k - $25k">$10,000 - $25,000</option>
                      <option value="$25k - $50k">$25,000 - $50,000</option>
                      <option value="$50k - $100k">$50,000 - $100,000</option>
                      <option value="$100k+">$100,000+</option>
                      <option value="To be discussed">To be discussed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">Select urgency</option>
                      <option value="ASAP">ASAP (Rush job)</option>
                      <option value="High">High priority</option>
                      <option value="Medium">Medium priority</option>
                      <option value="Low">Low priority</option>
                      <option value="Flexible">Flexible</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Building className="h-5 w-5 mr-2 text-primary-600" />
                  Additional Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Current Challenges</label>
                    <textarea
                      name="currentChallenges"
                      value={formData.currentChallenges}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="What challenges are you currently facing that this project should solve?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Success Metrics</label>
                    <textarea
                      name="successMetrics"
                      value={formData.successMetrics}
                      onChange={handleInputChange}
                      rows={2}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="How will you measure the success of this project?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                    <textarea
                      name="additionalNotes"
                      value={formData.additionalNotes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Any other information you'd like to share about your project..."
                    />
                  </div>
                </div>
              </div>

              {/* CAPTCHA */}
              <div className="flex justify-center">
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'}
                  onChange={handleCaptchaChange}
                  theme="light"
                />
                {(!process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY === 'your_site_key_here') && (
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    ⚠️ Using test reCAPTCHA. Configure NEXT_PUBLIC_RECAPTCHA_SITE_KEY for production.
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-200 font-medium flex items-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Submit Project Details</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsForm;
