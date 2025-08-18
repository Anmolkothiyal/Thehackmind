import {
  ArrowRight,
  Clock,
  Palette,
  Sparkles,
  PenTool,
  MoveUpRightIcon,
} from 'lucide-react';
import Link from 'next/link';
import WhyChooseUs from '../WhyChooseUs';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Logo Design',
};

const cardDetails = [
  {
    icon: <Palette className='size-10 text-purple-500' />,
    title: 'Custom Design',
    description:
      "Unique logos tailored to your brand's personality and values.",
  },
  {
    icon: <Sparkles className='size-10 text-purple-500' />,
    title: 'Creative Excellence',
    description: 'Innovative concepts that make your brand stand out',
  },
  {
    icon: <Clock className='size-10 text-purple-500' />,
    title: 'Quick Turnaround',
    description: 'Professional designs delivered within your timeline',
  },
];

export default function LogoDesigning() {
  return (
    <>
      <main className='min-h-screen relative bg-gradient-to-br from-indigo-900/85 to-purple-900/85'>
        <Image
          src='https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80'
          width={500}
          height={500}
          alt='bg'
          className='w-full h-screen object-cover absolute z-[-1]'
        />
        <div className='max-w-4xl px-2 sm:px-0 w-full text-center text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4'>
          <PenTool className='w-16 h-16 text-purple-300' />
          <div className='flex flex-col items-center text-4xl tracking-tight font-extrabold sm:text-5xl md:text-7xl'>
            <h2 className=''>Craft Your Perfect</h2>
            <h2 className='text-[#9393e8]'>Brand Identity</h2>
            <h3 className='mt-3 text-base tracking-normal font-medium text-center sm:mt-5 sm:text-lg sm:max-w-xl md:text-xl'>
              Transform your vision into a memorable logo that tells your story
            </h3>
          </div>

          <Link href='/contact' className='mt-2 sm:tracking-wide gap-2 bg-[#9393e8] hover:bg-[#5151e0] text-white px-4 py-3 rounded-md font-semibold text-lg transition-all transform hover:scale-105 flex items-center mx-auto'>
              Get Started with Logo-Design Services
              <ArrowRight className='mt-1 hidden sm:block' />
          </Link>
        </div>
      </main>

      <div className='mt-20 text-center text-2xl tracking-tight md:text-4xl'>
        <p className='text-center'>What We Offer</p>
        <WhyChooseUs CardDetails={cardDetails} />
      </div>

      <div className='py-20 text-center text-2xl tracking-tight md:text-4xl px-10'>
        <p className='text-center'>Our Previous Work</p>
        <br />
        <LogoGallery />
      </div>
    </>
  );
}

const LogoUrls = [
  'https://ucarecdn.com/f1af7311-fcbe-4e69-862e-56ca72436822/-/preview/1000x666/',
  'https://ucarecdn.com/67aed73b-ef97-4a0a-ad37-f35da55efe08/-/preview/626x626/',
  'https://ucarecdn.com/c5d95a09-4579-41cc-b016-71e5f9b02447/-/preview/709x1000/',
  'https://ucarecdn.com/7f5486ad-0a56-407e-aaf1-5e4df1df3279/-/preview/1000x707/',
  'https://ucarecdn.com/1630352a-734c-47c8-aa42-bd2f9f465bd2/-/preview/671x1000/',
  'https://ucarecdn.com/ddee62ad-d283-4c91-afcd-49cd28660a34/-/preview/706x1000/',
  'https://ucarecdn.com/2ab75344-4ec2-4080-958a-f15ec18681f1/-/preview/1000x706/',
  'https://ucarecdn.com/66454347-50a8-4c38-8b0c-54d254278b55/-/preview/1000x1000/',
  'https://ucarecdn.com/5d7bba92-f05a-4294-a440-7f50d1b58b05/-/preview/500x500/',
  'https://ucarecdn.com/0a66a42b-8fb8-429e-907a-f679c6540cf3/-/preview/1000x1000/',
  'https://ucarecdn.com/9a601fae-cda6-4b5b-9533-17bb03aa3c2c/-/preview/1000x1000/',
];

const LogoGallery = () => {
  return (
    <div className='grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center'>
      {LogoUrls.map((logo, i) => (
        <Link key={i} href={logo} target='_blank' className='relative group'>
          <div className='border-2 border-purple-300 max-w-fit rounded-md group overflow-hidden'>
            <Image
              key={i}
              width={160}
              height={160}
              src={logo}
              alt='logo'
              className='w-40 h-40 object-cover group-hover:scale-110 transition-transform duration-500'
            />
          </div>

          <MoveUpRightIcon className='absolute top-2 right-2 text-white opacity-0 group-hover:opacity-100 bg-black p-2 rounded-md size-7' />
        </Link>
      ))}
    </div>
  );
};
