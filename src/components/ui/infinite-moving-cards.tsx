'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Button } from './button';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    bg: string;
    visitProject: string;
    details: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'forwards'
        );
      } else {
        containerRef.current.style.setProperty(
          '--animation-direction',
          'reverse'
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn('scroller relative z-20 overflow-hidden', className)}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full shrink-0 gap-4 py-6 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className='w-[350px] max-w-full relative rounded-xl border border-b-0 flex-shrink-0 border-slate-700 md:w-[450px] group'
            style={{
              background: '',
            }}
          >
            <blockquote className='relative z-10'>
              <span className='relative text-sm leading-[1.6] text-gray-100 font-normal'>
                <img src={item.bg} alt='Project background' />
              </span>
              <div className='absolute inset-0 flex justify-center flex-col gap-4 items-center opacity-0 group-hover:opacity-100 z-20 w-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <Link
                  href={item.visitProject}
                  target='_blank'
                  className='w-full'
                >
                  <Button name='visit Project' className='w-full bg-white text-black hover:bg-white/90'>
                    Visit Project
                  </Button>
                </Link>
                <Link href={item.details} className='w-full'>
                  <Button name='details' className='w-full bg-white text-black hover:bg-white/90'>
                    Details
                  </Button>
                </Link>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
