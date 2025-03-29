import { cn, formatCurrency } from '@/lib/utils';

type PriceViewProps = {
  price: number | undefined;
  discount?: number | undefined;
  className?: string;
};

export default function PriceView({
  price,
  discount,
  className,
}: PriceViewProps) {
  return (
    <div className='flex items-center gap-2'>
      <span className={cn('text-sm font-semibold text-maestroDark', className)}>
        {formatCurrency(price || 0)}
      </span>
      {price && discount && (
        <span className='text-sm text-muted-foreground line-through'>
          {formatCurrency(price + (discount * price) / 100)}
        </span>
      )}
    </div>
  );
}
