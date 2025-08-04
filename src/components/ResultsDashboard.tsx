'use client';
import React from 'react';
import Confetti from 'react-confetti';
import useAppStore from '@/lib/store';
import Button from '@/components/ui/Button';
import Image from 'next/image';

const ResultsDashboard = () => {
    const { activeAssignment, studentAnswers, restart } = useAppStore();
    
    if (!activeAssignment) return <p>Loading results...</p>;

    const score = activeAssignment.questions.reduce((acc, q) => {
        return studentAnswers[q.id] === q.correctAnswerIndex ? acc + 1 : acc;
    }, 0);
    const total = activeAssignment.questions.length;

    return (
        <div className="w-full max-w-3xl bg-neutral-10 p-8 rounded-2xl shadow-2xl border border-neutral-300">
            <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} />
            
            <div className="flex items-center gap-3 mb-2">
                <Image src="/icons/ChartSquareBarOutline.png" alt="Results" width={24} height={24}/>
                <p className="text-sm font-bold text-brand-primary">RESULTS</p>
            </div>
            <h2 className="text-h1 text-denotative-success">Assignment Complete!</h2>
            <p className="text-h3 text-neutral-800 mt-2">You scored {score} out of {total}.</p>
            
            <div className="my-8 text-left space-y-6">
                {activeAssignment.questions.map(q => {
                    const studentAnswerIndex = studentAnswers[q.id];
                    const isCorrect = studentAnswerIndex === q.correctAnswerIndex;
                    return (
                        <div key={q.id} className="border-b border-neutral-300 pb-4">
                            <p className="text-body font-bold">{q.text}</p>
                            <div className={`flex items-center gap-2 text-body mt-2 ${isCorrect ? 'text-denotative-success' : 'text-denotative-error'}`}>
                                <Image src={isCorrect ? "/icons/check.png" : "/icons/x.png"} alt={isCorrect ? "Correct" : "Incorrect"} width={20} height={20} />
                                <span>Your answer: {q.options[studentAnswerIndex]}</span>
                            </div>
                            <p className="text-small text-neutral-700 mt-2 italic">Teacher's Comment: "{q.teacherComment}"</p>
                        </div>
                    );
                })}
            </div>

            <Button variant="primary" className="mt-8" onClick={restart}>
                Back to Dashboard
            </Button>
        </div>
    );
};

export default ResultsDashboard;