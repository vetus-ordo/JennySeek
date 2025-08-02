'use client';
import React from 'react';
import useAppStore from '@/lib/store';
import Button from './ui/Button';

const SplashScreen = () => {
  const startApp = useAppStore((state) => state.startApp);

  return (
    <div className="w-full text-center space-y-6 animate-fade-in">
      <h1 className="text-title text-brand-primary">
        Welcome to JennySeek
      </h1>
      <p className="text-h2 text-neutral-70 max-w-2xl mx-auto">
        A personalized learning experience. Built by Andrew. Inspired by Jenny.
      </p>
      {/* This div is now a flex container to center the button */}
      <div className="pt-4 flex justify-center">
        <Button variant="primary" onClick={startApp} className="text-xl px-8 py-4">
          Begin Your First Assignment
        </Button>
      </div>
      {/* Simple animation styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
