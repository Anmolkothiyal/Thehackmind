'use client';

import {
  ArrowRight,
  Camera,
  Eye,
  Layers,
  MoveUpRightIcon,
  Settings,
  Sparkles,
  Stars,
  Wand2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import WhyChooseUs from '../WhyChooseUs';

const AnimatedIcon = ({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) => (
  <motion.div
    initial={{ scale: 0, rotate: -180 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={{
      type: 'spring',
      stiffness: 260,
      damping: 20,
      delay: delay,
    }}
    className='inline-block mx-1'
  >
    {children}
  </motion.div>
);

const cardDetails = [
  {
    icon: <Camera className='size-10 text-[#fb68d8]' />,
    title: 'Character Animation',
    description:
      'Bringing characters to life with expressive animations that resonate with audiences.',
  },
  {
    icon: <Eye className='size-10 text-[#fb68d8]' />,
    title: 'Visual Effects (VFX)',
    description:
      'Stunning VFX that enhance storytelling and immerse viewers in your project.',
  },
  {
    icon: <Layers className='size-10 text-[#fb68d8]' />,
    title: '3D Modeling',
    description:
      'Detailed and realistic 3D models that lay the foundation for captivating animations.',
  },
  {
    icon: <Settings className='size-10 text-[#fb68d8]' />,
    title: 'Rendering & Compositing',
    description:
      'High-quality rendering and compositing for flawless final visuals.',
  },
];

export default function AnimationServices() {
  return (
    <>
      <div className='h-[100vh] relative bg-black/80'>
        <Image
          src='/service/3D.jpg'
          width={500}
          height={500}
          alt='bg'
          className='w-full h-full object-cover absolute z-[-2]'
        />
        <main className='w-full max-w-4xl mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex text-center flex-col items-center gap-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl'>
            <h2 className='text-white flex items-center'>
              Bringing Stories to Life
              <div className='hidden sm:block'>
                <AnimatedIcon delay={0.2}>
                  <Sparkles className='h-8 w-8 text-[#fb68d8]' />
                </AnimatedIcon>
                <AnimatedIcon delay={0.4}>
                  <Stars className='h-8 w-8 text-[#fb68d8]' />
                </AnimatedIcon>
                <AnimatedIcon delay={0.6}>
                  <Wand2 className='h-8 w-8 text-[#fb68d8]' />
                </AnimatedIcon>
              </div>
            </h2>
            <motion.h2
              className='text-[#fb68d8]'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              3D Animation
            </motion.h2>
            <motion.p
              className='mt-3 text-base tracking-normal font-medium text-center text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl md:text-xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              High-quality 3D animation services to captivate and engage your
              audience.
            </motion.p>

            <Link href='/contact' className='mt-2 sm:tracking-wide gap-2 bg-[#fb68d8] hover:bg-[#92307b] text-white px-4 py-3 rounded-md font-semibold text-lg transition-all transform hover:scale-105 flex items-center mx-auto'>
                Get Started With 3D Animation Services
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
          Gallery
        </p>

        <LogoGallery />
      </div>
    </>
  );
}

const urls = [
  'https://ucarecdn.com/22172a71-9aeb-4c3a-8ef3-81a27a42b848/-/preview/1000x562/',
  'https://ucarecdn.com/76944e6a-eea3-4e10-8c0a-2a6376e88c52/-/preview/1000x562/',
  'https://ucarecdn.com/4d33eea1-76bc-4fbc-ad56-a29dc43d85de/-/preview/1000x562/',
  'https://ucarecdn.com/18463e0e-da91-42b2-8535-6ed2d3bba43e/-/preview/1000x562/',
  'https://ucarecdn.com/45395149-37ba-4bc7-8779-d78dd846fc18/-/preview/640x480/',
  'https://ucarecdn.com/36d899bf-c730-485d-be89-d7807497d9ba/-/preview/640x480/',
  'https://ucarecdn.com/cdde71ca-3276-486c-9659-23a3b2dd015f/-/preview/1000x562/',
  'https://ucarecdn.com/2a6617cb-d579-4d97-9ecb-52c8b8fa5f54/-/preview/640x480/',
  'https://ucarecdn.com/e391a547-8022-4a52-adee-7f1b756c72c1/-/preview/640x480/',
  'https://ucarecdn.com/ffe0e144-4deb-435f-be6a-a6ceeebfaf5f/-/preview/1000x562/',
  'https://ucarecdn.com/b49d324f-45c8-43fa-ba33-59f252cd8566/-/preview/1000x562/',
  'https://ucarecdn.com/775fb13e-59dc-4f5c-90f9-b79e59ac00a6/-/preview/640x480/',
  'https://ucarecdn.com/9330e40f-5026-477d-98ad-45df55c9101b/-/preview/1000x562/',
];

const LogoGallery = () => {
  return (
    <div className='mt-20 grid gap-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center'>
      {urls.map((u, i) => (
        <Link key={i} href={u} target='_blank' className='relative group'>
          <div className='border-2 border-purple-300 max-w-fit rounded-md group overflow-hidden'>
            <Image
              width={200}
              height={180}
              alt=''
              key={i}
              src={u}
              className='w-[200px] h-[180px] object-cover group-hover:scale-110 transition-transform duration-500'
            />
          </div>

          <MoveUpRightIcon className='absolute top-2 right-2 text-white opacity-0 group-hover:opacity-100 bg-black p-2 rounded-md size-7' />
        </Link>
      ))}
    </div>
  );
};
