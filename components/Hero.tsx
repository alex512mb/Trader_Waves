import React from 'react';

const Hero: React.FC = () => {
  const scrollToGame = () => {
    document.getElementById('game-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-32 pb-20 text-center bg-gray-900">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
          Master the Market
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Welcome to Trader Waves, the ultimate trading simulation game. Learn the ropes, test your strategies, and climb the leaderboards without risking a single penny.
        </p>
        <button 
          onClick={scrollToGame}
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/50"
        >
          Play The Game
        </button>
      </div>
    </section>
  );
};

export default Hero;