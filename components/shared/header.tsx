import NavMenu from '@/components/shared/nav-menu';
import Logo from '@/components/shared/logo';
import Container from '@/components/shared/container';
import MobileMenu from '@/components/shared/mobile-menu';
import Search from '@/components/shared/search-bar';
import Cart from '@/components/shared/cart';
import { currentUser } from '@clerk/nextjs/server';
import { ClerkLoaded, SignedIn, SignInButton, UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { ListOrdered, User } from 'lucide-react';

export default async function Header() {
  const user = await currentUser();
  console.log('[USER]:', user);
  return (
    <header className='bg-white border-b border-gray-200 '>
      <Container className='flex items-center justify-between p-5 gap-7 max-lg:pr-10 text-maestroLight'>
        <NavMenu />
        <div className='w-auto md:1/3 flex items-center gap-2 justify-center'>
          <MobileMenu />
          <Logo className=''>Trend&#x2022;Setters</Logo>
        </div>
        <div className='w-auto lg:w-1/3 flex items-center justify-end gap-5'>
          <Search />
          <Cart />
          <ClerkLoaded>
            <SignedIn>
              <Link href='/orders' className='group relative'>
                <ListOrdered className='size-4 shrink-0 opacity-50 group-hover:text-maestroDark group-hover:opacity-100 cursor-pointer transition ease-in-out' />
                <span className='absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full font-semibold bg-maestroDark text-xs text-white'>
                  0
                </span>
              </Link>
              <UserButton />
            </SignedIn>
            {!user && (
              <SignInButton mode='modal'>
                <button className='text-sm font-medium text-maestroDark'>
                  Login
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
}
