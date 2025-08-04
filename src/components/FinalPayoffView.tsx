'use client';
import React from 'react';
import Confetti from 'react-confetti';

const FinalPayoffView = () => {
    return (
        <div className="w-full max-w-4xl text-center">
            <Confetti width={window.innerWidth} height={window.innerHeight} numberOfPieces={400} recycle={false} />
            <h1 className="text-title font-bold text-brand-primary">Course Complete!</h1>
            <p className="mt-4 text-h2 text-neutral-800">
                You've officially graduated from "Andrew & Jenny: The Pre-Date Sessions."
            </p>
            
            {/* You can place a special image here */}
            {/* <img src="/our-favorite-photo.jpg" alt="A special photo" className="mt-8 rounded-lg shadow-2xl mx-auto" /> */}

            <div className="mt-8 bg-neutral-10 p-8 rounded-2xl shadow-xl border border-neutral-30">
                <p className="text-h3 text-neutral-900 leading-relaxed">
                    All jokes aside, making this was so much fun. Your passion for your work is incredibly inspiring, and I wanted to show you that in a way you'd appreciate.
                    <br/><br/>
                    Thank you for being you. I am counting down the hours until Thursday.
                    <br/><br/>
                    - Andrew
                </p>
            </div>
        </div>
    );
};

export default FinalPayoffView;