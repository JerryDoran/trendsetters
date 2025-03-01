import { Product } from '@/sanity.types';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

type ProductCardProps = {
  product: Product;
  className?: string;
};

export default function AddToCartButton({
  product,
  className,
}: ProductCardProps) {
  const isOutOfStock = product?.stock === 0;

  return (
    <div>
      <Button
        disabled={isOutOfStock}
        variant='outline'
        className={cn(
          'w-full bg-transparent hover:bg-maestroDark hover:text-white hover-effect font-semibold text-sm tracking-wide',
          className
        )}
      >
        Add to cart
      </Button>
    </div>
  );
}
