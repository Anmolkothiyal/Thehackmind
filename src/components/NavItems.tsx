'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

import React from 'react';
import Link from 'next/link';
import CollapsibleServices from './CollapsibleServices';
import { useState } from 'react';
import AnimatedButton from './AnimatedButton';
import { usePathname } from 'next/navigation';

interface NavItemsProps {
  view?: string;
}

const NavItems = ({ view }: NavItemsProps) => {
  const pathname = usePathname();
  const [openCollapsible, setOpenCollapsible] = useState<boolean>(false);

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

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <div
          className={
            view === 'drawer' ? 'flex flex-col gap-4' : 'flex items-center'
          }
        >
          <NavigationMenuItem>
            <Link href='/' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className={pathname === '/' ? 'text-black' : ''}>
                  Home
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href='/about' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className={pathname === '/' ? 'text-black' : ''}>
                  About
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          {view === 'drawer' ? (
            <div
              onClick={() => setOpenCollapsible((prev) => !prev)}
              className='ml-2 flex gap-3 items-center hover:bg-gray-100 rounded-md p-2 cursor-pointer transition-all duration-150 ease-in-out'
            >
              <p className='text-base font-medium'>Services</p>
              <ArrowRight className='size-4 mt-1' />
            </div>
          ) : (
            <NavigationMenuItem>
              <NavigationMenuTrigger
                className={pathname === '/' ? 'text-black' : ''}
              >
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className='z-10'>
                <ul className='flex flex-col gap-4 w-[180px]'>
                  {services.map((component, i) => (
                    <ListItem
                      key={i}
                      title={component.title}
                      href={component.href}
                    >
                      {component.title}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )}

          {/* <NavigationMenuItem>
            <Link href='/ourwork' legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className={pathname === '/' ? 'text-black' : ''}>
                  Our Work
                </span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem> */}

          <Link href='/contact'>
            <AnimatedButton
              text='Contact Us'
              className='contact-us-button ml-3'
            />
          </Link>
        </div>
      </NavigationMenuList>
      <CollapsibleServices open={openCollapsible} />
    </NavigationMenu>
  );
};

export const ListItem = ({
  title,
  href,
}: {
  title: string;
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground'
          )}
        >
          <p className='text-sm font-medium leading-none'>{title}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default NavItems;
