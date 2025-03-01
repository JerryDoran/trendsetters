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
    <div className='group text-sm rounded-lg overflow-hidden w-[300px] h-[500px]'>
      <div className='bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-400 h-72 overflow-hidden relative'>
        {product?.images && (
          <Link href='/product'>
            <Image
              src={urlFor(product?.images[0]).url()}
              width={500}
              height={500}
              alt={product.name || 'Product'}
              priority
              className={`w-full h-full object-fill overflow-hidden  hover-effect ${product?.stock === 0 ? 'opacity-80' : 'group-hover:scale-105'}`}
            />
          </Link>
        )}
        {product?.stock === 0 && (
          <div className='absolute top-0 left-0 w-full h-full bg-maestroDark/60 flex items-center justify-center'>
            <p className='text-base text-white font-semibold'>Out of stock</p>
          </div>
        )}
      </div>
      <div className='py-3 px-2 flex flex-col gap-2 bg-zinc-50 border border-t-0 rounded-b-lg h-42'>
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
