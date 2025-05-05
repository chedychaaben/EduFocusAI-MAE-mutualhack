
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: {
    value: number;
    positive: boolean;
  };
  description?: string;
  className?: string;
};

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  description,
  className
}) => {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="p-2 bg-muted bg-opacity-50 rounded-full">
            {icon}
          </div>
        </div>

        <div className="mt-4">
          <div className="flex items-baseline">
            <h3 className="text-2xl font-bold">{value}</h3>
            {trend && (
              <span className={cn(
                "ml-2 text-sm font-medium",
                trend.positive ? "text-green-600" : "text-red-600"
              )}>
                {trend.positive ? "+" : ""}{trend.value}%
              </span>
            )}
          </div>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
