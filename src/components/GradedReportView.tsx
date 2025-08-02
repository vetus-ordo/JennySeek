'use client';
import React from 'react';
import useAppStore from '@/lib/store';
import Button from '@/components/ui/Button';

const GradedReportView = () => {
  const { score, activeAssignment, studentAnswers, returnToDashboard } = useAppStore();

  if (!activeAssignment) return null;

  return (
    <div className="bg-bg-light min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-2xl border border-neutral-light">
        <div className="text-center">
          <h1 className="text-title-desktop text-brand-primary">Assignment Graded!</h1>
          <p className="text-h1-desktop mt-4">Final Score: <span className="text-denotative-success">{score}%</span></p>
        </div>
        <div className="mt-8 border-t pt-6 space-y-6">
          <h2 className="text-h2-desktop font-bold">Teacher's Feedback:</h2>
          {activeAssignment.questions.map((q) => {
            const studentAnswerIndex = studentAnswers[q.id];
            const isCorrect = studentAnswerIndex === q.correctAnswerIndex;
            return (
              <div key={q.id} className="border-b pb-4">
                <p className="font-bold text-lg">{q.text}</p>
                <p className="mt-2">You answered: "{q.options[studentAnswerIndex]}"</p>
                <p className={`mt-1 font-semibold ${isCorrect ? 'text-denotative-success' : 'text-denotative-error'}`}>
                  {isCorrect ? 'Correct!' : `Correct Answer: "${q.options[q.correctAnswerIndex]}"`}
                </p>
                <p className="mt-2 text-sm text-gray-600 italic">
                  <span className="font-bold">Teacher's Comment:</span> {q.teacherComment}
                </p>
              </div>
            );
          })}
        </div>
        <div className="mt-8 text-center">
            <Button variant="primary" onClick={returnToDashboard}>Back to Dashboard</Button>
        </div>
      </div>
    </div>
  );
};

export default GradedReportView;