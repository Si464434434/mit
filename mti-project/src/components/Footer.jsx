import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return React.createElement('footer', { className: 'bg-[#050505] text-white border-t border-white/10 py-12' },
    React.createElement('div', { className: 'max-w-7xl mx-auto px-6' },
      React.createElement('div', { className: 'text-center mb-8' },
        React.createElement('h3', { className: 'text-2xl font-bold mb-2' }, 'Microsoft Tech Innovators Hub'),
        React.createElement('p', { className: 'text-gray-400' }, 'Shri Ram Group, Jabalpur')
      ),
      React.createElement('div', { className: 'flex justify-center gap-6 mb-8' },
        React.createElement('a', { href: '#', className: 'text-gray-400 hover:text-blue-400 transition-colors' }, 'Privacy'),
        React.createElement('a', { href: '#', className: 'text-gray-400 hover:text-blue-400 transition-colors' }, 'Terms'),
        React.createElement('a', { href: '#', className: 'text-gray-400 hover:text-blue-400 transition-colors' }, 'Contact')
      ),
      React.createElement('div', { className: 'text-center text-gray-500 text-sm' },
        `© ${currentYear} MTI Hub. All rights reserved. Built with ❤️ by the community.`
      )
    )
  );
}
