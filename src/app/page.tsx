'use client';
import React from 'react';
import useAppStore from '@/lib/store';
import SplashScreen from '@/components/SplashScreen';
import TeacherTopicView from '@/components/TeacherTopicView';
import TeacherGeneratingView from '@/components/TeacherGeneratingView';
import TeacherReviewView from '@/components/TeacherReviewView';
import StudentQuizView from '@/components/StudentQuizView';
import ResultsDashboard from '@/components/ResultsDashboard';
import FinalPayoffView from '@/components/FinalPayoffView'; // <-- IMPORT

export default function Home() {
  const { view } = useAppStore();

  const renderView = () => {
    switch (view) {
      case 'splash':
        return <SplashScreen />;
      case 'teacher-topic':
        return <TeacherTopicView />;
      case 'teacher-generating':
        return <TeacherGeneratingView />;
      case 'teacher-review':
        return <TeacherReviewView />;
      case 'quiz':
        return <StudentQuizView />;
      case 'results':
        return <ResultsDashboard />;
      case 'final-payoff': // <-- ADDED
        return <FinalPayoffView />;
      default:
        return <SplashScreen />;
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 bg-bg-light">
      <div className="relative flex place-items-center w-full">
        {renderView()}
      </div>
    </main>
  );
}