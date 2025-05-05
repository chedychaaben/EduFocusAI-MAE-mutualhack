
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <div className="green-gradient h-24"></div>
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <h1 className="text-4xl font-bold text-brand-700 sm:text-5xl md:text-6xl">
            EduFocusAI
          </h1>
          <p className="text-xl text-gray-600">
            Welcome to EduFocusAI, the intelligent platform that enhances educational experiences through AI monitoring, analytics, and personalized learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate("/login")}
              className="text-lg px-6 py-6 bg-brand-600 hover:bg-brand-700"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
