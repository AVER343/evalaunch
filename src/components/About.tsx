'use client';

import { Target, Users, Award, TrendingUp, CheckCircle, ArrowRight, Lightbulb, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
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
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-8 bg-gray-200 rounded-lg animate-pulse max-w-md mx-auto mb-4"></div>
            <div className="h-12 bg-gray-200 rounded-lg animate-pulse max-w-2xl mx-auto mb-6"></div>
            <div className="h-4 bg-gray-200 rounded-lg animate-pulse max-w-3xl mx-auto"></div>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div className="h-6 bg-gray-200 rounded-lg animate-pulse max-w-32"></div>
              <div className="grid grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-24 bg-gray-200 rounded-xl animate-pulse"></div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-6 bg-gray-200 rounded-lg animate-pulse max-w-40"></div>
              <div className="h-4 bg-gray-200 rounded-lg animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded-lg animate-pulse max-w-3/4"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const statsDisplay = [
    { number: stats.projectsCompleted, label: 'Projects Completed', icon: '/icons/mobile-app.png' },
    { number: stats.happyClients, label: 'Happy Clients', icon: '/icons/conversation.png' },
    { number: stats.yearsExperience, label: 'Years Experience', icon: '/images/medal.png' },
    { number: stats.clientSatisfaction, label: 'Client Satisfaction', icon: '/images/success.png' }
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
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-primary-600 font-semibold text-sm uppercase tracking-wide mb-4">ABOUT US</p>
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            We turn ideas into measurable business impact
          </h2>
          <p className="text-base text-gray-600 max-w-3xl mx-auto">
            We partner with founders and teams to design, build, and grow digital products—combining 
            strategy, engineering, and go-to-market execution.
          </p>
        </div>

        {/* Stats & Mission Combined */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Stats */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Impact</h3>
            <div className="grid grid-cols-2 gap-6">
              {statsDisplay.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-primary-50 rounded-xl border border-primary-100"
                >
                  <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Image 
                      src={stat.icon} 
                      alt={`${stat.label} icon`}
                      width={36}
                      height={36}
                    />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-xs font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{mission.title}</h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              {mission.content}
            </p>
            <div className="space-y-3 mb-8">
              {mission.points.map((point: string, index: number) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700 text-sm">{point}</p>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
