
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Course } from '@/utils/mockData';

type CourseAttendanceProps = {
  courses: Course[];
};

const CourseAttendance: React.FC<CourseAttendanceProps> = ({ courses }) => {
  const data = courses.map(course => ({
    name: course.name.length > 20 ? `${course.name.substring(0, 20)}...` : course.name,
    attendance: course.attendanceRate,
    engagement: course.engagementRate
  }));

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Présence et Engagement par Cours</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 80,
              }}
            >
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={80}
              />
              <YAxis
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip
                formatter={(value: number) => [`${value}%`, '']}
                labelFormatter={(label) => `Cours: ${label}`}
              />
              <Bar dataKey="attendance" name="Présence" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
              <Bar dataKey="engagement" name="Engagement" fill="#0f766e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseAttendance;
