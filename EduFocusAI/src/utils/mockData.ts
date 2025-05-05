
export type Teacher = {
    id: number;
    name: string;
    department: string;
    coursesCount: number;
    attendanceRate: number;
    studentEngagement: number;
    lastActive: string;
  };
  
  export type Student = {
    id: number;
    name: string;
    year: number;
    attendanceRate: number;
    coursesAccessed: number;
    contentViewed: number;
    engagement: number;
  };
  
  export type Course = {
    id: number;
    name: string;
    teacherId: number;
    studentsCount: number;
    attendanceRate: number;
    engagementRate: number;
    contentAccessCount: number;
  };
  
  export const teachers: Teacher[] = [
    {
      id: 1,
      name: "Dr. Martin Dubois",
      department: "Computer Science",
      coursesCount: 3,
      attendanceRate: 98,
      studentEngagement: 87,
      lastActive: "2025-05-01T09:45:23"
    },
    {
      id: 2,
      name: "Prof. Sophie Laurent",
      department: "Mathematics",
      coursesCount: 2,
      attendanceRate: 95,
      studentEngagement: 72,
      lastActive: "2025-05-01T14:20:11"
    },
    {
      id: 3,
      name: "Dr. Ahmed Benali",
      department: "Physics",
      coursesCount: 2,
      attendanceRate: 91,
      studentEngagement: 64,
      lastActive: "2025-04-30T16:15:43"
    },
    {
      id: 4,
      name: "Prof. Marie Lefevre",
      department: "Biology",
      coursesCount: 3,
      attendanceRate: 99,
      studentEngagement: 92,
      lastActive: "2025-05-01T11:30:15"
    },
    {
      id: 5,
      name: "Dr. Thomas Moreau",
      department: "Chemistry",
      coursesCount: 2,
      attendanceRate: 88,
      studentEngagement: 59,
      lastActive: "2025-04-29T10:05:37"
    }
  ];
  
  export const students: Student[] = [
    {
      id: 1,
      name: "Emma Dupont",
      year: 2,
      attendanceRate: 95,
      coursesAccessed: 4,
      contentViewed: 85,
      engagement: 88
    },
    {
      id: 2,
      name: "Lucas Girard",
      year: 3,
      attendanceRate: 87,
      coursesAccessed: 5,
      contentViewed: 76,
      engagement: 72
    },
    {
      id: 3,
      name: "Chloé Petit",
      year: 1,
      attendanceRate: 98,
      coursesAccessed: 3,
      contentViewed: 92,
      engagement: 95
    },
    {
      id: 4,
      name: "Maxime Leroy",
      year: 4,
      attendanceRate: 78,
      coursesAccessed: 6,
      contentViewed: 65,
      engagement: 61
    },
    {
      id: 5,
      name: "Inès Bernard",
      year: 2,
      attendanceRate: 92,
      coursesAccessed: 4,
      contentViewed: 88,
      engagement: 85
    }
  ];
  
  export const courses: Course[] = [
    {
      id: 1,
      name: "Introduction to Programming",
      teacherId: 1,
      studentsCount: 45,
      attendanceRate: 87,
      engagementRate: 82,
      contentAccessCount: 1245
    },
    {
      id: 2,
      name: "Advanced Calculus",
      teacherId: 2,
      studentsCount: 32,
      attendanceRate: 78,
      engagementRate: 65,
      contentAccessCount: 856
    },
    {
      id: 3,
      name: "Quantum Physics",
      teacherId: 3,
      studentsCount: 28,
      attendanceRate: 91,
      engagementRate: 74,
      contentAccessCount: 943
    },
    {
      id: 4,
      name: "Molecular Biology",
      teacherId: 4,
      studentsCount: 38,
      attendanceRate: 94,
      engagementRate: 89,
      contentAccessCount: 1534
    },
    {
      id: 5,
      name: "Organic Chemistry",
      teacherId: 5,
      studentsCount: 35,
      attendanceRate: 82,
      engagementRate: 68,
      contentAccessCount: 967
    }
  ];
  
  export const facultyStats = {
    totalTeachers: 42,
    totalStudents: 1245,
    totalCourses: 68,
    averageAttendance: 88,
    averageEngagement: 76,
    contentAccessTotal: 28760,
    lowEngagementCourses: 12,
    highEngagementCourses: 23
  };
  
  export const attendanceData = [
    { month: 'Jan', attendance: 92 },
    { month: 'Feb', attendance: 88 },
    { month: 'Mar', attendance: 85 },
    { month: 'Apr', attendance: 90 },
    { month: 'May', attendance: 87 }
  ];
  
  export const engagementData = [
    { month: 'Jan', teachers: 76, students: 82 },
    { month: 'Feb', teachers: 80, students: 78 },
    { month: 'Mar', teachers: 84, students: 81 },
    { month: 'Apr', teachers: 79, students: 85 },
    { month: 'May', teachers: 83, students: 84 }
  ];
  
  export const contentAccessData = [
    { month: 'Jan', textContent: 4200, summaries: 2100 },
    { month: 'Feb', textContent: 4800, summaries: 2400 },
    { month: 'Mar', textContent: 5100, summaries: 2700 },
    { month: 'Apr', textContent: 6200, summaries: 3100 },
    { month: 'May', textContent: 5800, summaries: 2900 }
  ];
  