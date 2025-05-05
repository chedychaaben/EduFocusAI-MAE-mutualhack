
import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Teacher } from '@/utils/mockData';

type TeacherTableProps = {
  teachers: Teacher[];
};

const TeacherTable: React.FC<TeacherTableProps> = ({ teachers }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  const getEngagementColor = (engagement: number) => {
    if (engagement >= 80) return 'bg-green-100 text-green-800';
    if (engagement >= 60) return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nom</TableHead>
            <TableHead>Département</TableHead>
            <TableHead className="text-center">Cours</TableHead>
            <TableHead className="text-center">Présence</TableHead>
            <TableHead className="text-center">Engagement</TableHead>
            <TableHead className="text-right">Dernière activité</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell className="font-medium">{teacher.name}</TableCell>
              <TableCell>{teacher.department}</TableCell>
              <TableCell className="text-center">{teacher.coursesCount}</TableCell>
              <TableCell className="text-center">
                <Badge variant={teacher.attendanceRate >= 90 ? "default" : "outline"}>
                  {teacher.attendanceRate}%
                </Badge>
              </TableCell>
              <TableCell className="text-center">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getEngagementColor(teacher.studentEngagement)}`}>
                  {teacher.studentEngagement}%
                </span>
              </TableCell>
              <TableCell className="text-right">{formatDate(teacher.lastActive)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TeacherTable;
