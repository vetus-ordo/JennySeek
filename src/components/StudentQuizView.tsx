'use client';
import React, { useState } from 'react';
import useAppStore from '@/lib/store';

const StudentQuizView = () => {
    const { activeAssignment, studentAnswers, submitAnswer, submitForGrading } = useAppStore();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    if (!activeAssignment) {
        // Fallback UI while the assignment is loading or if none is active
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Loading Quiz...</p>
            </div>
        );
    }

    const currentQuestion = activeAssignment.questions[currentQuestionIndex];
    const totalQuestions = activeAssignment.questions.length;
    const progressPercentage = ((currentQuestionIndex + 1) / totalQuestions) * 100;
    const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

    const handleNext = () => {
        if (!isLastQuestion) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            submitForGrading();
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            <div className="w-full max-w-3xl bg-white rounded-lg shadow-xl">
                <div className="bg-white border-b border-gray-200 p-4 rounded-t-lg">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-blue-600">STUDENT MODE</span>
                        <span className="text-sm text-gray-500">
                            Question {currentQuestionIndex + 1} of {totalQuestions}
                        </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progressPercentage}%` }}
                        ></div>
                    </div>
                </div>
                <div className="p-8">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 mt-2">{currentQuestion.text}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentQuestion.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => submitAnswer(currentQuestion.id, index)}
                                className={`w-full text-left p-4 rounded-lg border-2 text-base font-medium transition-all transform hover:scale-105
                                ${studentAnswers[currentQuestion.id] === index
                                        ? 'border-blue-600 bg-blue-50 text-blue-700'
                                        : 'bg-white border-gray-300 hover:border-gray-500'
                                    }`}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    <div className="mt-10 flex justify-end">
                        <button
                            onClick={handleNext}
                            disabled={studentAnswers[currentQuestion.id] === undefined}
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
                        >
                            {isLastQuestion ? 'Submit For Grading' : 'Next Question'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentQuizView;