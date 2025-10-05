'use client';

import { Target, Users, Award, TrendingUp, CheckCircle, ArrowRight, Lightbulb, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getCompanyStats, getCompanyValues, getCompanyMission, getCompanyVision } from '@/lib/data';

interface AboutProps {
  onStartProject: () => void;
}

const About = ({ onStartProject }: AboutProps) => {
  const [stats, setStats] = useState<any>(null);
  const [values, setValues] = useState<any[]>([]);
  const [mission, setMission] = useState<any>(null);
  const [vision, setVision] = useState<any>(null);

  useEffect(() => {
    const loadData = async () => {
      const [statsData, valuesData, missionData, visionData] = await Promise.all([
        getCompanyStats(),
        getCompanyValues(),
        getCompanyMission(),
        getCompanyVision()
      ]);
      setStats(statsData);
      setValues(valuesData);
      setMission(missionData);
      setVision(visionData);
    };
    loadData();
  }, []);

  // Show loading skeleton while data loads
  if (!stats || !mission || !vision) {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse max-w-md mx-auto mb-6"></div>
            <div className="h-6 bg-gray-200 rounded-lg animate-pulse max-w-3xl mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-40 bg-gray-200 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const statsDisplay = [
    { number: stats.projectsCompleted, label: 'Projects Completed', icon: Target },
    { number: stats.happyClients, label: 'Happy Clients', icon: Users },
    { number: stats.yearsExperience, label: 'Years Experience', icon: Award },
    { number: stats.clientSatisfaction, label: 'Client Satisfaction', icon: TrendingUp }
  ];

  // Map icon names to components
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'Lightbulb': Lightbulb,
      'Award': Award,
      'Users': Users,
      'MessageSquare': MessageSquare,
      'Target': Target
    };
    return iconMap[iconName] || Target;
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-4">ABOUT US</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Who Are We?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            A consultancy that turns ideas into measurable business impact.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We partner with founders and teams to design, build, and grow digital products—combining 
            strategy, engineering, and go-to-market execution.
          </p>
        </div>

        {/* Our Motivation Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-4">WE WORK HARD, WE PLAY HARD</p>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We are motivated by a desire to achieve.
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We enjoy finding simple solutions for complex challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statsDisplay.map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 bg-primary-50 rounded-2xl hover-lift animate-slide-up border border-primary-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="animate-slide-in-left">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{mission.title}</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {mission.content}
            </p>
            <div className="space-y-4">
              {mission.points.map((point: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-in-right">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">{vision.title}</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              {vision.content}
            </p>
            <div className="bg-primary-50 p-6 rounded-2xl border border-primary-200">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose <span className="text-primary-600">eVALaunche</span>?</h4>
              <ul className="space-y-3">
                {vision.benefits.map((benefit: string, index: number) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = getIconComponent(value.icon);
              return (
                <div
                  key={value.id}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg hover-lift border border-gray-100 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-primary-600 rounded-3xl p-12 text-white shadow-lg relative overflow-hidden">
            {/* Background overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700 opacity-50"></div>
            
            <div className="relative z-10">
              <p className="text-primary-100 font-semibold text-sm uppercase tracking-wide mb-4">Ready to create something amazing?</p>
              <h3 className="text-3xl font-bold mb-4">Start your business journey better with eVALaunche</h3>
              <p className="text-xl mb-8 opacity-90">
                Let&apos;s discuss how we can help you achieve your goals with our technology solutions.
              </p>
              <button 
                onClick={onStartProject}
                className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-300 font-semibold text-lg flex items-center space-x-2 mx-auto group"
              >
                <span>Work With Us</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
