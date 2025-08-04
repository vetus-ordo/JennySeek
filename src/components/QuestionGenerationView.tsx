'use client';
import React from 'react';
import useAppStore from '@/lib/store';
import Button from '@/components/ui/Button'; // CORRECTED IMPORT PATH

const QuestionGenerationView = () => {
  const { 
    topic, 
    setTopic, 
    generateAssignment, 
    isGenerating, 
    activeAssignment, 
    startQuiz 
  } = useAppStore();

  return (
    <div className="w-full max-w-2xl bg-neutral-10 p-8 rounded-xl shadow-2xl border border-neutral-30">
      <div className="text-center">
        <p className="text-sm font-bold text-brand-primary">TEACHER MODULE</p>
        <h2 className="text-h2 mt-2">Generate a New Assignment</h2>
        <p className="text-body text-neutral-70 mt-2">Enter a topic to generate a quiz using the EduSeek AI.</p>
      </div>

      {!activeAssignment ? (
        <div className="mt-6">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., History of Us..."
            className="w-full p-3 border border-neutral-40 rounded-lg text-body"
            disabled={isGenerating}
          />
          <Button 
            variant="primary" 
            className="w-full mt-4" 
            onClick={generateAssignment}
            disabled={!topic || isGenerating}
          >
            {isGenerating ? 'Generating...' : 'Generate Questions'}
          </Button>
        </div>
      ) : (
        <div className="mt-6 text-center border-t border-neutral-30 pt-6">
          <h3 className="text-h3 text-denotative-success">Generation Complete!</h3>
          <p className="text-body text-neutral-80 mt-2">
            Your assignment, "{activeAssignment.title}," has been created with {activeAssignment.questions.length} questions.
          </p>
          <p className="text-body text-neutral-70 mt-4">
            Now, you can switch to the student module to test the quiz.
          </p>
          <Button variant="primary" className="mt-6" onClick={startQuiz}>
            Begin Student Test
          </Button>
        </div>
      )}
    </div>
  );
};

export default QuestionGenerationView;
