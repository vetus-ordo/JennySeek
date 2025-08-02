export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
  teacherComment: string; // For the final report
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  tags: { text: string; color: string }[];
  status: 'In Progress' | 'Draft';
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
    questions: [
      {
        id: 'q1',
        text: 'What was the designated location for our first official date on August 7th, 2025?',
        options: ['A fancy restaurant', 'A quiet coffee shop', 'A movie theater', 'A walk in the park'],
        correctAnswerIndex: 1,
        teacherComment: 'Excellent memory! A perfect score on this critical historical event.'
      },
      {
        id: 'q2',
        text: 'Which topic of conversation definitively confirmed our shared weirdness?',
        options: ['The merits of pineapple on pizza', 'Aliens', 'Bad reality TV shows', 'The plot of a dream we had'],
        correctAnswerIndex: 3,
        teacherComment: 'Correct. The student shows a deep understanding of core subject matter.'
      },
    ],
  },
  {
    id: 'culinary-arts',
    title: 'Culinary Arts & Gastronomy',
    description: 'An analysis of flavor profiles and future culinary projects.',
    tags: [
        { text: 'Project', color: 'bg-green-200 text-green-800' },
        { text: 'Offline', color: 'bg-gray-200 text-gray-800' },
    ],
    status: 'Draft',
    questions: [
      {
        id: 'q1',
        text: 'What is the official stance on the most underrated snack?',
        options: ['Pickles', 'Seaweed snacks', 'Spicy chips', 'That one specific brand of cookies'],
        correctAnswerIndex: 0,
        teacherComment: '100%. The student has clearly been paying attention during lectures.'
      },
    ],
  },
];