'use client';
import React, { useEffect, useState } from 'react';
import useAppStore from '@/lib/store';
import Button from '@/components/ui/Button';
import { saveReportCard } from '@/lib/firebase';
import Confetti from 'react-confetti';

const GradedReportView = () => {
  const { studentName, score, activeAssignment, studentAnswers, returnToDashboard } = useAppStore();
  
  // State to hold window dimensions for the confetti
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Save the report card when the component mounts
    if (studentName && activeAssignment) {
      saveReportCard(studentName, activeAssignment.title, studentAnswers);
    }

    // Set window dimensions for confetti once the component is mounted in the browser
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    // Set initial size and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, [studentName, activeAssignment, studentAnswers]);

  if (!activeAssignment) return null;

  return (
    <>
      {/* Render confetti only when we have the window dimensions */}
      {windowSize.width > 0 && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={400}
          gravity={0.1}
        />
      )}
      <div className="w-full max-w-4xl bg-neutral-10 p-8 rounded-2xl shadow-2xl border border-neutral-30">
        <div className="text-center">
          <h1 className="text-title text-brand-primary">Assignment Graded!</h1>
          <p className="text-h1 mt-4">Final Score: <span className="text-denotative-success">{score}% (Perfect!)</span></p>
          <p className="mt-4 text-h3 text-neutral-70">Headmaster Andrew is extremely proud of his star student.</p>
        </div>
        <div className="mt-8 border-t pt-6 space-y-6">
          <h2 className="text-h2 font-bold">Headmaster's Feedback:</h2>
          {activeAssignment.questions.map((q, index) => {
            const studentAnswerIndex = studentAnswers[q.id];
            return (
              <div key={q.id} className="border-b border-neutral-30 pb-4 last:border-b-0">
                <p className="font-bold text-h3">{index + 1}. {q.text}</p>
                <p className="mt-2 text-body">You answered: "{q.options[studentAnswerIndex]}"</p>
                <p className="mt-2 text-body text-neutral-70 italic">
                  <span className="font-bold not-italic text-neutral-90">Comment:</span> {q.teacherComment}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-center">
            <Button variant="primary" onClick={returnToDashboard}>Back to Portal</Button>
        </div>
      </div>
    </>
  );
};

export default GradedReportView;
