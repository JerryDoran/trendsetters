import { Button } from '@/components/ui/button';
import { productType } from '@/constants';
import { Repeat } from 'lucide-react';

type FilterBarProps = {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
};

export default function FilterBar({
  selectedTab,
  setSelectedTab,
}: FilterBarProps) {
  return (
    <div className='flex items-center gap-2 text-sm font-semibold'>
      <div className='flex items-center gap-2'>
        {productType?.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setSelectedTab(tab?.value)}
            className={`border border-maestroDark px-4 py-1.5 md:px-6 md:py-2 rounded-full hover-effect hover:bg-maestroDark hover:text-white ${
              selectedTab === tab?.value && 'bg-maestroDark text-white'
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <Button
        size='icon'
        variant='outline'
        className='border border-maestroDark px-4 py-1.5 md:px-6 md:py-2 rounded-full hover-effect hover:bg-maestroDark hover:text-white'
      >
        <Repeat className='size-4' />
      </Button>
    </div>
  );
}
