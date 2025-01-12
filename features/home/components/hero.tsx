import Heading from '@/components/shared/Heading';

export default function Hero() {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      <Heading className='text-3xl md:text-5xl uppercase font-bold text-center'>
        Best Clothing Collection
      </Heading>
      <p className='text-sm md:text-base text-center text-maestroLight font-medium max-w-[480px]'>
        Find everything you need to look and feel your best. Shop the latest
        men&apos;s and women&apos;s clothing and accessories.
      </p>
    </div>
  );
}
