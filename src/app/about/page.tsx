'use client';

import { useState, useEffect } from 'react';
import { Code, Brain, Megaphone, CheckCircle, ArrowRight, Users, Award, Target, Lightbulb, Shield, Zap, Globe, Star, Clock, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getCompanyStats, getCompanyValues, getCompanyMission, getCompanyVision, getAllTeamMembers, getFeaturedTestimonials } from '@/lib/data';

export default function AboutPage() {
  const [stats, setStats] = useState<any>(null);
  const [values, setValues] = useState<any[]>([]);
  const [mission, setMission] = useState<any>(null);
  const [vision, setVision] = useState<any>(null);
  const [team, setTeam] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const [statsData, valuesData, missionData, visionData, teamData, testimonialsData] = await Promise.all([
        getCompanyStats(),
        getCompanyValues(),
        getCompanyMission(),
        getCompanyVision(),
        getAllTeamMembers(),
        getFeaturedTestimonials(3)
      ]);
      setStats(statsData);
      setValues(valuesData);
      setMission(missionData);
      setVision(visionData);
      setTeam(teamData);
      setTestimonials(testimonialsData);
    };
    loadData();
  }, []);

  if (!stats || !mission || !vision) {
    return null;
  }

  const goToContact = () => {
    window.location.href = '/contact';
  };

  const statsDisplay = [
    { icon: Users, label: 'Happy Clients', value: stats.happyClients, color: 'text-blue-600' },
    { icon: Code, label: 'Projects Completed', value: stats.projectsCompleted, color: 'text-blue-600' },
    { icon: Award, label: 'Success Rate', value: stats.successRate, color: 'text-blue-600' },
    { icon: Clock, label: 'Years Experience', value: stats.yearsExperience, color: 'text-purple-600' }
  ];

  // Map icon names to components
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: any } = {
      'Lightbulb': Lightbulb,
      'Award': Award,
      'Users': Users,
      'MessageSquare': MessageSquare,
      'Target': Target,
      'Shield': Shield,
      'Zap': Zap,
      'Globe': Globe
    };
    return iconMap[iconName] || Target;
  };

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-10 right-10 opacity-10">
          <Image src="/images/circle-a.svg" alt="" width={200} height={200} />
        </div>
        <div className="absolute bottom-10 left-10 opacity-10">
          <Image src="/images/circle-b.svg" alt="" width={150} height={150} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-blue-600">eVaLaunche</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                We are a leading technology company dedicated to transforming businesses through innovative software solutions, 
                AI/ML technologies, and data-driven digital marketing strategies.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to empower teams with cutting-edge technology and strategic guidance to achieve measurable business impact.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/about-1.jpg"
                alt="Team collaboration"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-100 rounded-full opacity-50 blur-2xl"></div>
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-cyan-100 rounded-full opacity-50 blur-2xl"></div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {statsDisplay.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-lg mb-4">
                    <IconComponent className={`h-8 w-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{mission.title}</h2>
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
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{vision.title}</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {vision.content}
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose <span className="text-blue-600">eVaLaunche</span>?</h4>
                <ul className="space-y-3">
                  {vision.benefits.map((benefit: string, index: number) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = getIconComponent(value.icon);
              return (
                <div key={value.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-blue-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind our success, dedicated to delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={member.id} className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">
                  {member.expertise.slice(0, 3).join(', ')}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our <span className="text-blue-600">Clients</span> Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.client.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.client.role}, {testimonial.client.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss your project and see how we can help you achieve your business goals with our expert team.
          </p>
          <button 
            onClick={goToContact}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 mx-auto"
          >
            <span>Start Your Project</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
