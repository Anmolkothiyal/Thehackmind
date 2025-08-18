'use client';

import { PhoneOutgoing, Sparkles, FilePenLine } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const details: { icon: JSX.Element; title: string; description: string }[] = [
  {
    icon: <img src='/hand-wave.png' alt='hand' width={27} />,
    title: 'Discovery call',
    description: 'Free discovery call to understand your needs.',
  },
  {
    icon: <FilePenLine color='white' />,
    title: 'Detailed proposal',
    description: "Based on our discussion, we'll send you a detailed proposal.",
  },
  {
    icon: <Sparkles color='white' />,
    title: 'Work begins',
    description:
      'If everything looks good, we can get started on your project!',
  },
];

const BookCall = () => {
  const divRef = useRef(null);
  const isInView = useInView(divRef, { once: true });

  return (
    <div
      ref={divRef}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      className='my-20 max-w-7xl mx-auto px-4'
    >
      <div className='rounded-3xl px-4 py-6 flex gap-5 bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white'>
        <PhoneOutgoing className='mt-2' color='white' />
        <div className='flex flex-col gap-2'>
          <p className='text-2xl sm:text-3xl font-medium'>
            Book your Free Discovery Call!
          </p>
          <p>
            Hop on a call with us and discuss if we are a good fit for your
            requirments.
          </p>
        </div>
      </div>

      <div className='flex flex-col 1000:flex-row justify-between gap-10 mt-[60px] px-2'>
        <p className='text-3xl 1000:w-[300px] font-medium'>
          What Awaits You When You Book a Call?
        </p>
        <div className='grow flex flex-col gap-10 md:gap-5 md:flex-row md:justify-between'>
          {details.map((d, i) => (
            <div key={i} className='w-full 1000:w-[200px] flex flex-col gap-2'>
              <div className='bg-black max-w-fit rounded-full p-2'>
                {d.icon}
              </div>
              <p className='font-medium text-2xl'>{d.title}</p>
              <p>{d.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookCall;
