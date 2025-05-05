
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BarChart, 
  Users, 
  User, 
  FileText, 
  Calendar, 
  Settings,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type NavItem = {
  name: string;
  href: string;
  icon: React.ElementType;
  active?: boolean;
};

const navigation: NavItem[] = [
  { name: 'Tableau de bord', href: '/', icon: BarChart, active: true },
  { name: 'Enseignants', href: '/teachers', icon: User },
  { name: 'Étudiants', href: '/students', icon: Users },
  { name: 'Cours', href: '/courses', icon: FileText },
  { name: 'Calendrier', href: '/calendar', icon: Calendar },
  { name: 'Paramètres', href: '/settings', icon: Settings },
];

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={cn(
      "flex flex-col h-screen bg-white border-r border-gray-200 transition-all duration-300",
      collapsed ? "w-20" : "w-64"
    )}>
      <div className="px-4 py-6 flex justify-between items-center">
        {!collapsed && (
          <div className="font-bold text-xl text-faculty-primary">
            CI<span className="text-faculty-highlight">M</span>
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="ml-auto"
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>
      
      <nav className="flex-1 px-2 pb-4 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              item.active
                ? 'bg-faculty-primary text-white'
                : 'text-gray-600 hover:bg-gray-100',
              'group flex items-center px-3 py-3 rounded-md transition-colors',
              collapsed ? 'justify-center' : ''
            )}
          >
            <item.icon className={cn(
              'flex-shrink-0 w-6 h-6',
              item.active ? 'text-white' : 'text-gray-500'
            )} />
            {!collapsed && (
              <span className="ml-3 text-sm font-medium">{item.name}</span>
            )}
          </Link>
        ))}
      </nav>
      
      <div className={cn(
        "p-4 border-t border-gray-200 bg-gray-50",
        collapsed ? "text-center" : ""
      )}>
        {!collapsed && (
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Faculté
          </p>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
