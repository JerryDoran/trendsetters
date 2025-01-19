'use client';

import { useState } from 'react';
import { AlignLeft } from 'lucide-react';
import Sidebar from './sidebar';

export default function MobileMenu() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsSidebarOpen(true)}
        className='group p-1.5 hover:bg-maestroLight/10 transition ease-in-out cursor-pointer rounded-full'
      >
        <AlignLeft className='lg:hidden group-hover:text-maestroDark text-gray-500' />
      </button>
      <div className='lg:hidden'>
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
    </>
  );
}
