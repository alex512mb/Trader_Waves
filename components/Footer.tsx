import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto px-6 py-8 text-center text-gray-400">
        <div className="text-2xl font-bold tracking-wider mb-2">
            <span className="text-cyan-400">Trader</span><span className="text-white">Waves</span>
        </div>
        <p>&copy; {new Date().getFullYear()} Trader Waves. All Rights Reserved. This is a fictional game for entertainment purposes.</p>
      </div>
    </footer>
  );
};

export default Footer;