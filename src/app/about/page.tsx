'use client';

import { useState } from 'react';
import { Code, Brain, Megaphone, CheckCircle, ArrowRight, Users, Award, Target, Lightbulb, Shield, Zap, Globe, Star, Building2, Briefcase, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const openEmailClient = () => {
    window.location.href = 'mailto:support@evalaunche.com?subject=Project Inquiry&body=Hello, I would like to discuss a project with eVALaunche. Please provide more information about your services.';
  };

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '150+', color: 'text-blue-600' },
    { icon: Code, label: 'Projects Delivered', value: '500+', color: 'text-green-600' },
    { icon: Award, label: 'Success Rate', value: '98%', color: 'text-yellow-600' },
    { icon: Clock, label: 'Years Experience', value: '8+', color: 'text-purple-600' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, delivering solutions that exceed expectations and drive real business value.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace cutting-edge technologies and creative approaches to solve complex business challenges.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'We build trust through consistent delivery, transparent communication, and unwavering commitment to quality.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as partners, ensuring their vision becomes reality through close collaboration.'
    }
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      expertise: 'Strategic Leadership, Business Development',
      description: 'Visionary leader with 10+ years in tech industry, passionate about transforming businesses through technology.'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      expertise: 'Software Architecture, AI/ML',
      description: 'Technical expert specializing in scalable systems and machine learning solutions for enterprise clients.'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Lead Developer',
      expertise: 'Full-Stack Development, Cloud Solutions',
      description: 'Experienced developer with expertise in modern web technologies and cloud infrastructure.'
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Director',
      expertise: 'Digital Marketing, Growth Strategy',
      description: 'Marketing strategist focused on data-driven campaigns and sustainable business growth.'
    }
  ];

  const testimonials = [
    {
      name: 'David Wilson',
      company: 'TechCorp Solutions',
      role: 'CEO',
      content: 'eVALaunche has been instrumental in our digital transformation. Their team&apos;s expertise and dedication are unmatched.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'InnovateLab',
      role: 'CTO',
      content: 'Working with eVALaunche was a game-changer. They delivered exactly what we needed, on time and within budget.',
      rating: 5
    },
    {
      name: 'Robert Kim',
      company: 'StartupHub',
      role: 'Founder',
      content: 'The AI solution they built for us increased our efficiency by 60%. Highly recommend their services.',
      rating: 5
    }
  ];

  return (
    <main className="min-h-screen">
      <Header onStartProject={openEmailClient} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-yellow-600">eVALaunche</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a leading technology company dedicated to transforming businesses through innovative software solutions, 
              AI/ML technologies, and data-driven digital marketing strategies.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => {
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. 
                We believe technology should be accessible, scalable, and transformative for organizations of all sizes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our mission is to be the trusted technology partner that helps businesses navigate the digital landscape 
                and achieve their goals through innovative software development, AI/ML solutions, and strategic digital marketing.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To be the leading technology partner for businesses worldwide, recognized for our innovation, quality, 
                and commitment to client success. We envision a future where technology seamlessly integrates with 
                business strategy.
              </p>
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-2xl border border-yellow-200">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose <span className="text-yellow-600">eVALaunche</span>?</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Free consultation and project assessment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">24/7 support and maintenance</span>
                  </li>
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
              Our <span className="text-yellow-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl mb-6">
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
              Meet Our <span className="text-yellow-600">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented individuals behind our success, dedicated to delivering exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-yellow-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.expertise}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our <span className="text-yellow-600">Clients</span> Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">&ldquo;{testimonial.content}&rdquo;</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Let&apos;s discuss your project and see how we can help you achieve your business goals with our expert team.
          </p>
          <button 
            onClick={openEmailClient}
            className="bg-white text-yellow-600 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 mx-auto"
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
