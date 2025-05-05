import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { LogIn } from "lucide-react";
import Logo from "@/assets/logo.png";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }
  
    let role = "";
    if (email.includes("admin")) {
      role = "admin";
    } else if (email.includes("student")) {
      role = "student";
    } else if (email.includes("professor")) {
      role = "professor";
    } else {
      toast.error("Invalid email");
      return;
    }
    localStorage.setItem("role", role);
    toast.success("Login successful");
  
    switch (role) {
      case 'admin':
        navigate('/admin');
        break;
      case 'professor':
        navigate('/professor');
        break;
      case 'student':
        navigate('/student');
        break;
      default:
        toast.error("Unknown user role");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section: Login Form */}
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="border-0 shadow-lg">
            <CardHeader className="space-y-1">
              <CardTitle className="text-3xl font-bold text-center text-brand-700">Log in</CardTitle>
              <p className="text-center text-gray-600">Welcome back! Please login to your account.</p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-3 border-l-4 border-l-brand-600"
                      placeholder="admin|professor|student@mail.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="text-sm font-medium">Password</label>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-3 border-l-4 border-l-brand-600"
                    placeholder="••••••••••••"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="remember" 
                    checked={rememberMe}
                    onCheckedChange={() => setRememberMe(!rememberMe)}
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember Me
                  </label>
                </div>
                
                <Button type="submit" className="w-full bg-brand-600 hover:bg-brand-700">
                  <LogIn className="mr-2 h-4 w-4" />
                  Login
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="flex-1 bg-gray-100 flex items-center justify-center">
        <img src={Logo} alt="Logo" width="150px" />
      </div>
    </div>
  );
};

export default Login;
