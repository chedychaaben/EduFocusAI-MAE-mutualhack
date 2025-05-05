
import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <h1 className="text-2xl font-bold text-faculty-primary">
          Campus Insight <span className="text-faculty-secondary">Moniteur</span>
        </h1>
      </div>
      
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <input 
            type="text" 
            placeholder="Rechercher..." 
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-60"
          />
        </div>
        
        <Button variant="ghost" size="icon" className="relative">
          <Bell size={20} />
          <span className="absolute top-0 right-0 w-2 h-2 bg-faculty-highlight rounded-full"></span>
        </Button>
        
        <div className="flex items-center space-x-3">
          <div className="text-right hidden sm:block">
            <p className="font-medium">Admin Faculté</p>
            <p className="text-sm text-gray-500">Administrateur</p>
          </div>
          <Button variant="ghost" size="icon" className="h-10 w-10 rounded-full bg-faculty-primary text-white">
            <User size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
