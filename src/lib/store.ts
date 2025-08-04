import { create } from 'zustand';
import { Assignment, assignments } from './assignments';

// The final, simplified set of views for the application
type View = 'splash' | 'teacher-dashboard' | 'quiz' | 'results' | 'final-payoff';

export interface AppState {
  view: View;
  activeAssignment: Assignment | null;
  studentAnswers: Record<string, number>;
  completedQuizIds: string[];

  // Actions
  startApp: () => void;
  selectAssignment: (assignment: Assignment) => void; // Correctly accepts the full object
  submitAnswer: (questionId: string, answerIndex: number) => void;
  submitForGrading: () => void;
  restart: () => void;
}

const useAppStore = create<AppState>((set, get) => ({
  view: 'splash',
  activeAssignment: null,
  studentAnswers: {},
  completedQuizIds: [],

  startApp: () => set({ view: 'teacher-dashboard' }),

  selectAssignment: (assignment) => {
    set({
      activeAssignment: assignment,
      view: 'quiz',
      studentAnswers: {}, // Reset answers for the new quiz
    });
  },

  submitAnswer: (questionId, answerIndex) => {
    set((state) => ({
      studentAnswers: { ...state.studentAnswers, [questionId]: answerIndex },
    }));
  },

  submitForGrading: () => {
    const { activeAssignment } = get();
    // Add the completed quiz ID to the list if it's not already there
    if (activeAssignment && !get().completedQuizIds.includes(activeAssignment.id)) {
      set((state) => ({
        completedQuizIds: [...state.completedQuizIds, activeAssignment.id],
      }));
    }
    set({ view: 'results' });
  },

  restart: () => {
    // Check if all main assignments are done to show the payoff
    if (get().completedQuizIds.length >= assignments.length) {
      set({ view: 'final-payoff' });
    } else {
      set({ view: 'teacher-dashboard' }); // Go back to the dashboard
    }
  },
}));

export default useAppStore;