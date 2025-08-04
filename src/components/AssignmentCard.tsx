'use client';
import React from 'react';
import { Assignment } from '@/lib/assignments';
import Button from './ui/Button';

interface AssignmentCardProps {
  assignment: Assignment;
  onSelect: (assignment: Assignment) => void;
}

const AssignmentCard = ({ assignment, onSelect }: AssignmentCardProps) => {
  const getProgressPercent = () => {
    // Simulate progress based on status
    return assignment.status === 'In Progress' ? 75 : 25;
  };

  return (
    <div className="card group">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {assignment.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            {assignment.description}
          </p>
        </div>
        <span className={`status-badge ${assignment.status === 'In Progress' ? 'status-in-progress' : 'status-draft'}`}>
          {assignment.status}
        </span>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {assignment.tags.map((tag, index) => (
          <span 
            key={index}
            className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}
          >
            {tag.text}
          </span>
        ))}
      </div>
      
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-600">Progress</span>
          <span className="text-sm font-medium text-gray-900">{getProgressPercent()}%</span>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${getProgressPercent()}%` }}
          ></div>
        </div>
      </div>
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {assignment.questions.length} question{assignment.questions.length !== 1 ? 's' : ''}
        </div>
        <Button 
          variant="primary" 
          size="sm"
          onClick={() => onSelect(assignment)}
        >
          Start Assignment
        </Button>
      </div>
    </div>
  );
};

export default AssignmentCard;