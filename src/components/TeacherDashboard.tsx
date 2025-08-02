'use client';
import React from 'react';
import Image from 'next/image';
import useAppStore from '@/lib/store';
import { Assignment } from '@/lib/assignments';
import Button from '@/components/ui/Button';

// This component mimics the layout of the "Assignment Page_Teachers_Cards" screenshot.
const AssignmentCard = ({ assignment, studentName }: { assignment: Assignment, studentName: string | null }) => {
  const assignQuiz = useAppStore((state) => state.assignQuiz);

  return (
    <div className="bg-white rounded-lg border border-neutral-light p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow">
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-h2-desktop font-bold text-text-dark pr-2">{assignment.title}</h3>
        </div>
        <p className="text-body-desktop text-neutral-dark/80 mb-4">{assignment.description}</p>
      </div>
      <div className="mt-6 border-t border-neutral-light pt-4">
        <Button 
          variant="primary" 
          onClick={() => assignQuiz(assignment.id)} 
          className="w-full text-button-desktop"
        >
          Assign to {studentName || 'Student'}
        </Button>
      </div>
    </div>
  );
};

const TeacherDashboard = () => {
  const { assignments, studentName } = useAppStore((state) => ({
    assignments: state.assignments,
    studentName: state.studentName,
  }));

  return (
    <div className="bg-bg-light min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-title-desktop font-display">JennySeek Assignments</h1>
          <p className="text-lg">Student: <span className="font-bold">{studentName}</span></p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assignments.map((assignment: Assignment) => (
            <AssignmentCard key={assignment.id} assignment={assignment} studentName={studentName} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;