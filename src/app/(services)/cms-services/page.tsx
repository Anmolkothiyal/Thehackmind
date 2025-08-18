import { Database, Globe, ShoppingCart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import WhyChooseUs from '../WhyChooseUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CMS',
};

const cardDetails = [
  {
    icon: <Database className='size-10 text-[#9393e8]' />,
    title: 'WordPress Development',
    description:
      'Custom WordPress solutions with advanced features and optimized performance.',
  },
  {
    icon: <Globe className='size-10 text-[#9393e8]' />,
    title: 'Headless CMS Integration',
    description:
      'Modern headless CMS implementations for maximum flexibility and scalability.',
  },
  {
    icon: <ShoppingCart className='size-10 text-[#9393e8]' />,
    title: 'E-commerce CMS',
    description:
      'Powerful e-commerce solutions with comprehensive content management.',
  },
];

export default function CmsServices() {
  return (
    <>
      <div className='h-[100vh] relative bg-black/80'>
        <Image
          src='/service/CMS.jpeg'
          width={500}
          height={500}
          alt='bg'
          className='w-full h-full object-cover absolute z-[-2]'
        />
        <main className='mx-auto max-w-4xl w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex text-center text-white flex-col items-center gap-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl'>
            <h2>Powerful Content Management</h2>
            <h2 className='text-[#9393e8]'>Made Simple</h2>
            <p className='mt-3 text-base tracking-normal font-medium text-center sm:mt-5 sm:text-lg sm:max-w-xl md:text-xl'>
              Professional CMS solutions to streamline your content workflow and
              enhance your digital presence
            </p>

            <Link href='/contact' className='mt-2 sm:tracking-wide gap-2 bg-[#9393e8] hover:bg-[#5151e0] text-white px-4 py-3 rounded-md font-semibold text-lg transition-all transform hover:scale-105 flex items-center mx-auto'>
                Get Started with CMS Services
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
    bg: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80',
    visitProject: '',
    details: '',
  },
  {
    bg: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80',
    visitProject: '',
    details: '',
  },
  {
    bg: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80',
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
            width={500}
            height={500}
            alt='project-banner'
            className='group-hover:scale-110 transition-transform duration-500'
          />

          <div className='absolute inset-0 flex justify-center flex-col gap-4 items-center opacity-0 group-hover:opacity-100 z-20 w-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-min'>
            <Link href={c.visitProject} className='w-full'>
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
