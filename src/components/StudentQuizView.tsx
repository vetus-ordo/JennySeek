'use client';
import React, { useState } from 'react';
import useAppStore from '@/lib/store';
import Button from '@/components/ui/Button';

const StudentQuizView = () => {
  // CORRECTED: Using 'submitForGrading' from the new store
  const { activeAssignment, studentAnswers, submitAnswer, submitForGrading } = useAppStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  if (!activeAssignment) return null;

  const currentQuestion = activeAssignment.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === activeAssignment.questions.length - 1;

  const handleNext = () => {
    if (!isLastQuestion) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // CORRECTED: Calling the correct function for the new flow
      submitForGrading();
    }
  };

  return (
    <div className="w-full max-w-3xl bg-neutral-10 p-8 rounded-2xl shadow-2xl border border-neutral-30">
        <div className="text-center mb-8">
            <p className="text-sm font-bold text-brand-primary">STUDENT MODULE</p>
            <p className="text-label text-brand-secondary font-semibold mt-4">{activeAssignment.title}</p>
            <h2 className="text-h2 mt-2">{currentQuestion.text}</h2>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            onClick={() => submitAnswer(currentQuestion.id, index)}
            className={`w-full text-left p-4 rounded-lg border-2 text-button transition-all transform hover:scale-105
              ${studentAnswers[currentQuestion.id] === index 
                ? 'bg-brand-primary-light border-brand-primary text-brand-primary font-bold' 
                : 'bg-neutral-10 border-neutral-40 hover:border-neutral-60'
              }`}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="mt-10 flex justify-end">
        <Button
          variant="primary"
          onClick={handleNext}
          disabled={studentAnswers[currentQuestion.id] === undefined}
        >
          {isLastQuestion ? 'Submit for Grading' : 'Next Question'}
        </Button>
      </div>
    </div>
  );
};

export default StudentQuizView;
