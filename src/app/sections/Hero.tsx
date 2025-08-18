import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='relative h-full flex items-center justify-center z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 bg-gradient-to-br from-gray-900 via-blue-800 to-purple-900'>
      {/* Background overlay for subtle patterns */}
      <div className='absolute inset-0 bg-gradient-to-br from-black to-transparent opacity-70 z-[-1]'></div>
      <main className='mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-[8rem]'>
        <div className='text-center flex flex-col items-center text-white'>
          <h1 className='text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl'>
            <span className='block'>Transform Your Ideas Into</span>
            <span className='block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent pb-5'>
              Digital Reality
            </span>
          </h1>
          <p className='mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl md:text-xl'>
            We craft cutting-edge web and mobile solutions that help businesses
            thrive in the digital age. From custom applications to CMS
            development, we&apos;re your partner in digital transformation.
          </p>
          <div className='mt-5 sm:mt-8 sm:flex justify-center'>
            <div className='rounded-md shadow'>
              <Link
                href='/contact'
                className='get-started w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 bg-blue-600 hover:bg-blue-700 transition-colors'
              >
                Get Started
                <ArrowRight className='ml-2 h-5 w-5' />
              </Link>
            </div>
            {/* <div className='mt-3 sm:mt-0 sm:ml-3'>
              <Link
                href='/portfolio'
                className='view-our-work w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 bg-gray-800 hover:bg-gray-700 transition-colors'
              >
                View Our Work
              </Link>
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
