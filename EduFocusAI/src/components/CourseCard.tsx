
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

export interface CourseProps {
  id: string;
  title: string;
  courseCode: string;
  instructor: string;
  description: string;
  image?: string;
}

const CourseCard = ({ id, title, courseCode, instructor, description, image }: CourseProps) => {
  return (
    <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
      <Link to={`/course/${id}`}>
        {image && (
          <div className="w-full h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <p className="text-sm text-muted-foreground">{courseCode} - {instructor}</p>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600">{description}</p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default CourseCard;
