import React, { useState, useEffect, useRef } from 'react';
import { User, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  userName?: string;
}

const Header = ({ title = 'EduFocusAI', userName }: HeaderProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <header className="w-full green-gradient text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl font-bold">
          {title}
        </span>

        {userName && (
          <div className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-2 p-2 hover:bg-brand-600 rounded transition-colors"
              onClick={() => setDropdownOpen((prev) => !prev)}
            >
              <span>{userName}</span>
              <User size={20} />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg z-50">
                <button
                  className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                  onClick={handleLogout}
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
