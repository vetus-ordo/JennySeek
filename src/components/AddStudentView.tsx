'use client';
import React, { useState } from 'react';
import useAppStore from '@/lib/store';
import Button from './ui/Button';

// This component mimics the "Add Students to Classroom" modal
const AddStudentView = () => {
  const addStudent = useAppStore((state) => state.addStudent);
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      addStudent(name.trim());
    }
  };

  return (
    <div className="bg-bg-light min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-neutral-light">
        <h2 className="text-2xl font-bold text-center">Create Your Class</h2>
        <p className="text-center text-gray-500 mt-2 mb-6">Add your first student to begin.</p>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full p-3 border border-[#AFB1B6] rounded-lg text-base h-24"
            placeholder="Enter student name... e.g., Andrew"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="mt-4">
            <Button variant="primary" type="submit" className="w-full" disabled={!name.trim()}>
              Enroll Student
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudentView;