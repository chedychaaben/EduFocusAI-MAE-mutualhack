
import React from 'react';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import StatCard from '@/components/StatCard';
import TeacherTable from '@/components/TeacherTable';
import StudentEngagement from '@/components/StudentEngagement';
import CourseAttendance from '@/components/CourseAttendance';
import CourseContent from '@/components/CourseContent';
import { 
  Users, 
  UserCircle, 
  FileText, 
  Clock, 
  BarChart, 
  AlertCircle 
} from 'lucide-react';
import { teachers, students, courses, facultyStats, contentAccessData } from '@/utils/mockData';

const Index = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Tableau de bord administratif</h2>
            <p className="text-gray-600">Surveillez l'activité des enseignants et des étudiants en temps réel</p>
          </div>
          
          <div className="stats-grid mb-6">
            <StatCard
              title="Total Enseignants"
              value={facultyStats.totalTeachers}
              icon={<UserCircle className="text-faculty-primary" />}
            />
            <StatCard
              title="Total Étudiants"
              value={facultyStats.totalStudents}
              icon={<Users className="text-faculty-secondary" />}
            />
            <StatCard
              title="Total Cours"
              value={facultyStats.totalCourses}
              icon={<FileText className="text-faculty-primary" />}
            />
            <StatCard
              title="Présence Moyenne"
              value={`${facultyStats.averageAttendance}%`}
              icon={<Clock className="text-faculty-secondary" />}
              trend={{ value: 3, positive: true }}
            />
            <StatCard
              title="Engagement Moyen"
              value={`${facultyStats.averageEngagement}%`}
              icon={<BarChart className="text-faculty-primary" />}
              trend={{ value: 2, positive: true }}
            />
            <StatCard
              title="Cours Peu Engageants"
              value={facultyStats.lowEngagementCourses}
              icon={<AlertCircle className="text-faculty-highlight" />}
              description="Cours nécessitant une attention particulière"
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <CourseAttendance courses={courses} />
            </div>
            <div>
              <StudentEngagement students={students} />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <CourseContent data={contentAccessData} />
            </div>
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg border border-gray-200 h-full">
                <h3 className="font-medium text-lg mb-4">Actions rapides</h3>
                <div className="space-y-4">
                  <button className="w-full py-2 px-4 bg-faculty-primary text-white rounded-md hover:bg-opacity-90 transition-colors">
                    Générer un rapport
                  </button>
                  <button className="w-full py-2 px-4 bg-white text-faculty-primary border border-faculty-primary rounded-md hover:bg-gray-50 transition-colors">
                    Alerter les enseignants concernés
                  </button>
                  <button className="w-full py-2 px-4 bg-white text-faculty-secondary border border-faculty-secondary rounded-md hover:bg-gray-50 transition-colors">
                    Planifier une réunion
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Activité récente des enseignants</h3>
            <TeacherTable teachers={teachers} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
