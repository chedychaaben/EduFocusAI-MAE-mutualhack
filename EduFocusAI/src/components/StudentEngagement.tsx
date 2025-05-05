
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Student } from '@/utils/mockData';
import { Progress } from '@/components/ui/progress';

type StudentEngagementProps = {
  students: Student[];
};

const StudentEngagement: React.FC<StudentEngagementProps> = ({ students }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium">Engagement des Étudiants</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {students.map((student) => (
          <div key={student.id} className="space-y-1.5">
            <div className="flex items-center justify-between">
              <div>
                <span className="font-medium text-sm">{student.name}</span>
                <span className="text-muted-foreground text-xs ml-2">
                  Année {student.year}
                </span>
              </div>
              <span 
                className={`text-xs font-medium px-2 py-1 rounded-full ${
                  student.engagement >= 85 
                    ? 'bg-green-100 text-green-800' 
                    : student.engagement >= 70 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {student.engagement}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Progress value={student.engagement} className="h-2" />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Présence: {student.attendanceRate}%</span>
              <span>Contenu consulté: {student.contentViewed}%</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default StudentEngagement;
