// /lib/assignments.ts
export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number; // Still here, but not used for grading
  teacherComment: string; 
}

export interface Assignment {
  id: string;
  title: string;
  description: string;
  questions: Question[];
}

export const assignments: Assignment[] = [
  {
    id: 'history-101',
    title: 'History of Us: An Introduction',
    description: 'A brief quiz on the foundational knowledge of key historical events.',
    questions: [
      {
        id: 'q1',
        text: 'What was the designated location for our first official date on August 7th, 2025?',
        options: ['A fancy restaurant', 'A quiet coffee shop', 'A movie theater', 'A walk in the park'],
        correctAnswerIndex: 1,
        teacherComment: 'An excellent memory! This is a critical event in the timeline.'
      },
      {
        id: 'q2',
        text: 'Which topic of conversation definitively confirmed our shared weirdness?',
        options: ['The merits of pineapple on pizza', 'Aliens and conspiracies', 'Bad reality TV shows', 'A detailed analysis of a dream one of us had'],
        correctAnswerIndex: 3,
        teacherComment: 'Correct. The student shows a deep understanding of core subject matter.'
      },
       {
        id: 'q3',
        text: 'What is Andrew\'s most endearing, yet ridiculous, quirk?',
        options: ['His encyclopedic knowledge of "The Office"', 'His inability to whisper quietly', 'The way he talks to dogs in a silly voice', 'All of the above'],
        correctAnswerIndex: 3,
        teacherComment: 'Indeed, all are true. The student is highly observant.'
      },
    ],
  },
  {
    id: 'future-studies',
    title: 'Future Studies & Advanced Planning',
    description: 'A forward-looking analysis of upcoming projects and joint ventures.',
    questions: [
      {
        id: 'q1',
        text: 'What is the ideal next joint-venture for the "Andrew & Jenny" team?',
        options: ['Building a pillow fort', 'Cooking a disastrously complex meal', 'Winning a pub quiz', 'A spontaneous weekend road trip'],
        correctAnswerIndex: 3,
        teacherComment: 'An ambitious and well-reasoned proposal. The Headmaster approves.'
      },
    ],
  },
];