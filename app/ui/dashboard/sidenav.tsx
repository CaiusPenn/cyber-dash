'use client';
import { useState } from 'react';
import Link from 'next/link';
import { signOut } from '@/auth';

export default function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 left-0 h-full transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} bg-[#7D9CB7] text-white`}>
      {/* Button to Toggle Sidebar */}
      
      <button
        className={`absolute top-4 right-2 p-2 rounded ${isOpen ? 'bg-[#7D9CB7]' : 'bg-[#7D9CB7]'} `}
        onClick={toggleSidebar}
      >
        <div className="relative w-8 h-1 bg-white my-2"></div>
        <div className="relative w-8 h-1 bg-white my-2"></div>
        <div className="relative w-8 h-1 bg-white my-1"></div>
      </button>
    </div>
  );
}
