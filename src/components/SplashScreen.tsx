'use client';
import React from 'react';
import useAppStore from '@/lib/store';
import Button from './ui/Button';

const SplashScreen = () => {
  const { startApp } = useAppStore();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
            <span className="text-white font-bold text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              JS
            </span>
          </div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#9E18B9' }}>
            JennySeek
          </h1>
        </div>
        
        <Button
          variant="primary"
          onClick={startApp}
          className="text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-colors"
          style={{ backgroundColor: '#9E18B9' }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#861774'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#9E18B9'}
        >
          Begin Your Adventure
        </Button>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold mb-2 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', color: '#000000' }}>
            An interactive platform built by Andrew.
          </h1>
          <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', color: '#9E18B9' }}>
            Inspired by Jenny.
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            JennySeek is a personalized experience where Andrew seeks to extract Jenny from her current "situation" because he's fallen for her.
          </p>
        </div>

        {/* Video placement below description - autoplay, muted, loop */}
        <div className="max-w-4xl mx-auto mb-16">
          <video 
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-lg shadow-lg"
            src="/video.mp4"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Features Section - More Professional */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Why JennySeek?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#9E18B9', opacity: 0.1 }}>
                <svg className="w-8 h-8" style={{ color: '#9E18B9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Thoughtful Design
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every component crafted with genuine care and attention to detail.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Precision Engineering
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Built with the same precision Jenny brings to her work.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Genuine Intent
              </h3>
              <p className="text-gray-600 leading-relaxed">
                No pretense - just honest recognition of someone remarkable.
              </p>
            </div>
          </div>
        </div>

        {/* Simple CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Ready to begin?
          </h2>
          <Button
            variant="primary"
            onClick={startApp}
            className="text-white px-12 py-4 text-xl rounded-lg font-semibold shadow-lg transition-colors"
            style={{ backgroundColor: '#9E18B9' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#861774'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#9E18B9'}
          >
            Begin Your Adventure
          </Button>
        </div>

        {/* Powered by Pooh at the bottom */}
        <div className="text-center mt-20 pt-8 border-t border-gray-100">
          <p className="text-gray-400 text-sm">
            Powered by Pooh
          </p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
