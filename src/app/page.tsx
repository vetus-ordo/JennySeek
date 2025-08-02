'use client';

import useAppStore, { AppState } from '@/lib/store';
import SplashScreen from '@/components/SplashScreen'; // Import the new component
import AddStudentView from '@/components/AddStudentView';
import TeacherDashboard from '@/components/TeacherDashboard';
import StudentQuizView from '@/components/StudentQuizView';
import GradedReportView from '@/components/GradedReportView';

export default function Home() {
  const view = useAppStore((state: AppState) => state.view);

  const renderView = () => {
    switch (view) {
      case 'splash':
        return <SplashScreen />; // Add the splash screen case
      case 'add-student':
        return <AddStudentView />;
      case 'dashboard':
        return <TeacherDashboard />;
      case 'quiz':
        return <StudentQuizView />;
      case 'report':
        return <GradedReportView />;
      default:
        return <SplashScreen />;
    }
  }

  return (
    <main>
      {renderView()}
    </main>
  );
}