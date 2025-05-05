
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

export interface LectureProps {
  id: string;
  title: string;
  date: string;
  description: string;
  courseId: string;
}

const LectureCard = ({ id, title, date, description, courseId }: LectureProps) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/lecture/1/1`}> {/*/lecture/${courseId}/${id}*/}
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{date}</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default LectureCard;
