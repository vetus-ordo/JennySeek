import { create } from 'zustand';
import { Assignment, assignments, fallbackQuiz } from './assignments';

type View =
  | 'splash'
  | 'teacher-topic'
  | 'teacher-generating'
  | 'teacher-review'
  | 'quiz'
  | 'results'
  | 'final-payoff'; // <-- ADDED

export interface AppState {
  view: View;
  topic: string;
  activeAssignment: Assignment | null;
  studentAnswers: Record<string, number>;
  completedQuizIds: string[]; // <-- CHANGED from a number to an array of IDs
  
  // ... actions
  startApp: () => void;
  setTopic: (topic: string) => void;
  generateAssignment: () => void;
  completeGeneration: () => void;
  approveAssignment: () => void;
  submitAnswer: (questionId: string, answerIndex: number) => void;
  submitForGrading: () => void;
  restart: () => void;
}

const useAppStore = create<AppState>((set, get) => ({
  view: 'splash',
  topic: '',
  activeAssignment: null,
  studentAnswers: {},
  completedQuizIds: [],

  startApp: () => set({ view: 'teacher-topic' }),
  setTopic: (topic) => set({ topic }),
  generateAssignment: () => set({ view: 'teacher-generating' }),

  completeGeneration: () => {
    const { topic } = get();
    const topicWords = topic.toLowerCase().split(/\s+/);
    
    let bestMatch: Assignment | null = null;
    let maxMatchCount = 0;

    // Find the best match from the available quizzes
    const availableQuizzes = assignments.filter(a => !get().completedQuizIds.includes(a.id));

    if (availableQuizzes.length === 0) {
        // If all main quizzes are done, just use the fallback as a fun extra
        set({ activeAssignment: fallbackQuiz, view: 'teacher-review' });
        return;
    }

    for (const assignment of availableQuizzes) {
        const matchCount = assignment.keywords.filter(kw => topicWords.includes(kw)).length;
        if (matchCount > maxMatchCount) {
            maxMatchCount = matchCount;
            bestMatch = assignment;
        }
    }
    
    // If no keywords matched, pick a random available one. If a topic was "cheese", don't show the fallback yet.
    if (!bestMatch) {
        bestMatch = availableQuizzes[Math.floor(Math.random() * availableQuizzes.length)];
    }
    
    set({ activeAssignment: bestMatch, view: 'teacher-review' });
  },

  approveAssignment: () => set({ view: 'quiz' }),

  submitAnswer: (questionId, answerIndex) => {
    set((state) => ({
      studentAnswers: { ...state.studentAnswers, [questionId]: answerIndex },
    }));
  },

  submitForGrading: () => {
    const { activeAssignment } = get();
    if (activeAssignment && !get().completedQuizIds.includes(activeAssignment.id)) {
        set(state => ({
            completedQuizIds: [...state.completedQuizIds, activeAssignment.id]
        }));
    }
    set({ view: 'results' });
  },

  restart: () => {
    // Check if all main assignments have been completed
    if (get().completedQuizIds.length >= assignments.length) {
      set({ view: 'final-payoff' });
    } else {
      set({ view: 'teacher-topic', topic: '', activeAssignment: null });
    }
  },
}));

export default useAppStore;