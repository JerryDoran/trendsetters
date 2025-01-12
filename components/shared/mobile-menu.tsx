import { AlignLeft } from 'lucide-react';

export default function MobileMenu() {
  return (
    <menu className='group p-1.5 hover:bg-maestroLight/10 transition ease-in-out cursor-pointer rounded-full'>
      <AlignLeft className='lg:hidden group-hover:text-maestroDark text-gray-500' />
    </menu>
  );
}
