
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ClassItemProps {
  title: string;
  timeRange: string;
  students: number;
  location: string;
  isActive?: boolean;
}

const ClassItem = ({ title, timeRange, students, location, isActive }: ClassItemProps) => {
  return (
    <Card className="mb-3 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="font-medium">{title}</h3>
          {isActive && (
            <Badge className="bg-blue-500">Active</Badge>
          )}
        </div>
        <p className="text-sm mt-1 text-gray-600">{timeRange}</p>
        <p className="text-xs mt-2 text-gray-500">{students} students · {location}</p>
      </CardContent>
    </Card>
  );
};

export default ClassItem;
