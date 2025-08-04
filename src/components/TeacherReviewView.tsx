'use client';
import React from 'react';
import useAppStore from '@/lib/store';
import Button from '@/components/ui/Button';

const TeacherReviewView = () => {
    const { topic, activeAssignment, approveAssignment } = useAppStore();

    if (!activeAssignment) return null;

    return (
        <div className="w-full max-w-3xl">
            <div className="text-center mb-10">
                <p className="text-sm font-bold text-brand-primary">TEACHER MODE: STEP 3 of 3</p>
                <h2 className="text-h1 mt-2">Review Your Quiz</h2>
                <p className="text-body text-neutral-70 mt-2">
                    Based on your topic <span className="font-bold">"{topic}"</span>, we've generated the following questions.
                </p>
            </div>

            <div className="bg-neutral-10 p-8 rounded-xl border border-neutral-30 space-y-4">
                {activeAssignment.questions.map((q, index) => (
                    <div key={q.id} className="border-b border-neutral-30 pb-3">
                        <p className="font-bold text-body">Q{index + 1}: {q.text}</p>
                        <ul className="list-disc list-inside mt-2 text-neutral-70">
                            {q.options.map((opt, i) => (
                                <li key={i}>{opt}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="mt-8 flex justify-end">
                <Button variant="primary" onClick={approveAssignment}>
                    Approve & Start Quiz
                </Button>
            </div>
        </div>
    );
};

export default TeacherReviewView;