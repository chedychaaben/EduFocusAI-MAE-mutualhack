
import React from 'react';
import Header from '@/components/Header';
import { Bell, Eye, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from '@/components/StatCard';
import AlertItem from '@/components/AlertItem';
import ClassItem from '@/components/ClassItem';
import TeacherTable from '@/components/TeacherTable';
import StudentEngagement from '@/components/StudentEngagement';
import CourseAttendance from '@/components/CourseAttendance';
import CourseContent from '@/components/CourseContent';
import { teachers, students, courses, facultyStats, contentAccessData } from '@/utils/mockData';

const Admin = () => {
  const alerts = [
    {
      id: '1',
      studentName: 'Olivia Chen',
      message: 'Low participation in group activity',
      time: '23:57',
      severity: 'medium'
    },
    {
      id: '2',
      studentName: 'Olivia Chen',
      message: 'Low participation in group activity',
      time: '23:56',
      severity: 'medium'
    },
    {
      id: '3',
      studentName: 'Alex Johnson',
      message: 'Detected looking away from screen for more than 2 minutes',
      time: '23:33',
      severity: 'medium'
    },
    {
      id: '4',
      studentName: 'Emily White',
      message: 'Detected using mobile phone',
      time: '23:41',
      severity: 'high'
    }
  ] as const;

  const classes = [
    {
      title: 'Introduction to Computer Science',
      timeRange: '9:00 AM - 10:30 AM',
      students: 24,
      location: 'Room 101',
      isActive: true
    },
    {
      title: 'Advanced Algorithms',
      timeRange: '11:00 AM - 12:30 PM',
      students: 18,
      location: 'Room 203'
    },
    {
      title: 'Machine Learning Fundamentals',
      timeRange: '2:00 PM - 3:30 PM',
      students: 16,
      location: 'Lab 305'
    }
  ];

  return (
    <>
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header userName="Administration" />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="text-sm text-gray-500">
            Saturday, May 3, 2025
          </div>
        </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            <div className="lg:col-span-2">
              <CourseAttendance courses={courses} />
            </div>
            <div>
              <StudentEngagement students={students} />
            </div>
          </div>
          
                    
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-4">Activité récente des enseignants</h3>
            <TeacherTable teachers={teachers} />
          </div>
        </main>
      </div>
    </>
  );
};

export default Admin;
