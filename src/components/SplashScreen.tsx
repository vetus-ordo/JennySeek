'use client';
import React from 'react';
import useAppStore from '@/lib/store';
import Button from '@/components/ui/Button'; // CORRECTED IMPORT PATH

// Heart Icon SVG to use for romantic accents
const HeartIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
  </svg>
);

// Arrow Icon for the main button
const ArrowUpRightIcon = ({ className }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 7h10v10"></path>
        <path d="M7 17 17 7"></path>
    </svg>
);

// A simple component for feature cards, with a more personal touch
const FeatureCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="bg-neutral-10 p-6 rounded-lg border border-neutral-30 shadow-sm text-center">
    <h3 className="text-h3 font-bold text-brand-accent">{title}</h3>
    <p className="mt-2 text-body text-neutral-90">{children}</p>
  </div>
);

const SplashScreen = () => {
  const startApp = useAppStore((state) => state.startApp);

  return (
    <div className="w-full bg-bg-light">
      {/* --- Navigation --- */}
      <nav className="fixed w-full z-50 bg-neutral-10/80 backdrop-blur-md border-b border-neutral-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-h2 font-bold text-brand-primary">JennySeek</h1>
            <div>
              <Button variant="primary" onClick={startApp}>
                Start Assignment <ArrowUpRightIcon className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {/* --- Hero Section --- */}
        <section className="relative pt-20 pb-16">
          <div className="absolute inset-0 h-full bg-gradient-to-b from-brand-primary-light to-bg-light"></div>
          <div className="relative max-w-7xl mx-auto px-10 text-center">
            <h1 className="text-title font-bold text-neutral-90">
              <span className="inline-block">An adventure for Jenny.</span>
              <span className="inline-block text-brand-primary mt-2">Built by Andrew. Inspired by You.</span>
            </h1>
            <p className="mt-8 max-w-3xl mx-auto text-h3 text-neutral-90 leading-relaxed">
              Welcome to a little corner of the internet made just for you. Think of it as a pre-first-date assignment where the only goal is to have a little fun.
            </p>
            
            {/* --- VIDEO PLAYER --- */}
            <div className="mt-10 max-w-3xl mx-auto">
                <video 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full rounded-xl shadow-2xl"
                >
                  <source src="/video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            </div>
          </div>
        </section>

        {/* --- "Why this exists" Section (RESTORED) --- */}
        <section className="w-full py-16 md:py-24 bg-neutral-10 border-y border-neutral-30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <h2 className="text-h1">What's This All About?</h2>
              <p className="text-body mt-4 max-w-2xl mx-auto text-neutral-90">
                Just a fun way of saying how much I've grown to like you. Here are the core principles of this platform:
              </p>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard title="100% Custom">
                This is a stress-free zone. There are no wrong answers, only fun questions.
              </FeatureCard>
              <FeatureCard title="Zero Pressure">
                Every part of this was built with you in mind.
              </FeatureCard>
              <FeatureCard title="Guaranteed Fun">
                The primary goal here is to make you smile!
              </FeatureCard>
            </div>
          </div>
        </section>

        {/* --- "Backed by Standards" Section --- */}
        <section className="px-2">
          <div className="mx-auto px-6 my-24 text-center">
            <h2 className="mb-4 text-h1 font-bold">Built with Jenny in mind</h2>
            <p className="lg:text-lg text-neutral-90">Fully compliant with the highest standards of romance and effort.</p>
            <div className="flex justify-center items-center space-x-8 mt-10 text-brand-accent">
                <div className="text-center">
                    <HeartIcon className="h-12 w-12 mx-auto" />
                    <p className="mt-2 font-semibold">100% Genuine</p>
                </div>
                <div className="text-center">
                    <HeartIcon className="h-12 w-12 mx-auto" />
                    <p className="mt-2 font-semibold">Certified Cute</p>
                </div>
                <div className="text-center">
                    <HeartIcon className="h-12 w-12 mx-auto" />
                    <p className="mt-2 font-semibold">Andrew Approved</p>
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SplashScreen;
