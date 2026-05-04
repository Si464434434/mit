import React from 'react';
import teamData from '../data/team.json';

export default function Team() {
  return React.createElement('section', { id: 'team', className: 'bg-[#0a0a0a] text-white py-20 relative' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-6' },
      React.createElement('div', { className: 'text-center mb-16' },
        React.createElement('h2', { className: 'text-4xl md:text-5xl font-black mb-4' }, 'Meet Our Team'),
        React.createElement('p', { className: 'text-gray-400' }, 'Passionate leaders driving innovation')
      ),
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' },
        teamData.team.map((member) =>
          React.createElement('div', {
            key: member.id,
            className: 'bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 transition-all'
          },
            React.createElement('div', { className: 'h-40 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg mb-4 flex items-center justify-center text-5xl font-bold' }, member.name.charAt(0)),
            React.createElement('h3', { className: 'text-xl font-bold mb-1' }, member.name),
            React.createElement('p', { className: 'text-cyan-400 text-sm font-semibold mb-2' }, member.role),
            React.createElement('p', { className: 'text-gray-400 text-sm' }, member.bio)
          )
        )
      )
    )
  );
}
