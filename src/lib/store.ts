// /lib/store.ts
import { create } from 'zustand';
import { assignments, Assignment } from './assignments';

export interface AppState {
  view: 'splash' | 'add-student' | 'dashboard' | 'quiz' | 'report';
  studentName: string | null;
  assignments: Assignment[];
  activeAssignment: Assignment | null;
  studentAnswers: Record<string, number>; // questionId: answerIndex
  isGraded: boolean;
  score: number;
  startApp: () => void;
  addStudent: (name: string) => void;
  assignQuiz: (assignmentId: string) => void;
  submitAnswer: (questionId: string, answerIndex: number) => void;
  gradeQuiz: () => void;
  returnToDashboard: () => void;
}

const useAppStore = create<AppState>((set, get) => ({
  view: 'splash',
  studentName: null,
  assignments,
  activeAssignment: null,
  studentAnswers: {},
  isGraded: false,
  score: 0,
  
  startApp: () => set({ view: 'add-student' }),
  
  addStudent: (name) => set({ view: 'dashboard', studentName: name }),
  
  assignQuiz: (assignmentId) => {
    const assignment = get().assignments.find(a => a.id === assignmentId);
    if (assignment) {
      set({ view: 'quiz', activeAssignment: assignment });
    }
  },
  
  submitAnswer: (questionId, answerIndex) => {
    set(state => ({
      studentAnswers: {
        ...state.studentAnswers,
        [questionId]: answerIndex,
      },
    }));
  },
  
  gradeQuiz: () => {
    set({
      view: 'report',
      isGraded: true,
      score: 100, // Always a perfect score!
    });
  },

  returnToDashboard: () => {
    set({
      view: 'dashboard',
      activeAssignment: null,
      studentAnswers: {},
      isGraded: false,
      score: 0,
    });
  },
}));

export default useAppStore;