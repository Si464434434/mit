import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Events from './components/Events.jsx';
import Achievements from './components/Achievements.jsx';
import Stats from './components/Stats.jsx';
import Team from './components/Team.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return React.createElement('div', { className: 'bg-[#050505]' },
    React.createElement(Navbar),
    React.createElement(Hero),
    React.createElement(About),
    React.createElement(Events),
    React.createElement(Achievements),
    React.createElement(Stats),
    React.createElement(Team),
    React.createElement(Gallery),
    React.createElement(Footer)
  );
}

