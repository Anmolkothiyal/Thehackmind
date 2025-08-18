'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AiFillInstagram } from 'react-icons/ai';
// import { AiFillTwitterCircle } from 'react-icons/ai';
// import { AiFillLinkedin } from 'react-icons/ai';
import Image from 'next/image';

const comapnyLinks = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About',
    href: '/about',
  },
  // {
  //   title: 'Our Work',
  //   href: '/ourwork',
  // },
  {
    title: 'Contact',
    href: '/contact',
  },
];

const services = [
  {
    title: 'Web Development',
    href: '/web-development',
  },
  {
    title: 'App Development',
    href: '/app-development',
  },
  {
    title: '3D Animation',
    href: '/3d-animation',
  },
  {
    title: 'Video Editing',
    href: '/video-editing',
  },
  {
    title: 'Logo Designing',
    href: '/logo-designing',
  },
  {
    title: 'CMS Services',
    href: '/cms-services',
  },
];

const policyLinks = [
  {
    title: 'Privay Policy',
    href: '/legal/privacy-policy',
  },
  {
    title: 'Refund Policy',
    href: '/legal/refund-policy',
  },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer
      className={`${
        pathname === '/' ? 'mt-0' : 'mt-20'
      } flex flex-col gap-10 bg-[#1A1A1A]`}
    >
      <div className='flex flex-col sm:flex-row justify-between w-full max-w-6xl mx-auto py-5 px-3'>
        {/* Company logo and Socials */}
        <div className='flex flex-col gap-5'>
          <Link href='/' className='flex gap-2 items-center text-white'>
            <div className='flex items-center space-x-2 relative right-10 top-2'>
              <Image
                src='/logo/logo-white.png'
                alt='Logo'
                width={100}
                height={200}
                className='object-contain w-full h-full '
              />
                <p className='font-semibold relative -top-2 right-3'>TheHackMind</p>
            </div>
          </Link>
          <p className='text-gray-400 text-sm font-medium leading-6 mt-2'>
            <span className='block text-gray-300 font-semibold'>
              Our Address:
            </span>
            <span className='block'>
              303 Tower No. 7, Dream Home, Wave City,
            </span>
            <span className='block'>Ghaziabad, 201010</span>
          </p>
          <div className='flex items-center gap-3'>
            <Link title='instagram' href='https://www.instagram.com/thehackmind5?igsh=bzZwMzg4NjRjbmUx '>
              <AiFillInstagram color='white' size={25} />
            </Link>
            {/* <AiFillTwitterCircle color='white' size={25} />
            <AiFillLinkedin color='white' size={25} /> */}
          </div>
        </div>

        {/* All links */}
        <div className='flex gap-20 mt-10 sm:mt-0'>
          <div className='flex flex-col gap-4'>
            <p className='text-gray-400'>Company</p>
            <SytledLinks LinksArray={comapnyLinks} />
          </div>
          <div className='flex flex-col gap-4'>
            <p className='text-gray-400'>Services</p>
            <SytledLinks LinksArray={services} />
          </div>
        </div>
      </div>

      <div className='bg-[#212121] p-3'>
        <div className='w-full max-w-6xl flex flex-col sm:flex-row justify-between mx-auto'>
          <div className='flex gap-8 items-center flex-wrap'>
            <SytledLinks LinksArray={policyLinks} />
          </div>
          <p className='mt-4 sm:mt-0 text-gray-400'>
            &copy; {new Date().getFullYear()} thehackmind. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

interface StyledLinksProps {
  LinksArray: { title: string; href: string }[];
}

const SytledLinks = ({ LinksArray }: StyledLinksProps) => {
  return (
    <>
      {LinksArray.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className='text-white hover:text-purple-400'
        >
          {item.title}
        </Link>
      ))}
    </>
  );
};
