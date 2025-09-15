import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameSimulator from './components/GameSimulator';
import Features from './components/Features';
import HowToPlay from './components/HowToPlay';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <div id="game-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
             <h2 className="text-4xl font-extrabold text-center text-white mb-4">
                Play Trader Waves
            </h2>
            <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                The full game is embedded below. For the best experience, use the fullscreen button provided by the game.
            </p>
            <GameSimulator />
        </div>
        <Features />
        <HowToPlay />
      </main>
      <Footer />
    </div>
  );
};

export default App;