import React from 'react';

const GameSimulator: React.FC = () => {
  return (
    <div className="w-full max-w-5xl mx-auto aspect-video">
      <iframe
        src="./unity_game/index.html"
        className="w-full h-full border-4 border-cyan-500 rounded-lg shadow-2xl shadow-cyan-500/20"
        title="Trader Waves Game"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default GameSimulator;