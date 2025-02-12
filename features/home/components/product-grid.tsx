/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { useState, useEffect } from 'react';
import FilterBar from './filter-bar';
import { productType } from '@/constants';
import { client } from '@/sanity/lib/client';
import { Product } from '@/sanity.types';
import ProductCard from '@/components/shared/product-card';
import NoProductsAvailable from '@/components/shared/no-products';

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
      {!loading ? (
        <div>
          <span className='text-base'>Product is loading...</span>
        </div>
      ) : (
        <>
          {products?.length > 0 ? (
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10 w-full place-items-center'>
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
