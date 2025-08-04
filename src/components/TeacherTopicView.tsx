'use client';
import React from 'react';
import useAppStore from '@/lib/store';
import Button from '@/components/ui/Button';

const TeacherTopicView = () => {
    const { topic, setTopic, generateAssignment } = useAppStore();

    return (
        <div className="w-full max-w-2xl text-center">
            <p className="text-sm font-bold text-brand-primary">TEACHER MODE: STEP 1 of 3</p>
            <h2 className="text-h1 mt-2">Generate a New Quiz</h2>
            <p className="text-body text-neutral-70 mt-2">Enter any topic below to have our AI generate a set of relevant questions for your students.</p>

            <div className="mt-8">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder='e.g., "The History of Us"'
                    className="w-full p-4 text-center text-lg border-2 border-neutral-30 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none"
                />
            </div>
            <div className="mt-6">
                <Button 
                    variant="primary" 
                    onClick={generateAssignment} 
                    disabled={!topic.trim()}
                >
                    Generate Questions
                </Button>
            </div>
        </div>
    );
};

export default TeacherTopicView;