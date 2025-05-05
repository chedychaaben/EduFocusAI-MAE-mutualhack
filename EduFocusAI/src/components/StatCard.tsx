
import React, { ReactNode } from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  change?: string;
  iconBgColor?: string;
}

const StatCard = ({ title, value, icon, change, iconBgColor = "bg-blue-100" }: StatCardProps) => {
  return (
    <Card className="border-l-4 border-l-primary">
      <CardContent className="p-4 flex justify-between items-center">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {change && (
            <p className="text-xs mt-1 text-gray-500">{change}</p>
          )}
        </div>
        <div className={`rounded-full p-3 ${iconBgColor}`}>
          {icon}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
