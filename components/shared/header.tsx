import NavMenu from '@/components/shared/nav-menu';
import Logo from '@/components/shared/logo';
import Container from '@/components/shared/container';
import MobileMenu from '@/components/shared/mobile-menu';
import Search from '@/components/shared/search-bar';
import Cart from '@/components/shared/cart';

export default function Header() {
  return (
    <header className='bg-white border-b border-gray-200 '>
      <Container className='flex items-center justify-between p-5 gap-7 text-maestroLight'>
        <NavMenu />
        <div className='w-auto md:1/3 flex items-center gap-2 justify-center'>
          <MobileMenu />
          <Logo className=''>Trend&#x2022;Setters</Logo>
        </div>
        <div className='w-auto lg:w-1/3 flex items-center justify-end gap-4'>
          <Search />
          <Cart />
          <div>
            <button className='text-sm font-medium text-maestroDark'>
              Login
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
