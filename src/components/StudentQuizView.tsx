'use client';
import React, { useState } from 'react';
import useAppStore from '@/lib/store';
import Button from './ui/Button';

const StudentQuizView = () => {
  const { activeAssignment, studentAnswers, submitAnswer, submitForGrading } = useAppStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  if (!activeAssignment) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Quiz...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = activeAssignment.questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === activeAssignment.questions.length - 1;
  const progress = ((currentQuestionIndex + 1) / activeAssignment.questions.length) * 100;

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    submitAnswer(currentQuestion.id, answerIndex);
  };

  const handleNext = () => {
    if (isLastQuestion) {
      submitForGrading();
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(studentAnswers[activeAssignment.questions[currentQuestionIndex + 1]?.id] ?? null);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
      setSelectedAnswer(studentAnswers[activeAssignment.questions[currentQuestionIndex - 1]?.id] ?? null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                {activeAssignment.title}
              </h1>
              <div className="text-sm text-gray-500">
                Question {currentQuestionIndex + 1} of {activeAssignment.questions.length}
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="progress-bar">
              <div 
                className="progress-fill transition-all duration-500" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm border p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-8 leading-relaxed">
            {currentQuestion.text}
          </h2>

          <div className="space-y-4 mb-8">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                    selectedAnswer === index
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedAnswer === index && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className="font-medium">{option}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="secondary"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
            >
              Previous
            </Button>
            
            <Button
              variant="primary"
              onClick={handleNext}
              disabled={selectedAnswer === null}
            >
              {isLastQuestion ? 'Submit Quiz' : 'Next Question'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentQuizView;