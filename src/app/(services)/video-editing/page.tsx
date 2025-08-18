import { Film, Scissors, Layers, Eye, ArrowRight, Shield } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import WhyChooseUs from '../WhyChooseUs';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Video Editing',
};

const VideoEditingCards = [
  {
    icon: <Scissors className='size-10 text-[#87CEEB]' />,
    title: 'Professional Editing',
    description:
      'High-quality editing to bring your footage to life, with seamless transitions and precise cuts.',
  },
  {
    icon: <Layers className='size-10 text-[#87CEEB]' />,
    title: 'Layered Effects & Animation',
    description:
      'Add dynamic effects, animations, and graphics to enhance visual storytelling.',
  },
  {
    icon: <Eye className='size-10 text-[#87CEEB]' />,
    title: 'Color Grading & Correction',
    description:
      'Ensure visually appealing and consistent color schemes that match your brand and style.',
  },
  {
    icon: <Shield className='size-10 text-[#87CEEB]' />,
    title: 'Quality & Security',
    description:
      'Deliver top-notch quality while safeguarding your data and maintaining privacy.',
  },
];

export default function VideoEditing() {
  return (
    <>
      <div className='h-screen relative bg-black/60'>
        <Image
          src='/service/video-editing.jpg'
          width={500}
          height={500}
          alt='bg'
          className='w-full h-full object-cover absolute z-[-2]'
        />
        <main className='mx-auto absolute max-w-4xl w-full px-2 sm:px-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          <div className='flex text-center text-white flex-col items-center gap-2 text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl'>
            <Film className='w-16 h-16' />
            <h2 className='mt-5'>Crafting Stories through</h2>
            <h2 className='text-[#87CEEB]'>Exceptional Video Editing</h2>
            <p className='mt-3 text-base tracking-normal font-medium text-center sm:mt-5 sm:text-lg sm:max-w-xl md:text-xl'>
              High-quality video editing services designed to captivate and
              engage your audience.
            </p>

            <Link href='/contact' className='mt-2 sm:tracking-wide gap-2 bg-[#87CEEB] hover:bg-[#24627b] text-white px-4 py-3 rounded-md font-semibold text-lg transition-all transform hover:scale-105 flex items-center mx-auto'>
                Get Started With Video Editing Services
                <ArrowRight className='mt-1 hidden sm:block' />
            </Link>
          </div>
        </main>
      </div>

      <div className='max-w-7xl mx-auto '>
        <div className='mt-20 text-center'>
          <p className='text-2xl tracking-tight md:text-4xl'>What We Offer</p>
          <WhyChooseUs CardDetails={VideoEditingCards} />
        </div>

        {/* <p className='mt-20 text-center text-2xl tracking-tight md:text-4xl'>
          Recent Projects
        </p>

        <Projects /> */}
      </div>
    </>
  );
}

// const projects = [
//   {
//     bg: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80',
//     visitProject: '',
//     details: '',
//   },
//   {
//     bg: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80',
//     visitProject: '',
//     details: '',
//   },
//   {
//     bg: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&q=80',
//     visitProject: '',
//     details: '',
//   },
// ];

// const Projects = () => {
//   return (
//     <div className='grid grid-cols-1 sm:grid-cols-2 gap-10 mt-20 justify-items-center px-4'>
//       {projects.map((c, i) => (
//         <div key={i} className='relative group overflow-hidden rounded-lg'>
//           <div className='absolute inset-0 group-hover:bg-black/50 group-hover:z-10' />

//           <Image
//             src={c.bg}
//             width={550}
//             height={550}
//             alt='project-banner'
//             className='group-hover:scale-110 transition-transform duration-500'
//           />

//           <div className='absolute inset-0 flex justify-center flex-col gap-4 items-center opacity-0 group-hover:opacity-100 z-20 w-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-h-min'>
//             <Link href={c.visitProject} className='w-full'>
//               <Button name='visit Project' className='w-full bg-white text-black hover:bg-white/90'>
//                 Visit Project
//               </Button>
//             </Link>
//             <Link href={c.details} className='w-full'>
//               <Button name='details' className='w-full bg-white text-black hover:bg-white/90'>
//                 Details
//               </Button>
//             </Link>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
