import { cn } from '@/lib/utils';
import Link from 'next/link';

type LogoProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Logo({ children, className }: LogoProps) {
  return (
    <Link href='/'>
      <h2
        className={cn(
          'font-bold text-maestroDark text-xl tracking-wider uppercase',
          className
        )}
      >
        {children}
      </h2>
    </Link>
  );
}
