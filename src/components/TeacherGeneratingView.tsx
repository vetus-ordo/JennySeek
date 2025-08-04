'use client';
import React, { useEffect } from 'react';
import useAppStore from '@/lib/store';

const TeacherGeneratingView = () => {
    const completeGeneration = useAppStore((state) => state.completeGeneration);

    // This useEffect hook safely handles the timer side-effect.
    useEffect(() => {
        // Set up the timer.
        const timerId = setTimeout(() => {
            completeGeneration();
        }, 2500); // 2.5 second delay

        // Return a cleanup function.
        // This runs if the component is unmounted before the timer finishes.
        return () => {
            clearTimeout(timerId);
        };
    }, [completeGeneration]); // The dependency array ensures this effect runs only once.

    return (
        <div className="w-full max-w-2xl text-center">
            <p className="text-sm font-bold text-brand-primary">TEACHER MODE: STEP 2 of 3</p>
            <h2 className="text-h1 mt-2">Generating...</h2>
            
            <div className="mt-8 flex justify-center items-center space-x-2">
                <div className="w-4 h-4 rounded-full bg-brand-primary animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-brand-primary animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-4 h-4 rounded-full bg-brand-primary animate-bounce"></div>
            </div>

            <p className="text-body text-neutral-70 mt-8">Analyzing your topic and constructing the perfect quiz. Please wait.</p>
        </div>
    );
};

export default TeacherGeneratingView;