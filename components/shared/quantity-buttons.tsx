import { Product } from '@/sanity.types';
import { Button } from '@/components/ui/button';
import { Minus } from 'lucide-react';

type QuantityButtonProps = {
  product: Product;
  className?: string;
};

export default function QuantityButton({
  product,
  className,
}: QuantityButtonProps) {
  return (
    <div>
      <Button>
        <Minus className='size-4' />
      </Button>
      <span></span>
    </div>
  );
}
