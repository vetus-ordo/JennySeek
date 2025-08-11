import { create } from 'zustand';
import { Assignment, assignments } from './assignments';

type View = 'splash' | 'teacher-dashboard' | 'quiz' | 'results' | 'final-payoff' | 'ai-chat';

export interface AppState {
  view: View;
  activeAssignment: Assignment | null;
  studentAnswers: Record<string, number>;
  completedQuizIds: string[];
  startApp: () => void;
  selectAssignment: (assignment: Assignment) => void;
  submitAnswer: (questionId: string, answerIndex: number) => void;
  submitForGrading: () => void;
  restart: () => void;
  goToChat: () => void;
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
      studentAnswers: {},
    });
  },
  submitAnswer: (questionId, answerIndex) => {
    set((state) => ({
      studentAnswers: { ...state.studentAnswers, [questionId]: answerIndex },
    }));
  },
  submitForGrading: () => {
    const { activeAssignment } = get();
    if (activeAssignment && !get().completedQuizIds.includes(activeAssignment.id)) {
      set((state) => ({
        completedQuizIds: [...state.completedQuizIds, activeAssignment.id],
      }));
    }
    set({ view: 'results' });
  },
  restart: () => {
    if (get().completedQuizIds.length >= assignments.length) {
      set({ view: 'final-payoff' });
    } else {
      set({ view: 'teacher-dashboard' });
    }
  },
  goToChat: () => set({ view: 'ai-chat' }),
}));

export default useAppStore;