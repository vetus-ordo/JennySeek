export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  teacherComment: string;
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  tags: { text: string; color: string }[];
  status: 'In Progress' | 'Draft';
  keywords: string[]; // <-- ADDED
  questions: Question[];
}

export const assignments: Assignment[] = [
  {
    id: 'history-101',
    title: 'History of Us: The First Chapter',
    description: 'A short quiz to assess foundational knowledge of key historical events.',
    tags: [
      { text: 'History', color: 'bg-purple-200 text-purple-800' },
      { text: 'Quiz', color: 'bg-blue-200 text-blue-800' },
    ],
    status: 'In Progress',
    keywords: ['history', 'us', 'our story', 'first', 'date', 'past', 'chapter'],
    questions: [
      {
        id: 'q1',
        text: 'What was the designated location for our first official date on August 7th, 2025?',
        options: ['A fancy restaurant', 'A quiet coffee shop', 'A movie theater', 'A walk in the park'],
        correctAnswerIndex: 1,
        teacherComment: 'Excellent memory! A perfect score on this critical historical event.',
      },
      {
        id: 'q2',
        text: 'Which topic of conversation definitively confirmed our shared weirdness?',
        options: ['The merits of pineapple on pizza', 'Aliens', 'Bad reality TV shows', 'The plot of a dream we had'],
        correctAnswerIndex: 3,
        teacherComment: 'Correct. You show a deep understanding of core subject matter.',
      },
    ],
  },
  {
    id: 'future-studies',
    title: 'Future Studies & Advanced Planning',
    description: 'A forward-looking analysis of upcoming projects and joint ventures.',
    tags: [
      { text: 'Project', color: 'bg-green-200 text-green-800' },
      { text: 'Collaboration', color: 'bg-yellow-200 text-yellow-800' },
    ],
    status: 'Draft',
    keywords: ['future', 'adventures', 'planning', 'travel', 'next', 'plans'],
    questions: [
      {
        id: 'q1',
        text: 'What is the ideal next joint-venture for the "Andrew & Jenny" team?',
        options: ['Building a pillow fort', 'Cooking a disastrously complex meal', 'Winning a pub quiz', 'A spontaneous weekend road trip'],
        correctAnswerIndex: 3,
        teacherComment: 'An ambitious and well-reasoned proposal. The Headmaster approves.',
      },
    ],
  },
];

// New fallback quiz for random topics
export const fallbackQuiz: Assignment = {
    id: 'fallback-999',
    title: 'Advanced Metaphysical Inquiry',
    description: 'An unexpected query requires an unexpected examination.',
    tags: [{ text: 'Abstract', color: 'bg-gray-200 text-gray-800' }],
    status: 'In Progress',
    keywords: [], // No keywords, so it's only chosen as a last resort
    questions: [
        {
            id: 'fbq1',
            text: 'While the AI is still processing your fascinating query on that topic, it can definitively state that the best part of ANY topic is...',
            options: ['Its historical context', 'Its philosophical implications', 'Discussing it with you', 'The memes'],
            correctAnswerIndex: 2,
            teacherComment: 'You have a remarkable ability to see right to the heart of the matter. 10/10.'
        }
    ]
}