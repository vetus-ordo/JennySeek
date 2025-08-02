'use client';
import React from 'react';
import useAppStore from '@/lib/store';
import { Assignment } from '@/lib/assignments';
import Button from '@/components/ui/Button';

const AssignmentCard = ({ assignment }: { assignment: Assignment }) => {
  const assignQuiz = useAppStore((state) => state.assignQuiz);

  return (
    <div className="bg-neutral-10 rounded-lg border border-neutral-30 p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-shadow">
      <div>
        <h3 className="text-h3 font-bold text-neutral-90 pr-2">{assignment.title}</h3>
        <p className="text-body text-neutral-70 mt-2 mb-4">{assignment.description}</p>
      </div>
      <div className="mt-6 border-t border-neutral-30 pt-4">
        <Button 
          variant="primary" 
          onClick={() => assignQuiz(assignment.id)} 
          className="w-full"
        >
          Start Assignment
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
    <div className="w-full max-w-7xl mx-auto p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <h1 className="text-title">Student Portal</h1>
        <p className="text-h3 mt-2 md:mt-0">Welcome, <span className="text-brand-primary font-bold">{studentName}</span>!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assignments.map((assignment: Assignment) => (
          <AssignmentCard key={assignment.id} assignment={assignment} />
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;