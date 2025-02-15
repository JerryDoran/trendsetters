import { Product } from '@/sanity.types';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import PriceView from '@/components/shared/price-view';
import AddToCartButton from '@/components/shared/add-cart-button';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  console.log(product);
  return (
    <div className='group text-sm rounded-lg overflow-hidden'>
      <div className='bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400 h-72 overflow-hidden'>
        {product?.images && (
          <Link href='/product'>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={500}
              height={500}
              alt={product.name || 'Product'}
              priority
              className={`w-full h-full object-fill overflow-hidden group-hover:scale-105 hover-effect`}
            />
          </Link>
        )}
      </div>
      <div className='py-3 px-2 flex flex-col gap-1.5 bg-zinc-50 border border-t-0 rounded-b-lg'>
        <h2 className='font-semibold line-clamp-1'>{product.name}</h2>
        <p className=''>{product?.intro}</p>
        <PriceView
          className='text-lg'
          price={product?.price}
          discount={product?.discount}
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
