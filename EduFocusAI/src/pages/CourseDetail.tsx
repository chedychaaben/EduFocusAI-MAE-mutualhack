import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import LectureCard from '@/components/LectureCard';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();

  // Placeholder course data with additional details like prerequisites, syllabus, etc.
  const courses = [
    {
      id: '1',
      title: 'Introduction to Computer Science',
      courseCode: 'CS101',
      instructor: 'Dr. Olfa Nasraoui',
      description: 'Foundational concepts in computer science, including programming basics, algorithms, and data structures.',
      prerequisites: 'Aucun',
      syllabus: 'Introduction to programming, algorithms, data structures, and basic problem-solving techniques.',
      image: '/uploads/computer.webp'
    },
    {
      id: '2',
      title: 'Calculus I',
      courseCode: 'MATH201',
      instructor: 'Dr. Ahmed Tlili',
      description: 'Introduction to differential and integral calculus with applications.',
      prerequisites: 'Basic knowledge of algebra and trigonometry.',
      syllabus: 'Limits, derivatives, integrals, and applications in real-world problems.',
      image: '/uploads/calculus.jpg'
    },
    {
      id: '3',
      title: 'Introduction to Psychology',
      courseCode: 'PSY101',
      instructor: 'Dr. Raja Ben Slama',
      description: 'Survey of major topics in psychology including perception, learning, memory, motivation, and psychological disorders.',
      prerequisites: 'Aucun',
      syllabus: 'Basic concepts of psychology, human behavior, mental processes, and psychological theories.',
      image: '/uploads/psy.jpg'
    },
    {
      id: '4',
      title: 'World History',
      courseCode: 'HIST102',
      instructor: 'Dr. Abdeljelil Temimi',
      description: 'Overview of major historical events and periods from ancient civilizations to modern times.',
      prerequisites: 'Aucun',
      syllabus: 'Study of history from ancient civilizations through the Middle Ages to modern history.',
      image: '/uploads/hist.jpg'
    }
  ];

  // Fetch course based on courseId
  const course = courses.find(c => c.id === courseId) || courses[0]; // Default to the first course if not found
  
  // Expanded placeholder lecture data with additional notes and resources
  const lectures = [
    {
      id: '1',
      title: 'Lecture 1: Introduction to Algorithms',
      date: '05/09/2025',
      description: 'Overview of basic algorithmic concepts and time complexity analysis.',
      courseId: '1'
    },
    {
      id: '2',
      title: 'Lecture 2: Data Structures',
      date: '07/09/2025',
      description: 'Introduction to arrays, linked lists, stacks, and queues.',
      courseId: '1'
    },
    {
      id: '3',
      title: 'Lecture 3: Sorting Algorithms',
      date: '09/09/2025',
      description: 'Explore bubble sort, selection sort, and merge sort algorithms.',
      courseId: '1'
    },
    {
      id: '4',
      title: 'Lecture 4: Recursion',
      date: '12/09/2025',
      description: 'Understand recursion and solve problems like factorial and Fibonacci.',
      courseId: '1'
    },
    {
      id: '5',
      title: 'Lecture 5: Trees and Graphs',
      date: '14/09/2025',
      description: 'Basic tree structures, traversal methods, and graph representations.',
      courseId: '1'
    },
    {
      id: '6',
      title: 'Lecture 6: Advanced Algorithms',
      date: '18/09/2025',
      description: 'Dive into more complex algorithms including Dijkstra’s algorithm, and dynamic programming.',
      courseId: '1'
    },
    // Additional Lectures
    {
      id: '7',
      title: 'Lecture 7: Complexity Analysis',
      date: '20/09/2025',
      description: 'Deep dive into analyzing time and space complexities of algorithms.',
      courseId: '1'
    },
    {
      id: '8',
      title: 'Lecture 8: Dynamic Programming',
      date: '22/09/2025',
      description: 'Introduction to dynamic programming and its use in solving optimization problems.',
      courseId: '1'
    },
    {
      id: '9',
      title: 'Lecture 9: Graph Algorithms and Applications',
      date: '25/09/2025',
      description: 'Learn about graph algorithms such as Dijkstra’s, Bellman-Ford, and Floyd-Warshall.',
      courseId: '1'
    },
    {
      id: '10',
      title: 'Lecture 10: Machine Learning Basics',
      date: '30/09/2025',
      description: 'Introduction to machine learning, its types, and applications.',
      courseId: '1'
    },
    {
      id: '11',
      title: 'Lecture 11: Artificial Intelligence Fundamentals',
      date: '05/10/2025',
      description: 'Study the basics of AI, its history, and real-world applications.',
      courseId: '1'
    },
    
    // For Calculus I
    {
      id: '12',
      title: 'Lecture 1: Limits and Continuity',
      date: '01/09/2025',
      description: 'Introduction to limits and the concept of continuity in calculus.',
      courseId: '2'
    },
    {
      id: '13',
      title: 'Lecture 2: Derivatives',
      date: '03/09/2025',
      description: 'Learn about the derivative and its applications in real-world problems.',
      courseId: '2'
    },
    {
      id: '14',
      title: 'Lecture 3: Applications of Derivatives',
      date: '07/09/2025',
      description: 'Explore applications of derivatives including optimization problems and motion.',
      courseId: '2'
    },
    {
      id: '15',
      title: 'Lecture 4: Integrals and Antiderivatives',
      date: '10/09/2025',
      description: 'Introduction to integration and solving for antiderivatives.',
      courseId: '2'
    },
    {
      id: '16',
      title: 'Lecture 5: The Fundamental Theorem of Calculus',
      date: '14/09/2025',
      description: 'Deep dive into the fundamental theorem of calculus and its implications.',
      courseId: '2'
    },
    {
      id: '17',
      title: 'Lecture 6: Techniques of Integration',
      date: '18/09/2025',
      description: 'Learn techniques such as substitution, integration by parts, and partial fractions.',
      courseId: '2'
    },
    // More lectures for Psychology
    {
      id: '18',
      title: 'Lecture 1: Introduction to Psychology',
      date: '01/09/2025',
      description: 'An overview of psychology as a science, covering key areas such as behavior and mental processes.',
      courseId: '3'
    },
    {
      id: '19',
      title: 'Lecture 2: Neuroscience and Behavior',
      date: '03/09/2025',
      description: 'Explore how the brain and nervous system influence human behavior.',
      courseId: '3'
    },
    {
      id: '20',
      title: 'Lecture 3: Sensation and Perception',
      date: '07/09/2025',
      description: 'Understand the processes of sensation and how we perceive the world around us.',
      courseId: '3'
    },
    {
      id: '21',
      title: 'Lecture 4: Learning Theories',
      date: '10/09/2025',
      description: 'Study classical and operant conditioning, and the theories behind learning.',
      courseId: '3'
    },
    {
      id: '22',
      title: 'Lecture 5: Memory and Cognition',
      date: '12/09/2025',
      description: 'Understand memory processes and cognitive functions like attention and reasoning.',
      courseId: '3'
    },
    {
      id: '23',
      title: 'Lecture 6: Psychological Disorders',
      date: '15/09/2025',
      description: 'Study different psychological disorders such as depression, anxiety, and schizophrenia.',
      courseId: '3'
    },
    // More lectures for World History
    {
      id: '24',
      title: 'Lecture 1: Introduction to World History',
      date: '01/09/2025',
      description: 'Introduction to the scope of world history, focusing on major civilizations.',
      courseId: '4'
    },
    {
      id: '25',
      title: 'Lecture 2: Ancient Civilizations',
      date: '03/09/2025',
      description: 'Explore the rise and fall of ancient civilizations such as Egypt, Mesopotamia, and China.',
      courseId: '4'
    },
    {
      id: '26',
      title: 'Lecture 3: The Middle Ages',
      date: '07/09/2025',
      description: 'Study the key events of the Middle Ages, including the fall of Rome and the rise of feudalism.',
      courseId: '4'
    },
    {
      id: '27',
      title: 'Lecture 4: The Renaissance',
      date: '10/09/2025',
      description: 'Understand the cultural revolution of the Renaissance and its impact on European societies.',
      courseId: '4'
    },
    {
      id: '28',
      title: 'Lecture 5: The Enlightenment and Revolution',
      date: '12/09/2025',
      description: 'Study the ideas of the Enlightenment and the social, political, and economic revolutions.',
      courseId: '4'
    },
    {
      id: '29',
      title: 'Lecture 6: Modern History',
      date: '15/09/2025',
      description: 'Learn about the major events that shaped the modern world, including the World Wars and Cold War.',
      courseId: '4'
    }
  ];

  // Filter lectures based on the current courseId
  const filteredLectures = lectures.filter(l => l.courseId === courseId);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header userName="Student" />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <Link to="/student" className="inline-flex items-center text-brand-600 hover:text-brand-700 mb-4">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Student Dashboard
        </Link>
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-gray-500">{course.courseCode} - {course.instructor}</p>
          <p className="mt-2">{course.description}</p>
          <p className="mt-2 font-semibold">Prerequisites: {course.prerequisites}</p>
          <p className="mt-2 font-semibold">Syllabus: {course.syllabus}</p>
        </div>
        
        <Card className="mb-8">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <Book className="h-5 w-5 mr-2" />
              Lecture Notes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredLectures.map((lecture) => (
                <LectureCard
                  key={lecture.id}
                  id={lecture.id}
                  title={lecture.title}
                  date={lecture.date}
                  description={lecture.description}
                  courseId={lecture.courseId}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CourseDetail;
