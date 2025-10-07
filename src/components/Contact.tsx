'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Button from './atoms/Button';
import { getCompanyStats } from '@/lib/data';

interface ContactProps {
  onStartProject: () => void;
}

const Contact = ({ onStartProject }: ContactProps) => {
  const [stats, setStats] = useState<any>(null);

  useEffect(() => {
    const loadStats = async () => {
      const statsData = await getCompanyStats();
      setStats(statsData);
    };
    loadStats();
  }, []);

  // Show loading state while data loads
  if (!stats) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-8 bg-white/20 rounded-full animate-pulse max-w-32 mx-auto mb-6"></div>
            <div className="h-12 bg-white/20 rounded-lg animate-pulse max-w-2xl mx-auto mb-4"></div>
            <div className="h-6 bg-white/20 rounded-lg animate-pulse max-w-3xl mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="h-32 bg-white/20 rounded-lg animate-pulse"></div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-20 bg-white/20 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-6 py-2 bg-white/20 text-white rounded-full font-semibold text-sm tracking-wide mb-6">
            Let&apos;s talk
          </span>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            Ready to start your project?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Get in touch with our team and let&apos;s discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {/* Quick Contact */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Quick Contact</h3>
              <p className="text-white/80 mb-6">
                Send us an email and we&apos;ll get back to you within 24 hours.
              </p>
              
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full mb-4"
                >
                  <span>Send Email</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              
              <p className="text-sm text-white/60">
                Average response time: {stats.responseTime}
              </p>
            </div>
          </div>

          {/* Detailed Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">Detailed Project</h3>
              <p className="text-white/80 mb-6">
                Have a complex project? Use our detailed contact form for a comprehensive proposal.
              </p>
              
              <Link href="/contact">
                <Button
                  variant="secondary"
                  size="lg"
                  className="w-full"
                >
                  <span>Fill Out Form</span>
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
              </Link>
              
              <p className="text-sm text-white/60 mt-4">
                Get detailed project estimates and timelines
              </p>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stats.responseTime}</div>
              <div className="text-sm text-white/80">Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stats.clientSatisfactionRate}</div>
              <div className="text-sm text-white/80">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{stats.yearsExperienceLong}</div>
              <div className="text-sm text-white/80">Years Experience</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

