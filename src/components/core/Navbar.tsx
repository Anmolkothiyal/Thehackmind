'use client';

import NavItems from '@/components/NavItems';
import { Menu } from 'lucide-react';
import { useState, useRef } from 'react';
import { NavDrawer } from '../NavDrawer';
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  const navRef = useRef(null);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <>
      <nav
        ref={navRef}
        className='flex items-center justify-between border-b px-4 w-full z-20 backdrop-blur-md sticky'
      >
        <Link href='/' className='flex items-center'>
          <Image
            src='/logo/logo-black.png'
            alt='Logo'
            width={60}
            height={60}
            className='object-cover mt-1'
          />
          <p className='font-semibold'>TheHackMind</p>
        </Link>

        <div className='hidden sm:block'>
          <NavItems />
        </div>

        <Menu
          onClick={() => setOpenDrawer(true)}
          className='size-8 block sm:hidden cursor-pointer hover:bg-gray-100 transition-all ease-in-out p-1 rounded-md duration-150'
        />
      </nav>

      {openDrawer && (
        <NavDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
      )}
    </>
  );
};

export default Navbar;
