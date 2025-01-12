import { ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function Cart() {
  return (
    <Link href='/cart' className='group relative'>
      <ShoppingBag className='size-4 shrink-0 opacity-50 group-hover:text-maestroDark group-hover:opacity-100 cursor-pointer transition ease-in-out' />
      <span className='absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full font-semibold bg-maestroDark text-xs text-white'>
        0
      </span>
    </Link>
  );
}
