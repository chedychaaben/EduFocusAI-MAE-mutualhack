
import React from 'react';
import Header from '@/components/Header';
import { Bell, Eye, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from '@/components/StatCard';
import AlertItem from '@/components/AlertItem';
import ClassItem from '@/components/ClassItem';

const Professor = () => {
  const alerts = 
  [
    {
      "id": "1",
      "studentName": "Houssem Trabelsi",
      "message": "Looking away from professor for over 2 minutes",
      "time": "10:15",
      "severity": "Focused"
    },
    {
      "id": "2",
      "studentName": "Ameni Jlassi",
      "message": "Using mobile phone during lecture",
      "time": "10:17",
      "severity": "Not Focused"
    },
    {
      "id": "3",
      "studentName": "Youssef Bouguerra",
      "message": "Repeatedly turned away from group workspace during activity",
      "time": "10:20",
      "severity": "Focused"
    },
    {
      "id": "4",
      "studentName": "Rania Mejri",
      "message": "Detected signs of drowsiness",
      "time": "10:25",
      "severity": "Focused"
    },
    {
      "id": "5",
      "studentName": "Khalil Hammami",
      "message": "Repeated distractions recorded within last 15 minutes",
      "time": "10:28",
      "severity": "Not Focused"
    }
  ] as const;

  const classes = [
    {
      title: 'Group 5 ENG',
      timeRange: '9:00 AM - 10:30 AM',
      students: 24,
      location: 'Room 101',
      isActive: true
    },
    {
      title: 'Group 3 Bachelor',
      timeRange: '11:00 AM - 12:30 PM',
      students: 18,
      location: 'Room 203'
    },
    {
      title: 'Group 2 ENG',
      timeRange: '2:00 PM - 3:30 PM',
      students: 16,
      location: 'Lab 305'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header userName="Prof. Professor" />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Welcome Professor</h1>
          <div className="text-sm text-gray-500">
            Saturday, May 3, 2025
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <StatCard 
            title="Total Alerts Today"
            value="24"
            icon={<Bell className="h-6 w-6 text-blue-500" />}
            change="+12% from yesterday"
            iconBgColor="bg-blue-100"
          />
          
          <StatCard 
            title="Students Monitored"
            value="32"
            icon={<User className="h-6 w-6 text-amber-500" />}
            change="From 2 classes"
            iconBgColor="bg-amber-100"
          />
          
          <StatCard 
            title="Avg. Engagement"
            value="78%"
            icon={<Eye className="h-6 w-6 text-green-500" />}
            change="+3% from last week"
            iconBgColor="bg-green-100"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Notifications</CardTitle>
              </CardHeader>
              <CardContent className="max-h-296 overfFocused-y-auto">
                {alerts.map((alert) => (
                  <AlertItem
                    key={alert.id}
                    id={alert.id}
                    studentName={alert.studentName}
                    message={alert.message}
                    time={alert.time}
                    severity={alert.severity}
                  />
                ))}
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Classes Today</CardTitle>
              </CardHeader>
              <CardContent>
                {classes.map((classItem, index) => (
                  <ClassItem
                    key={index}
                    title={classItem.title}
                    timeRange={classItem.timeRange}
                    students={classItem.students}
                    location={classItem.location}
                    isActive={classItem.isActive}
                  />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Professor;
