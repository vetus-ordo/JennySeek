'use client';
import React from 'react';
import useAppStore from '@/lib/store';
import { assignments, Assignment } from '@/lib/assignments';

const AssignmentCard = ({ assignment }: { assignment: Assignment }) => {
    const selectAssignment = useAppStore((state) => state.selectAssignment);
    const statusColor = assignment.status === 'In Progress'
        ? 'bg-green-100 text-green-700'
        : 'bg-orange-100 text-orange-700';

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{assignment.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusColor}`}>
                    {assignment.status}
                </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{assignment.description}</p>
            <div className="flex gap-2 mb-4">
                {assignment.tags.map((tag, idx) => (
                    <span key={idx} className={`px-2 py-1 rounded text-xs ${tag.color}`}>
                        {tag.text}
                    </span>
                ))}
            </div>
            <div className="mb-4">
                <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>17/25 students submitted</span>
                    <span>68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
            </div>
            <button
                onClick={() => selectAssignment(assignment)}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
                View Assignment
            </button>
            <div className="flex justify-center gap-4 mt-3 text-gray-400">
                <button className="p-1">✏️</button>
                <button className="p-1">📋</button>
                <button className="p-1">✓</button>
                <button className="p-1">🗑️</button>
            </div>
        </div>
    );
};

const TeacherDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="mb-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Assignment</h1>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium">
                        + Assignment
                    </button>
                </div>
                <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex-1 relative min-w-[200px]">
                        <input
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Search Assignment"
                        />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                    </div>
                    <select className="px-4 py-3 border border-gray-300 rounded-lg bg-white">
                        <option>Assignment Type</option>
                    </select>
                    <select className="px-4 py-3 border border-gray-300 rounded-lg bg-white">
                        <option>Submission Type</option>
                    </select>
                    <select className="px-4 py-3 border border-gray-300 rounded-lg bg-white">
                        <option>Status</option>
                    </select>
                    <select className="px-4 py-3 border border-gray-300 rounded-lg bg-white">
                        <option>Sort</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {assignments.map((assignment) => (
                    <AssignmentCard key={assignment.id} assignment={assignment} />
                ))}
            </div>
        </div>
    );
};

export default TeacherDashboard;