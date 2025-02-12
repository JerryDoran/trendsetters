import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { motion } from 'motion/react';

type NoProductsAvailableProps = {
  selectedTab: string;
  className?: string;
};

export default function NoProductsAvailable({
  selectedTab,
  className,
}: NoProductsAvailableProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10'
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
      >
        <h2 className='text-2xl font-semibold text-gray-800'>
          No Products Available
        </h2>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
        className='text-gray-600 text-base'
      >
        We&apos;re sorry, but there are no products available for products
        matching on <span className='font-semibold'>{selectedTab}</span>{' '}
        criteria.
      </motion.p>
      <motion.div
        animate={{ opacity: 1, scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className='flex items-center text-blue-500  space-x-2'
      >
        <Loader2 className='animate-spin size-4 ' />
        <span className='text-xl'>We&apos;re working on it</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: 'easeInOut' }}
        className='text-gray-600 text-base text-sm'
      >
        Please check back later or explore our other product categories.
      </motion.p>
    </div>
  );
}
