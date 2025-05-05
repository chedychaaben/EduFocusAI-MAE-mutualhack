
import React from 'react';
import Header from '@/components/Header';
import CourseCard from '@/components/CourseCard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Courses = () => {
  // Mock data that would be fetched from API in a real application
  const courses = [
    {
      id: '1',
      title: 'Introduction to Computer Science',
      courseCode: 'CS101',
      instructor: 'Dr. Olfa Nasraoui',
      description: 'Foundational concepts in computer science, including programming basics, algorithms, and data structures.',
      image: '/uploads/computer.webp'
    },
    {
      id: '2',
      title: 'Calculus I',
      courseCode: 'MATH201',
      instructor: 'Dr. Ahmed Tlili',
      description: 'Introduction to differential and integral calculus with applications.',
      image: '/uploads/calculus.jpg'
    },
    {
      id: '3',
      title: 'Introduction to Psychology',
      courseCode: 'PSY101',
      instructor: 'Dr. Raja Ben Slama',
      description: 'Survey of major topics in psychology including perception, learning, memory, motivation, and psychological disorders.',
      image: '/uploads/psy.jpg'
    },
    {
      id: '4',
      title: 'World History',
      courseCode: 'HIST102',
      instructor: 'Dr. Abdeljelil Temimi',
      description: 'Overview of major historical events and periods from ancient civilizations to modern times.',
      image: '/uploads/hist.jpg'
    }
  ];
  

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header userName="Student" />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Welcome Student</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {courses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  courseCode={course.courseCode}
                  instructor={course.instructor}
                  description={course.description}
                  image={course.image}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Courses;
