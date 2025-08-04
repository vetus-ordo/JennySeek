'use client';
import React, { useState } from 'react';
import useAppStore from '@/lib/store';
import { assignments, Assignment } from '@/lib/assignments';
import Button from '@/components/ui/Button';

// Reusable card component to display each assignment
const AssignmentCard = ({ assignment }: { assignment: Assignment }) => {
    const selectAssignment = useAppStore((state) => state.selectAssignment);
    const statusColor = assignment.status === 'In Progress' 
        ? 'bg-green-100 text-denotative-success' 
        : 'bg-yellow-100 text-yellow-800';

    return (
        <div className="bg-neutral-10 p-6 rounded-xl border border-neutral-30 shadow-md transition-transform hover:scale-105">
            <div className="flex justify-between items-start">
                <h3 className="text-h3 font-bold">{assignment.title}</h3>
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${statusColor}`}>{assignment.status}</span>
            </div>
            <p className="text-body text-neutral-70 mt-2">{assignment.description}</p>
            <div className="flex space-x-2 mt-4">
                {assignment.tags.map(tag => (
                    <span key={tag.text} className={`px-2 py-1 text-xs font-medium rounded ${tag.color}`}>
                        {tag.text}
                    </span>
                ))}
            </div>
            <div className="mt-6 text-right">
                <Button variant="primary" onClick={() => selectAssignment(assignment.id)}>
                    Begin Assignment
                </Button>
            </div>
        </div>
    );
}

// The main dashboard component
const TeacherDashboard = () => {
    const [filter, setFilter] = useState<'All' | 'In Progress' | 'Draft'>('All');
    const filteredAssignments = assignments.filter(a => filter === 'All' || a.status === filter);

    return (
        <div className="w-full max-w-4xl">
            <div className="text-center mb-10">
                <p className="text-sm font-bold text-brand-primary">TEACHER MODE</p>
                <h2 className="text-h1 mt-2">Assignment Dashboard</h2>
                <p className="text-body text-neutral-70 mt-2">Here are the assignments the "AI" has prepared. Please select one to review and complete.</p>
            </div>
            
            {/* Filter Buttons */}
            <div className="flex justify-center space-x-2 mb-8">
                <Button variant={filter === 'All' ? 'primary' : 'secondary'} onClick={() => setFilter('All')}>All</Button>
                <Button variant={filter === 'In Progress' ? 'primary' : 'secondary'} onClick={() => setFilter('In Progress')}>In Progress</Button>
                <Button variant={filter === 'Draft' ? 'primary' : 'secondary'} onClick={() => setFilter('Draft')}>Draft</Button>
            </div>

            {/* Assignment Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredAssignments.map(assignment => (
                    <AssignmentCard key={assignment.id} assignment={assignment} />
                ))}
            </div>
        </div>
    );
};

export default TeacherDashboard;