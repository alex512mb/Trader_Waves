
import React from 'react';

const HowToPlay: React.FC = () => {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
            <div className="container mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-white mb-12">How to Play</h2>
                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400 text-3xl font-bold mb-4">
                            1
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Watch the Market</h3>
                        <p className="text-gray-400">Observe the live chart to identify potential entry points. Look for trends and patterns.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400 text-3xl font-bold mb-4">
                            2
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Execute Your Trade</h3>
                        <p className="text-gray-400">When you think the price will rise, hit 'Buy'. When you're ready to exit, hit 'Sell'.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-cyan-500/20 border-2 border-cyan-500 text-cyan-400 text-3xl font-bold mb-4">
                            3
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Maximize Profit</h3>
                        <p className="text-gray-400">Your goal is to increase your starting balance. Buy low, sell high. Can you time it perfectly?</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowToPlay;
   