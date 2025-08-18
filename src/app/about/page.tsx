import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Users, Zap } from 'lucide-react';
import Image from 'next/image';

const keyFeatures: { icon: JSX.Element; title: string; description: string }[] =
  [
    {
      icon: <Code className='h-12 w-12 mb-4 text-primary' />,
      title: 'Cutting-edge Tech',
      description:
        'We use the latest technologies to build robust and scalable solutions.',
    },
    {
      icon: <Users className='h-12 w-12 mb-4 text-primary' />,
      title: 'Expert Team',
      description:
        'Our team of skilled professionals brings years of industry experience.',
    },
    {
      icon: <Zap className='h-12 w-12 mb-4 text-primary' />,
      title: 'Fast Delivery',
      description:
        'We pride ourselves on efficient project management and timely delivery.',
    },
  ];

export default function About() {
  return (
    <main className='max-w-7xl mx-auto py-12 md:py-20 bg-background mt-10 sm:mt-0 px-7'>
      <div className='container px-4 md:px-6'>
        <h2 className='text-3xl font-bold tracking-tight sm:text-5xl text-center mb-20'>
          About{' '}
          <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            HackMind
          </span>
        </h2>

        <div className='flex flex-col gap-20'>
          <div className='flex flex-col md:flex-row justify-between md:gap-10 items-center mb-12'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
              <h3 className='text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Our Mission
              </h3>
              <p className='text-muted-foreground mb-4 text-lg'>
                At TheHackMind, we&apos;re on a mission to transform businesses
                through innovative digital solutions. We believe in harnessing
                the power of technology to drive growth and efficiency for our
                clients.
              </p>
            </div>
            <div className='md:w-1/2 md:flex justify-end'>
              <img
                src='/aboutPage/about-mission.jpg'
                alt='DigiSolutions Team'
                width={500}
                height={400}
                className='rounded-lg object-cover'
              />
            </div>
          </div>

          <div className='flex flex-col md:flex-row-reverse items-center md:gap-10 justify-between mb-12'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
              <h3 className='text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Our Expertise
              </h3>
              <p className='text-muted-foreground mb-4 text-lg'>
                With experience in web development, mobile apps, and CMS
                solutions, our team of experts is equipped to handle projects of
                any scale. We pride ourselves on staying ahead of the curve in
                the ever-evolving tech landscape.
              </p>
            </div>
            <div className='md:w-1/2'>
              <img
                src='/aboutPage/about-expertise.png'
                alt='DigiSolutions Team'
                width={500}
                height={400}
                className='rounded-lg object-cover'
              />
            </div>
          </div>

          <div className='flex flex-col md:flex-row md:gap-10 items-center justify-between mb-12'>
            <div className='md:w-1/2 mb-8 md:mb-0'>
              <h3 className='text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Our Approach
              </h3>
              <p className='text-muted-foreground mb-4 text-lg'>
                We believe in a collaborative approach, working closely with our
                clients to understand their unique needs and deliver tailored
                solutions. Our agile methodology ensures flexibility and
                efficiency throughout the development process.
              </p>
            </div>
            <div className='md:w-1/2 md:flex justify-end'>
              <Image
                src='/aboutPage/about-approach.jpg'
                alt='DigiSolutions Team'
                width={500}
                height={400}
                className='rounded-lg object-cover'
              />
            </div>
          </div>
        </div>

        {/* Key features */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-20'>
          {keyFeatures.map((k, i) => (
            <Card key={i} className='shadow-md hover:shadow-xl'>
              <CardContent className='flex flex-col items-center text-center p-6'>
                {k.icon}
                <h4 className='text-xl font-semibold mb-2'>{k.title}</h4>
                <p className='text-muted-foreground'>{k.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
