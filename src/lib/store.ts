import { create } from 'zustand';
import { Assignment, assignments } from './assignments';
import { saveReportCard } from './firebase';

type View = 'splash' | 'generate-questions' | 'quiz' | 'awaiting-grade';

export interface AppState {
  view: View;
  topic: string;
  isGenerating: boolean;
  activeAssignment: Assignment | null;
  studentAnswers: Record<string, number>;
  
  setTopic: (topic: string) => void;
  generateAssignment: () => void;
  startApp: () => void;
  startQuiz: () => void;
  submitAnswer: (questionId: string, answerIndex: number) => void;
  submitForGrading: () => void;
}

// This function defines the initial state of the application.
const getInitialState = () => ({
  view: 'splash' as View,
  topic: '',
  isGenerating: false,
  activeAssignment: null,
  studentAnswers: {},
});

const useAppStore = create<AppState>((set, get) => ({
  ...getInitialState(), // Set the initial state correctly
  
  setTopic: (topic) => set({ topic }),
  
  generateAssignment: () => {
    const topic = get().topic.toLowerCase();
    const foundAssignment = assignments.find(a => a.title.toLowerCase().includes(topic));
    
    if (foundAssignment) {
      set({ isGenerating: true });
      setTimeout(() => {
        set({ activeAssignment: foundAssignment, isGenerating: false });
      }, 1500);
    } else {
      alert("No assignment found for that topic. Try 'History' or 'Future'!");
    }
  },

  // When starting the app, reset everything to the initial state except for the view
  startApp: () => set({ ...getInitialState(), view: 'generate-questions' }),
  
  startQuiz: () => set({ view: 'quiz' }),
  
  submitAnswer: (questionId, answerIndex) => {
    set(state => ({ studentAnswers: { ...state.studentAnswers, [questionId]: answerIndex } }));
  },
  
  submitForGrading: () => {
    const { activeAssignment, studentAnswers } = get();
    if (activeAssignment) {
      saveReportCard('Jenny', activeAssignment.title, studentAnswers);
    }
    set({ view: 'awaiting-grade' });
  },
}));

export default useAppStore;
