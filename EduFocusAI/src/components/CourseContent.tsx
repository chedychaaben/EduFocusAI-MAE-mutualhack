
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type ContentAccessData = {
  month: string;
  textContent: number;
  summaries: number;
};

type CourseContentProps = {
  data: ContentAccessData[];
};

const CourseContent: React.FC<CourseContentProps> = ({ data }) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-lg font-medium">Accès au Contenu de Cours</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} consultations`, '']} />
              <Area
                type="monotone"
                dataKey="textContent"
                name="Contenu Texte"
                stroke="#1e3a8a"
                fill="#1e3a8a"
                fillOpacity={0.4}
              />
              <Area
                type="monotone"
                dataKey="summaries"
                name="Résumés"
                stroke="#f97316"
                fill="#f97316"
                fillOpacity={0.4}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseContent;
