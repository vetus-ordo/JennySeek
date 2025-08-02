'use client';

import useAppStore, { AppState } from '@/lib/store';
import SplashScreen from '@/components/SplashScreen';
import AddStudentView from '@/components/AddStudentView';
import TeacherDashboard from '@/components/TeacherDashboard';
import StudentQuizView from '@/components/StudentQuizView';
import GradedReportView from '@/components/GradedReportView';

export default function Home() {
  const view = useAppStore((state: AppState) => state.view);

  const renderView = () => {
    switch (view) {
      case 'splash':
        return <SplashScreen />;
      case 'add-student':
        return <AddStudentView />;
      case 'dashboard':
        return <TeacherDashboard />;
      case 'quiz':
        return <StudentQuizView />;
      case 'report':
        return <GradedReportView />;
      default:
        // Default to the splash screen for a clean start
        return <SplashScreen />;
    }
  }

  return (
    // This main container ensures our content is centered and takes up the full screen
    <main className="flex flex-col items-center justify-center min-h-screen">
      {renderView()}
    </main>
  );
}