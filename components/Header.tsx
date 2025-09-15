import React from 'react';

const Header: React.FC = () => {
  const scrollToGame = () => {
    document.getElementById('game-section')?.scrollIntoView({ behavior: 'smooth' });
  };
    
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-wider">
          <span className="text-cyan-400">Trader</span><span className="text-white">Waves</span>
        </div>
        <nav>
          <button onClick={scrollToGame} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
            Play Game
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;