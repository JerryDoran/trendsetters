/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';
import FilterBar from './filter-bar';
import { productType } from '@/constants';
import { client } from '@/sanity/lib/client';
import { Product } from '@/sanity.types';
import ProductCard from '@/components/shared/product-card';
import NoProductsAvailable from '@/components/shared/no-products';
import { motion, AnimatePresence } from 'motion/react';
import { Loader2 } from 'lucide-react';

export default function ProductGrid() {
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || '');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const query = `*[_type == 'product' && variant == $variant] | order(name asc)`;
  const params = {
    variant: selectedTab.toLocaleLowerCase(),
  };

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        const data = await response;
        setProducts(data);

        setLoading(false);
      } catch (error) {
        console.log('Product fetch error:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, [selectedTab]);

  return (
    <div className='mt-10 flex items-center flex-col'>
      <FilterBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      {loading ? (
        <div className='flex flex-col items-center justify-center py-10 min-h-80 space-y-4 text-center bg-gray-100 rounded-lg w-full mt-10'>
          <div className='flex items-center gap-2 text-blue-600'>
            <Loader2 className='size-5 animate-spin' />
            <span className='text-base'>Product is loading...</span>
          </div>
        </div>
      ) : (
        <>
          {products?.length > 0 ? (
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 w-full place-items-center pt-10'>
              {products?.map((product: Product) => (
                <div className='' key={product?._id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <NoProductsAvailable selectedTab={selectedTab} />
          )}
        </>
      )}
    </div>
  );
}
