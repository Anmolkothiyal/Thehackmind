'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';

interface Data {
  title: string;
  category: string;
  link: string;
  images: string[];
}

export default function OurWorkClient({ data }: { data: Data }) {
  return (
    <div className='min-h-screen md:pr-1'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0'>
        {/* Left side */}
        <div className='md:min-h-screen'>
          <div className='mt-10 ml-10'>
            <Link href='/' className='flex items-center gap-1'>
              <ArrowLeft className='size-4' /> Our Work
            </Link>

            <p className='text-4xl sm:text-2xl md:text-4xl font-medium mt-10'>
              {data.title}
            </p>
            <div className='flex gap-10 mt-5'>
              <div className='flex flex-col gap-2'>
                <p className='text-lg text-gray-700'>Category</p>
                <p className='font-medium'>{data.category}</p>
              </div>

              <div className='flex flex-col gap-2'>
                <p className='text-lg text-gray-700'>Preview Link</p>
                <Link
                  href={data.link}
                  target='_blank'
                  className='underline font-medium'
                >
                  Visit Site
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className='flex justify-center px-5 sm:px-0'>
          {data.images.length > 1 ? (
            <div className='flex flex-col gap-2'>
              {data.images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt='website-ss'
                  width={550}
                  height={550}
                  className='rounded-xl self-start mt-10 object-cover border'
                />
              ))}
            </div>
          ) : (
            <Image
              src={data.images[0]}
              alt='website-ss'
              width={550}
              height={550}
              className='rounded-xl self-start mt-10 object-cover'
            />
          )}
        </div>
      </div>
    </div>
  );
}
