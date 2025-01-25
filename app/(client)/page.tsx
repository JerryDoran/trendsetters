import Container from '@/components/shared/container';
import Hero from '@/features/home/components/hero';
import ProductGrid from '@/features/home/components/product-grid';

export default function Home() {
  return (
    <main className='text-2xl'>
      <Container className='py-10'>
        <Hero />
        <ProductGrid />
      </Container>
    </main>
  );
}
