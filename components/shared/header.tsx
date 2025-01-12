import NavMenu from '@/components/shared/nav-menu';
import Logo from '@/components/shared/logo';
import Container from '@/components/shared/container';

export default function Header() {
  return (
    <header className='bg-white border-b border-gray-200 '>
      <Container className='flex items-center justify-between p-5 gap-7 text-maestroLight'>
        <NavMenu />
        <Logo />
        <div>Right</div>
      </Container>
    </header>
  );
}
