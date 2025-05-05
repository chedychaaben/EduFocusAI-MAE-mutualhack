import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import { ArrowLeft, Book, Download, Headphones, Play, Pause, Bookmark, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";


const courses = [
  {
    id: "1",
    title: "Développement Web Avancé",
    pdfUrl: "/media/courses/1/course.pdf",
    instructor: "Prof. Jean Dupont",
    duration: "8 semaines",
    progress: 65,
    lessons: [
      {
        id: "1",
        title: "Introduction au HTML5",
        content: "Cette leçon couvre les bases du HTML5...",
        voiceUrl: "/media/courses/1/lessons/1/voice.mp3",
        duration: "12:45",
        completed: true,
        bookmarked: false
      },
      {
        id: "2",
        title: "CSS3 et Préprocesseurs",
        content: "Apprenez à styliser vos pages...",
        voiceUrl: "/media/courses/1/lessons/2/voice.mp3",
        duration: "18:30",
        completed: false,
        bookmarked: true
      },
      {
        id: "3",
        title: "JavaScript Moderne",
        content: "Découvrez les dernières fonctionnalités...",
        voiceUrl: "/media/courses/1/lessons/3/voice.mp3",
        duration: "25:15",
        completed: false,
        bookmarked: false
      }
    ],
  },
  {
    id: "2",
    title: "Programmation Python",
    pdfUrl: "/media/courses/2/course.pdf",
    instructor: "Dr. Alice Martin",
    duration: "6 semaines",
    progress: 40,
    lessons: [
      {
        id: "1",
        title: "Bases de Python",
        content: "Introduction au langage Python...",
        voiceUrl: "/media/courses/2/lessons/1/voice.mp3",
        duration: "10:00",
        completed: false,
        bookmarked: false
      },
      {
        id: "2",
        title: "Structures de Données",
        content: "Listes, dictionnaires, tuples et plus...",
        voiceUrl: "/media/courses/2/lessons/2/voice.mp3",
        duration: "15:20",
        completed: false,
        bookmarked: false
      }
    ],
  }
];

const LessonDetail = () => {
  const { courseId, lessonId } = useParams();
  const course = courses.find(c => c.id === courseId);
  const lesson = course?.lessons.find(l => l.id === lessonId);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [audioProgress, setAudioProgress] = React.useState(0);
  const [isBookmarked, setIsBookmarked] = React.useState(lesson?.bookmarked || false);
  const [isCompleted, setIsCompleted] = React.useState(lesson?.completed || false);

  const togglePlayback = () => setIsPlaying(!isPlaying);
  const toggleBookmark = () => setIsBookmarked(!isBookmarked);
  const toggleCompleted = () => setIsCompleted(!isCompleted);

  if (!course || !lesson) {
    return <div className="p-6 text-center text-red-600 font-semibold">Leçon ou cours introuvable.</div>;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header userName="Student" />

      <main className="flex-1 container mx-auto px-4 py-6 max-w-6xl">
        <div className="flex justify-between items-center mb-6">
          <Link to="/student" className="inline-flex items-center text-brand-600 hover:text-brand-700 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour au cours
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">Progression: {course.progress}%</span>
            <Progress value={course.progress} className="w-32 h-2" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader className="border-b">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-2xl flex items-center">
                    <Book className="h-5 w-5 mr-2 text-brand-500" />
                    {lesson.title}
                  </CardTitle>
                  <div className="flex space-x-2">
                    <Button variant={isBookmarked ? "default" : "outline"} size="sm" onClick={toggleBookmark}>
                      <Bookmark className="h-4 w-4 mr-1" />
                      {isBookmarked ? "Marqué" : "Marquer"}
                    </Button>
                    <Button variant={isCompleted ? "default" : "outline"} size="sm" onClick={toggleCompleted}>
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {isCompleted ? "Terminé" : "Terminer"}
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-6">
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">{lesson.content}</p>

                  <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="flex items-center font-medium text-gray-800">
                        <Headphones className="h-5 w-5 mr-2 text-brand-500" />
                        Audio de la leçon
                      </h3>
                      <span className="text-sm text-gray-500">{lesson.duration}</span>
                    </div>

                    <div className="flex items-center space-x-4">
                      <Button variant={isPlaying ? "default" : "outline"} size="lg" className="rounded-full w-12 h-12 p-0" onClick={togglePlayback}>
                        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                      </Button>

                      <div className="flex-1">
                        <Progress value={audioProgress} className="h-2" />
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>0:00</span>
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Ressources du cours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Book className="h-5 w-5 mr-3 text-gray-500" />
                      <span>Notes de cours complètes (PDF)</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <Headphones className="h-5 w-5 mr-3 text-gray-500" />
                      <span>Transcription audio (TXT)</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Télécharger
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">À propos du cours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Titre</h4>
                    <p className="text-gray-800">{course.title}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Instructeur</h4>
                    <p className="text-gray-800">{course.instructor}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Durée</h4>
                    <p className="text-gray-800">{course.duration}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Plan du cours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {course.lessons.map((l) => (
                    <Link
                      key={l.id}
                      to={`/course/${course.id}/lesson/${l.id}`}
                      className={`block p-3 rounded-lg transition-colors ${l.id === lessonId ? 'bg-brand-50 border border-brand-100' : 'hover:bg-gray-50'}`}
                    >
                      <div className="flex justify-between items-center">
                        <span className={`font-medium ${l.id === lessonId ? 'text-brand-600' : 'text-gray-700'}`}>
                          {l.title}
                        </span>
                        {l.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
                      </div>
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>{l.duration}</span>
                        {l.bookmarked && <Bookmark className="h-3 w-3 text-yellow-500" />}
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LessonDetail;