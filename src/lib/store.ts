import { create } from 'zustand';
import { Assignment, assignments } from './assignments';

type View = 'splash' | 'add-student' | 'dashboard' | 'quiz' | 'report';

export interface AppState {
  view: View;
  studentName: string | null;
  assignments: Assignment[];
  activeAssignment: Assignment | null;
  studentAnswers: Record<string, number>;
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
  view: 'splash', // The app will now start on the splash screen
  studentName: null,
  assignments,
  activeAssignment: null,
  studentAnswers: {},
  isGraded: false,
  score: 0,

  startApp: () => set({ view: 'add-student' }), // New action to move from splash to the app
  
  addStudent: (name) => set({ studentName: name, view: 'dashboard' }),
  
  assignQuiz: (assignmentId) => {
    const assignment = get().assignments.find(a => a.id === assignmentId);
    if (assignment) {
      set({
        activeAssignment: assignment,
        view: 'quiz',
        studentAnswers: {},
        isGraded: false,
        score: 0,
      });
    }
  },

  submitAnswer: (questionId, answerIndex) => {
    set(state => ({
      studentAnswers: { ...state.studentAnswers, [questionId]: answerIndex },
    }));
  },

  gradeQuiz: () => {
    const { activeAssignment, studentAnswers } = get();
    if (!activeAssignment) return;

    let correctAnswers = 0;
    activeAssignment.questions.forEach(q => {
      if (studentAnswers[q.id] === q.correctAnswerIndex) {
        correctAnswers++;
      }
    });
    const finalScore = Math.round((correctAnswers / activeAssignment.questions.length) * 100);
    set({ isGraded: true, view: 'report', score: finalScore });
  },

  returnToDashboard: () => {
    set({ view: 'dashboard', activeAssignment: null, isGraded: false });
  },
}));

export default useAppStore;