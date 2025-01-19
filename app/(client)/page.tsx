import Container from '@/components/shared/container';
import Hero from '@/features/home/components/hero';

export default function Home() {
  return (
    <main className='text-2xl'>
      <Container className='py-10'>
        <Hero />
      </Container>
    </main>
  );
}
