'use client';
import React, { useState } from 'react';
import useAppStore from '@/lib/store';
import Button from './ui/Button';

const AddStudentView = () => {
  const addStudent = useAppStore((state) => state.addStudent);
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().toLowerCase() === 'jenny') {
      addStudent('Jenny');
    }
  };

  return (
    <div className="w-full max-w-md bg-neutral-10 p-8 rounded-xl shadow-2xl border border-neutral-30">
      <h2 className="text-h2 text-center">Confirm Your Enrollment</h2>
      <p className="text-center text-neutral-70 mt-2 mb-6">Please enter your name to access the student portal.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="w-full p-3 border border-neutral-40 rounded-lg text-body"
          placeholder="Enter your first name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="mt-4">
          <Button
            variant="primary"
            type="submit"
            className="w-full"
            disabled={name.trim().toLowerCase() !== 'jenny'}
          >
            Access Portal
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddStudentView;