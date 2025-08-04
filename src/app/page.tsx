'use client';
import React from 'react';
import useAppStore from '@/lib/store';
import SplashScreen from '@/components/SplashScreen';
import TeacherDashboard from '@/components/TeacherDashboard';
import StudentQuizView from '@/components/StudentQuizView';
import ResultsDashboard from '@/components/ResultsDashboard';
import FinalPayoffView from '@/components/FinalPayoffView';

export default function Home() {
  const { view } = useAppStore();

  const renderView = () => {
    switch (view) {
      case 'splash':
        return <SplashScreen />;
      case 'teacher-dashboard':
        return <TeacherDashboard />;
      case 'quiz':
        return <StudentQuizView />;
      case 'results':
        return <ResultsDashboard />;
      case 'final-payoff':
        return <FinalPayoffView />;
      default:
        return <SplashScreen />; // Fallback to splash
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
        {renderView()}
    </div>
  );
}