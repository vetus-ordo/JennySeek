'use client';
import React from 'react';
import Confetti from 'react-confetti';
import useAppStore from '@/lib/store';
import Button from '@/components/ui/Button';

const ResultsDashboard = () => {
    const { activeAssignment, studentAnswers, restart } = useAppStore();
    
    if (!activeAssignment) {
        return <p>Loading results...</p>;
    }

    return (
        <div className="w-full max-w-3xl bg-neutral-10 p-8 rounded-2xl shadow-2xl border border-neutral-30 text-center">
            <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />
            <h2 className="text-h1 text-denotative-success">Assignment Complete!</h2>
            <p className="text-h3 text-neutral-80 mt-4">Report Card for: {activeAssignment.title}</p>
            
            <div className="my-8 text-left space-y-6">
                {activeAssignment.questions.map(q => {
                    const studentAnswerIndex = studentAnswers[q.id];
                    const isCorrect = studentAnswerIndex === q.correctAnswerIndex;
                    return (
                        <div key={q.id} className="border-b border-neutral-30 pb-4">
                            <p className="text-body font-bold">{q.text}</p>
                            <p className={`text-body mt-2 ${isCorrect ? 'text-denotative-success' : 'text-denotative-error'}`}>
                                Your answer: {q.options[studentAnswerIndex]} {isCorrect ? '✅' : '❌'}
                            </p>
                            <p className="text-small text-neutral-70 mt-2 italic">Teacher's Comment: "{q.teacherComment}"</p>
                        </div>
                    );
                })}
            </div>

            <p className="text-h3 text-brand-primary mt-10">
                You did amazing! I'm so excited for our date on Thursday. This was just a little something to make you smile.
            </p>

            <Button variant="primary" className="mt-12" onClick={restart}>
                Try Another Assignment
            </Button>
        </div>
    );
};

export default ResultsDashboard;