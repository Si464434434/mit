import React, { useState, useEffect } from 'react';
import { Users, Trophy, Zap, Target } from 'lucide-react';

function AnimatedCounter({ end, suffix = '' }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrameId;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / 2000, 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [end]);
  
  return (
    <span>{count}{suffix}</span>
  );
}

export default function Stats() {
  const stats = [
    {
      icon: Users,
      value: 1200,
      suffix: '+',
      label: 'Active Members',
      color: 'text-blue-400'
    },
    {
      icon: Trophy,
      value: 45,
      suffix: '+',
      label: 'Events Conducted',
      color: 'text-cyan-400'
    },
    {
      icon: Zap,
      value: 8000,
      suffix: '+',
      label: 'Community Reach',
      color: 'text-purple-400'
    },
    {
      icon: Target,
      value: 20,
      suffix: '+',
      label: 'Companies Partnered',
      color: 'text-pink-400'
    }
  ];

  return (
    <section className="bg-[#050505] text-white py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/15 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Our Impact
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building a thriving tech community, one event at a time
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-500/50 hover:from-white/15 hover:to-white/10 transition-all duration-300 text-center hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Icon className={`w-12 h-12 ${stat.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
                <div className={`text-5xl font-black ${stat.color} mb-2`}>
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
