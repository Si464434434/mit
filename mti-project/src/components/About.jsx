import React from 'react';
import { Code2, Zap, Users, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Code2,
      title: 'Learn Together',
      description: 'Master web dev, cloud, AI, and blockchain through hands-on workshops and projects.'
    },
    {
      icon: Zap,
      title: 'Build Projects',
      description: 'Collaborate on real-world projects and showcase your skills to top companies.'
    },
    {
      icon: Users,
      title: 'Network & Connect',
      description: 'Meet like-minded developers, mentors, and industry professionals.'
    },
    {
      icon: Award,
      title: 'Get Certified',
      description: 'Earn industry-recognized certifications through our certification programs.'
    }
  ];

  return (
    <section id="about" className="bg-[#050505] text-white py-20 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-screen filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            About MTI Hub
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A student-led community committed to fostering innovation, learning, and entrepreneurship in technology.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/30 transition-all group"
              >
                <Icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:text-blue-300 transition-colors" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-300 text-lg leading-relaxed">
            To empower college students with practical tech skills, foster innovation through collaborative projects and hackathons, and build a strong community of developers who are ready to make an impact in the tech industry. We believe in learning by doing and supporting each other's growth.
          </p>
        </div>
      </div>
    </section>
  );
}
