import {
  Rocket,
  Palette,
  Shield,
  CodeXml,
  Globe,
  ArrowRight,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import WhyChooseUs from '../WhyChooseUs';
import { Metadata } from 'next';
import { projects } from '@/app/_constants';

export const metadata: Metadata = {
  title: 'web-development',
};

const cardDetails = [
  {
    icon: <CodeXml className='size-10 text-[#5dd55d]' />,
    title: 'Custom Development',
    description:
      'Tailored web solutions built with cutting-edge technologies to meet your specific needs.',
  },
  {
    icon: <Rocket className='size-10 text-[#5dd55d]' />,
    title: 'Performance Optimization',
    description:
      'Speed up your website for better user experience and improved search rankings.',
  },
  {
    icon: <Palette className='size-10 text-[#5dd55d]' />,
    title: 'UI/UX Design',
    description:
      'Beautiful, intuitive interfaces that engage users and drive conversions.',
  },
  {
    icon: <Shield className='size-10 text-[#5dd55d]' />,
    title: 'Security Solutions',
    description:
      'Robust security measures to protect your website and user data.',
  },
];

export default function WebDevelopment() {
  return (
    <>
      <div className='h-screen relative bg-black/80'>
        <Image
          src='/service/webDev.jpg'
          width={500}
          height={500}
          alt='bg'
          className='w-full h-full object-cover absolute z-[-2]'
        />
        <main className='mx-auto absolute max-w-4xl w-full px-2 sm:px-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex text-center text-white flex-col items-center gap-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl'>
            <Globe className='w-16 h-16 text-[#5dd55d]' />
            <h2 className='mt-5'>Transforming Ideas into</h2>
            <h2 className='text-[#5dd55d]'>Digital Excellence</h2>
            <p className='mt-3 text-base tracking-normal font-medium text-center sm:mt-5 sm:text-lg sm:max-w-xl md:text-xl'>
              Expert web development services tailored to elevate your online
              presence and drive business growth.
            </p>

            <Link href='/contact' className='mt-2 sm:tracking-wide gap-2 bg-[#5dd55d] hover:bg-[#2f922f] text-white px-4 py-3 rounded-md font-semibold text-lg transition-all transform hover:scale-105 flex items-center mx-auto'>
                Get Started With Web Development Services
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

        <p className='mt-20 text-center text-2xl tracking-tight md:text-4xl'>
          Previous Projects
        </p>

        <Projects />
      </div>
    </>
  );
}

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
            <Link href={c.visitProject} target='_blank' className='w-full'>
              <Button name='visit Project' className='w-full bg-white text-black hover:bg-white/90'>
                Visit Project
              </Button>
            </Link>
            <Link href={c.details} className='w-full'>
              <Button name='details' className='w-full bg-white text-black hover:bg-white/90'>
                Details
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
