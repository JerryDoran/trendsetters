import { cn } from '@/lib/utils';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Heading({ children, className }: HeadingProps) {
  return (
    <h2 className={cn('text-2xl font-semibold', className)}>{children}</h2>
  ); 
}
