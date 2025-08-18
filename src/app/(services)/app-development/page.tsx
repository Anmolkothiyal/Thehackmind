import {
  Rocket,
  Palette,
  Shield,
  Smartphone,
  Code,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import WhyChooseUs from '../WhyChooseUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'app-development',
};

const cardDetails = [
  {
    icon: <Code className='size-10 text-[#Ffd700]' />,
    title: 'Custom App Development',
    description:
      'Tailored app solutions built with the latest technology to meet your business needs.',
  },
  {
    icon: <Rocket className='size-10 text-[#Ffd700]' />,
    title: 'Performance Optimization',
    description:
      'Enhance app speed and efficiency for a smooth user experience and higher engagement.',
  },
  {
    icon: <Palette className='size-10 text-[#Ffd700]' />,
    title: 'UI/UX Design',
    description:
      'User-centered design that delivers visually appealing and easy-to-use interfaces.',
  },
  {
    icon: <Shield className='size-10 text-[#Ffd700]' />,
    title: 'Security Solutions',
    description:
      'Advanced security to safeguard user data and protect your app from threats.',
  },
];

export default function AppDevelopment() {
  return (
    <>
      <div className='h-screen relative bg-black/80'>
        <Image
          src='/service/appDev.jpeg'
          width={500}
          height={500}
          alt='bg'
          className='w-full h-full object-cover absolute z-[-2]'
        />
        <main className='mx-auto absolute max-w-4xl w-full px-2 sm:px-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex text-center text-white flex-col items-center gap-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl'>
            <Smartphone className='w-16 h-16' />
            <h2 className='mt-5'>Bringing Your Vision to</h2>
            <h2 className='text-[#Ffd700]'>Life in Mobile Apps</h2>
            <p className='mt-3 text-base tracking-normal font-medium text-center sm:mt-5 sm:text-lg sm:max-w-xl md:text-xl'>
              Expert app development services designed to enhance user
              engagement and drive growth.
            </p>

            <Link href='/contact' className='mt-2 sm:tracking-wide gap-2 bg-[#Ffd700] hover:bg-[#efd542] text-white px-4 py-3 rounded-md font-semibold text-lg transition-all transform hover:scale-105 flex items-center mx-auto'>
                Get Started With App Development Services
                <ArrowRight className='mt-1 hidden sm:block' />
            </Link>
          </div>
        </main>
      </div>

      <div className='max-w-7xl mx-auto '>
        <div className='mt-20 text-center'>
          <p className='text-2xl tracking-tight md:text-4xl'>What We Offer</p>
          <WhyChooseUs CardDetails={cardDetails} />
        </div>

        {/* <p className='mt-20 text-center text-2xl tracking-tight md:text-4xl'>
          Recent Projects
        </p>

        <Projects /> */}
      </div>
    </>
  );
}

const projects = [
  {
    bg: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80',
    visitProject: '',
    details: '',
  },
  {
    bg: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80',
    visitProject: '',
    details: '',
  },
  {
    bg: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80',
    visitProject: '',
    details: '',
  },
];

const Projects = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-20 justify-items-center px-4'>
      {projects.map((c, i) => (
        <div key={i} className='relative group overflow-hidden rounded-lg'>
          <div className='absolute inset-0 group-hover:bg-black/50 group-hover:z-10' />

          <Image
            src={c.bg}
            alt='project-banner'
            width={550}
            height={550}
            className='group-hover:scale-110 transition-transform duration-500'
          />

          <div className='absolute inset-0 flex justify-center flex-col gap-4 items-center opacity-0 group-hover:opacity-100 z-20 w-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-min'>
            <Link href={c.visitProject} className='w-full'>
              <Button name='visit Project' className='w-full bg-white text-black hover:bg-white/90'>
                Visit Project
              </Button>
            </Link>
            <Link href={c.details} className='w-full'>
              <Button name='Details' className='w-full bg-white text-black hover:bg-white/90'>
                Details
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
