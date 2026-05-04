import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import eventsData from '../data/events.json';

export default function Events() {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Workshop', 'Bootcamp', 'Hackathon', 'Seminar'];
  
  const filteredEvents = filter === 'All' 
    ? eventsData.events 
    : eventsData.events.filter(e => e.category === filter);

  const getCategoryColor = (category) => {
    const colors = {
      'Workshop': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      'Bootcamp': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
      'Hackathon': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      'Seminar': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  };

  return (
    <section id="events" className="bg-[#0a0a0a] text-white py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-screen filter blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join us for workshops, bootcamps, hackathons, and seminars
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-3 justify-center flex-wrap mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => (
            <div
              key={event.id}
              className="group bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:border-blue-500/50 hover:from-white/15 hover:to-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-4 ${getCategoryColor(event.category)}`}>
                {event.category}
              </div>

              {/* Event Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-300 transition-colors">
                {event.title}
              </h3>

              {/* Event Details */}
              <div className="space-y-2 mb-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>{event.attendees} interested</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm mb-4">
                {event.description}
              </p>

              {/* Register Button */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-2 rounded-lg font-semibold text-sm transition-all">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
