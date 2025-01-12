'use client';

import { navItems } from '@/constants';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function NavMenu() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className='hidden lg:inline-flex w-1/3 items-center gap-5 capitalize text-sm'>
      {navItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={`hover:text-maestroDark transition relative group ${
            pathname === item.href
              ? 'text-maestroDark font-semibold'
              : 'text-maestroLight'
          }`}
        >
          {item.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-maestroDark group-hover:w-1/2 group-hover:left-0 transition-all duration-300 ease-in-out ${
              pathname === item.href ? 'w-1/2 left-0' : ''
            }`}
          />

          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-maestroDark group-hover:w-1/2 group-hover:right-0 transition-all duration-300 ease-in-out ${
              pathname === item.href ? 'w-1/2 right-0' : ''
            }`}
          />
        </Link>
      ))}
    </nav>
  );
}
