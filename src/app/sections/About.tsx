import React from 'react';
import { BookOpenCheck } from 'lucide-react';
import Link from 'next/link';

const About = () => {
  const services = [
    'Web Development',
    'App Development',
    '3D Animation',
    'Video Editing',
    'Logo Design',
  ];

  return (
    <section className='py-20 px-4'>
      <div>
        {/* Header Badge */}
        <div className='flex justify-center animate-fade-in'>
          <div className='flex items-center gap-2 text-sm border rounded-full px-4 py-2  font-medium'>
            <BookOpenCheck size={16} />
            <Link href={'/about'}>
              <span>About Us</span>
            </Link>
          </div>
        </div>

        {/* Main Title */}
        <h2 className='text-center mt-8 text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transform transition-all duration-500 hover:scale-105'>
          What Sets Us Apart
        </h2>

        {/* Description */}
        <div className='mt-8 space-y-6 max-w-7xl rounded-xl mx-auto py-10 px-4 bg-gradient-to-l from-gray-200 to-gray-300'>
          <p className='text-lg text-gray-800 leading-relaxed'>
            Welcome to thehackmind, where passion meets purpose! We&apos;re a
            dynamic team of skilled professionals, united by our shared
            commitment to crafting exceptional digital solutions.
          </p>

          {/* Services Grid */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
            {services.map((service, index) => (
              <div
                key={index}
                className='p-4 rounded-lg bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1'
              >
                <h3 className='font-semibold text-gray-800'>{service}</h3>
              </div>
            ))}
          </div>

          <p className='text-lg text-gray-800 leading-relaxed'>
            While we&apos;re just starting out, each member of our team brings a
            wealth of knowledge, creativity, and expertise. We believe that
            every project, no matter the scale, deserves innovative ideas and
            meticulous execution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
