
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface AlertProps {
  id: string;
  studentName: string;
  message: string;
  time: string;
  severity: 'low' | 'medium' | 'high';
}

const AlertItem = ({ studentName, message, time, severity }: AlertProps) => {
  const getSeverityColor = () => {
    switch (severity) {
      case 'Not Focused':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  };
  

  return (
    <Card className="mb-2 hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500"></span>
            <span className="font-medium">{studentName}</span>
          </div>
          <Badge className={getSeverityColor()}>
            {severity.charAt(0).toUpperCase() + severity.slice(1)}
          </Badge>
        </div>
        <p className="text-sm mt-1 text-gray-600">{message}</p>
        <p className="text-xs mt-2 text-gray-400">{time}</p>
      </CardContent>
    </Card>
  );
};

export default AlertItem;
