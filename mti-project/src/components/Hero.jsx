import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen bg-[#050505] text-white relative overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-screen flex flex-col justify-center">
        <div className="text-center space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center justify-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 w-fit mx-auto">
            <Zap className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-semibold">Online & Active</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Microsoft Tech
              <br />
              Innovators Hub
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light">
              Shri Ram Group, Jabalpur
            </p>
          </div>

          {/* Tagline */}
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Learn cutting-edge technologies, build amazing projects, and innovate together with India's most dynamic student-led tech community.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-blue-500/50 hover:shadow-blue-500/75 flex items-center justify-center gap-2">
              Join Community
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all backdrop-blur-sm">
              Explore Events
            </button>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-3 gap-4 pt-8 max-w-md mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-cyan-400">1.2K+</p>
              <p className="text-xs text-gray-400">Members</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-cyan-400">45+</p>
              <p className="text-xs text-gray-400">Events</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4 backdrop-blur-sm">
              <p className="text-2xl font-bold text-cyan-400">8K+</p>
              <p className="text-xs text-gray-400">Reach</p>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-gray-500 text-sm">Scroll to explore</div>
        </div>
      </div>
    </section>
  );
}
