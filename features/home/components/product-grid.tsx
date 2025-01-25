'use client';

import { useState } from 'react';
import FilterBar from './filter-bar';
import { productType } from '@/constants';

export default function ProductGrid() {
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || '');
  console.log(selectedTab);
  return (
    <div className='mt-10 flex items-center flex-col'>
      <FilterBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
    </div>
  );
}
