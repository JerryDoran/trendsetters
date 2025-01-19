import { motion } from 'motion/react';
import Logo from './logo';
import { X } from 'lucide-react';
import { navItems } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Social from './social';
import { useMobileClose } from '@/hooks/use-mobile-close';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const sidebarRef = useMobileClose<HTMLDivElement>(onClose);
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 bg-maestroDark/50 shadow-xl w-full ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <motion.div
        ref={sidebarRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeInOut' }}
        exit={{ opacity: 0 }}
        className='min-w-72 max-w-96 bg-maestroDark text-white/90 h-full p-10 border-r border-r-white flex flex-col gap-6'
      >
        <div className='flex items-center justify-between'>
          <button onClick={onClose}>
            <Logo className='text-gray-100'>Trend&#x2022;Setters</Logo>
          </button>

          <button
            className='hover:text-white hover-effect text-gray-300'
            onClick={onClose}
          >
            <X className='size-5' />
          </button>
        </div>
        <nav className='flex flex-col gap-5 tracking-wide text-base hover-effect w-32'>
          {navItems.map((item) => (
            <Link
              onClick={onClose}
              key={item.title}
              href={item.href}
              className={`hover:text-white transition text-gray-300 font-semibold w-fit p-2  ${
                pathname === item.href
                  ? 'text-white font-semibold'
                  : 'text-maestroLight'
              }`}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <Social />
      </motion.div>
    </div>
  );
}
