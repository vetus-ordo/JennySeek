'use client';
import React, { useState } from 'react';
import useAppStore from '@/lib/store';
import Button from './ui/Button';

const SplashScreen = () => {
  const { startApp } = useAppStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

const features = [
  {
    title: "She's Radiant",
    description:
      "Because she scrambles your brain because she's so beautiful, even when she says she looks like a salamander. Very unfair.",
    image: "/salamander.png",
  },
  {
    title: "A Rare Chemistry",
    description:
      "Because it feels like we've been talking for years.",
    image: "/chemistry.jpg",
  },
  {
    title: "We Crack Each Other Up",
    description:
      'Because we have these can’t-stop laughing loops.',
    image: "/laughing.jpg",
  },
  {
    title: "Adventure Planning",
    description:
      "Because I see a real future with her.",
    image: "/future.jpg",
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "Because extraction is imminent.",
    image: "/heart.png",
  },
];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Fixed Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white backdrop-blur-md shadow-sm" aria-label="Main navigation">
        <div className="max-w-full mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 w-full">
            <div className="flex items-center space-x-10">
              {/* Logo Section */}
              <a className="inline-block" href="/">
                <span className="sr-only">JennySeek</span>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                    <span className="text-white font-bold text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      JS
                    </span>
                  </div>
                  <h1 className="text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#7F1395' }}>
                    JennySeek
                  </h1>
                </div>
              </a>
              
              {/* Navigation Links - Hidden on mobile */}
              <div className="hidden md:flex items-center space-x-8 tracking-wide">
                <button type="button" className="text-gray-800 border-b border-transparent hover:border-gray-400 transition-all duration-200">
                  Features
                </button>
                <button type="button" className="text-gray-800 border-b border-transparent hover:border-gray-400 transition-all duration-200">
                  About
                </button>
              </div>
            </div>
            
            {/* CTA Button - Hidden on mobile */}
            <div className="hidden md:block">
              <Button
                variant="primary"
                onClick={startApp}
                className="px-6 py-3 text-white font-semibold transition duration-200 rounded-xl inline-flex items-center"
                style={{ backgroundColor: '#7F1395' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#6B1180';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#7F1395';
                }}
              >
                Begin Your Adventure
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="ml-2 w-4 h-4" 
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                type="button"
                aria-label="Toggle Mobile Menu"
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-2 pb-3 space-y-1">
              <button 
                type="button"
                className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              >
                Features
              </button>
              <button 
                type="button"
                className="block w-full text-left px-3 py-2 text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
              >
                About
              </button>
              <div className="pt-2 border-t border-gray-200">
                <Button
                  variant="primary"
                  onClick={startApp}
                  className="w-full px-3 py-2 text-white font-semibold rounded-md"
                  style={{ backgroundColor: '#7F1395' }}
                >
                  Begin Your Adventure
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <div className="bg-white">
          {/* Hero Section */}
          <section className="relative pt-20">
            {/* Custom Background gradient with EduSeek colors */}
            <div className="absolute inset-0 h-[94%] bg-gradient-to-b from-transparent via-indigo-50/70 to-[hsla(199,91%,35%,0.5)]" />
            
            <div className="relative max-w-7xl mx-auto px-10">
              <div className="text-center">
                {/* Split title lines - Fixed line breaks */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                  <span className="block transform transition-all duration-500 hover:scale-105 text-gray-900 mb-2">
                    An interactive platform built by Andrew.
                  </span>
                  <span className="block transform transition-all duration-500 hover:scale-105" style={{ color: '#7F1395' }}>
                    Inspired by Jenny.
                  </span>
                </h1>
                
                <p className="mt-10 max-w-3xl mx-auto text-lg sm:text-xl text-gray-600 leading-relaxed">
                  JennySeek is a personalized experience where Andrew seeks to extract Jenny from her current "situation" because he's fallen for her.
                </p>
                
                {/* Video Section */}
                <div className="mt-10 max-w-3xl mx-auto">
                  <video 
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
                  >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Features Section - Why JennySeek? */}
          <section className="relative">
            <section className="relative z-10 px-10" id="features">
              <div className="max-w-5xl mx-auto mt-32 md:px-8">
                <h2 className="mb-10 sm:text-3xl md:text-4xl font-bold text-center tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Why JennySeek?
                </h2>
                
                <div className="w-full bg-blue-50 rounded-xl p-4 md:p-8 shadow-xl py-6 md:py-10 min-h-[550px]">
                  
                  {/* Mobile Version */}
                  <div className="flex flex-col md:hidden">
                    <h3 className="text-xl font-bold ml-2 mb-4">Why JennySeek?</h3>
                    <hr className="border-gray-400 mb-2" />
                    <ul className="text-gray-700">
                      {features.map((feature, index) => (
                        <li key={index} className="last:border-b-0 border-b border-gray-400">
                          <button 
                            className={`block w-full text-left py-3 px-2 text-base transition duration-200 ${
                              activeFeature === index 
                                ? 'text-blue-900 bg-gradient-to-b from-white/50 to-blue-50' 
                                : 'text-blue-700 hover:text-blue-900'
                            }`}
                            type="button"
                            onClick={() => setActiveFeature(activeFeature === index ? -1 : index)}
                          >
                            {feature.title}
                          </button>
                          {activeFeature === index && (
                            <div className="bg-white rounded-xl p-4 shadow-2xl w-full my-4 animate-fadeIn">
                              <p className="text-gray-900 mb-4 text-base tracking-tight">
                                {feature.description}
                              </p>
                              <div className="w-full aspect-[4/3] flex justify-center items-center overflow-hidden">
                                <img src={feature.image} alt={feature.title} className="w-full h-full object-cover rounded-lg animate-fadeIn" />
                              </div>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Desktop Version */}
                  <div className="hidden md:grid md:grid-cols-[40%_54%] gap-10">
                    <div className="flex flex-col justify-start">
                      <h3 className="text-xl md:text-2xl font-bold ml-2 mb-4">Why JennySeek?</h3>
                      <hr className="border-gray-400" />
                      <ul className="text-gray-700">
                        {features.map((feature, index) => (
                          <li key={index} className="last:border-b-0 border-b border-gray-400">
                            <button 
                              className={`block w-full text-left py-3 px-2 md:text-lg transition duration-200 ${
                                activeFeature === index 
                                  ? 'text-blue-900 bg-gradient-to-b from-white/50 to-blue-50' 
                                  : 'text-blue-700 hover:text-blue-900'
                              }`}
                              type="button"
                              onClick={() => setActiveFeature(index)}
                            >
                              {feature.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-col mx-auto">
                      <div className="bg-white mx-auto rounded-xl p-8 shadow-2xl w-full max-w-xl min-h-[420px]">
                        <p className="text-gray-900 md:px-4 mb-8 md:text-lg tracking-tight animate-fadeIn">
                          {features[activeFeature]?.description}
                        </p>
                        <div className="w-full aspect-[4/3] flex justify-center items-center overflow-hidden">
                          <img src={features[activeFeature]?.image} alt={features[activeFeature]?.title} className="w-full h-full object-cover rounded-lg animate-fadeIn" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          {/* Built for Relationships Section */}
          <section className="p-2">
            <div className="mx-auto px-6 my-32">
              <h2 className="mb-8 text-gray-800 text-3xl font-bold text-center md:text-4xl tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Built for Jenny. Backed by authenticity.
              </h2>
              <p className="md:w-full mx-auto text-center text-gray-900 px-6 lg:text-lg">
                Fully compliant with the highest standards of butterflies, late-night texts, and making each other laugh.
              </p>
              <div className="flex justify-center items-center mt-14 space-x-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💯</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">100% Genuine</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🥰</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Certified Cute</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✅</span>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">Parent Approved</p>
                </div>
              </div>
            </div>
          </section>

          {/* Three Column Section - Moved from earlier */}
          <section className="bg-gradient-to-b from-gray-50 to-white py-16">
            <div className="max-w-7xl mx-auto px-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 */}
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#7F1395', opacity: 0.1 }}>
                    <svg className="w-8 h-8" style={{ color: '#7F1395' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

                {/* Column 2 */}
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

                {/* Column 3 */}
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
                    Just honest recognition of someone remarkable.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* EduSeek-Style CTA Section with Blue Gradient */}
          <div className="relative bg-gradient-to-br from-[#09A4EC] via-[#045276] to-[#022938] py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Ready to begin your JennySeek adventure?
              </h2>
              <button
                onClick={startApp}
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-xl text-blue-900 bg-white hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Begin Your Adventure
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-transparent border-t border-gray-300 mt-6">
        <div className="max-w-7xl mx-auto py-5 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600 font-normal tracking-wide">
            © 2025 JennySeek. Made with <span className="text-red-500">❤</span> by Pooh. Powered by Honey.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SplashScreen;