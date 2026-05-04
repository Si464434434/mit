import React from 'react';
import { Award, Target, Zap, BookOpen } from 'lucide-react';

export default function Achievements() {
  const achievements = [
    {
      icon: Award,
      title: 'Microsoft Certification Program',
      description: 'Members certified in Azure, Office 365, and Windows Server administration',
      count: '150+',
      color: 'text-blue-400'
    },
    {
      icon: Target,
      title: 'Internship Placements',
      description: 'Successfully placed members in leading tech companies',
      count: '85+',
      color: 'text-cyan-400'
    },
    {
      icon: Zap,
      title: 'Projects Completed',
      description: 'Real-world projects built and deployed by our community',
      count: '42+',
      color: 'text-purple-400'
    },
    {
      icon: BookOpen,
      title: 'Learning Resources',
      description: 'Curated courses, tutorials, and documentation for members',
      count: '200+',
      color: 'text-pink-400'
    }
  ];

  return (
    <section className="bg-[#0a0a0a] text-white py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600/10 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Our Achievements
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Milestones that define our community's success
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/50 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex items-start gap-4">
                  <Icon className={`w-12 h-12 ${achievement.color} flex-shrink-0 mt-1`} />
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-2">
                      <h3 className="text-xl font-bold">{achievement.title}</h3>
                      <span className={`text-2xl font-black ${achievement.color}`}>
                        {achievement.count}
                      </span>
                    </div>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Partnership */}
        <div className="mt-16 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-4">Featured Partner</h3>
          <p className="text-gray-300 mb-6">
            We're proud to partner with Microsoft and other leading organizations to bring world-class learning opportunities to our community members.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Microsoft', 'Azure', 'GitHub', 'Stack Overflow'].map((partner, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/10 rounded-lg p-4 flex items-center justify-center h-20 hover:bg-white/20 transition-all"
              >
                <span className="font-semibold text-gray-300">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
