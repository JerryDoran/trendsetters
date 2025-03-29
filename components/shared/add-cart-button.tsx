import { Product } from '@/sanity.types';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import QuantityButtons from './quantity-buttons';
import PriceView from './price-view';

type ProductCardProps = {
  product: Product;
  className?: string;
};

export default function AddToCartButton({
  product,
  className,
}: ProductCardProps) {
  const isOutOfStock = product?.stock === 0;
  const itemCount = 4;

  return (
    <div>
      {itemCount ? (
        <div className='w-full text-sm'>
          <div className='flex items-center justify-between'>
            <span className='text-xs text-muted-foreground'>Quantity</span>
            <QuantityButtons product={product} />
          </div>
          <div className='flex items-center justify-between pt-1 border-t '>
            <span className='text-xs font-semibold'>Subtotal</span>
            <PriceView
              price={product?.price ? product?.price * itemCount : 0}
            />
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}
