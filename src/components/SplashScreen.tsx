'use client';
import React from 'react';
import useAppStore from '@/lib/store';
import Button from './ui/Button';

// This component's design is inspired by the eduseek.ai landing page
const SplashScreen = () => {
  const startApp = useAppStore((state) => state.startApp);

  return (
    // Uses the dark background color from your color palette
    <div className="bg-bg-light text-text-dark min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-6">
        <h1 className="text-title-desktop font-display animate-fade-in-down">
          JennySeek
        </h1>
        <p className="text-h2-desktop text-neutral-light max-w-2xl animate-fade-in-up">
          A personalized learning experience by Andrew. Inspired by Jenny.
        </p>
        <div className="animate-fade-in-up-delay">
          <Button variant="primary" onClick={startApp} className="text-xl px-8 py-4">
            Begin Onboarding
          </Button>
        </div>
      </div>
       {/* Simple animation styles can be added to globals.css if you wish */}
       <style jsx>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-down {
          animation: fadeInDown 1s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out 0.5s forwards;
          opacity: 0;
        }
        .animate-fade-in-up-delay {
          animation: fadeInUp 1s ease-out 1s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;