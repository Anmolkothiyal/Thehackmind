import { ArrowRight, Globe, TabletSmartphone } from 'lucide-react';
import Link from 'next/link';
import hand from '../../../public/hand.png';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Services = {
  icon: JSX.Element;
  title: string;
  description: string;
  href: string;
};

const services: Services[] = [
  {
    icon: <Globe />,
    title: 'Web Development',
    description:
      'We build fast, responsive websites that combine functionality with a clean design to elevate your online presence.',
    href: '/web-development',
  },
  {
    icon: <TabletSmartphone />,
    title: 'App Development',
    description:
      'Crafting secure, scalable apps for mobile and desktop, designed to connect with your audience on any platform.',
    href: '/app-development',
  },
  {
    icon: (
      <Image
        src='/service-icons/cube.png'
        height={35}
        width={35}
        alt='3D animation icon'
      />
    ),
    title: '3D Animation',
    description:
      'Bringing ideas to life with immersive 3D animations that captivate and engage your audience.',
    href: '/3d-animation',
  },
  {
    icon: (
      <Image
        src='/service-icons/video-editing.png'
        height={35}
        width={35}
        alt='Video editing icon'
      />
    ),
    title: 'Video Editing',
    description:
      'High-quality video editing that enhances your brand with polished visuals and impactful storytelling.',
    href: '/video-editing',
  },
  {
    icon: (
      <Image
        src='/service-icons/logo-design.png'
        height={35}
        width={35}
        alt='Logo design icon'
      />
    ),
    title: 'Logo Designing',
    description:
      'Creating unique logos that embody your brand’s identity, making a lasting impression.',
    href: '/logo-designing',
  },
  {
    icon: (
      <Image
        src='/service-icons/CMS.png'
        height={35}
        width={35}
        alt='CMS services icon'
      />
    ),
    title: 'CMS Services',
    description:
      'Effortless content management to elevate your brand and streamline your digital presence.',
    href: '/cms-services',
  },
];

const Services = () => {
  return (
    <main className='px-4 pb-10 mt-10'>
      <div className='flex flex-col items-center gap-10 w-full'>
        <div className='flex items-center gap-2 text-sm border rounded-full p-2 font-medium bg-gray-100'>
          <Image src={hand} alt='hand' height={13} width={13} />
          Our Services
        </div>
        <h2 className='text-center text-3xl tracking-tight font-extrabold sm:text-5xl md:text-6xl'>
          Here&apos;s What We Can Do For <br />
          <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
            Your Brand.
          </span>
        </h2>
        <p className='max-w-xl w-full text-center text-base sm:text-lg text-gray-600'>
          Our solutions are tailored to drive growth and maximize profitability,
          helping your business achieve impactful, measurable outcomes.
        </p>
      </div>

      <div className='flex mt-[65px] justify-center bg-gradient-to-r from-gray-100 to-gray-200 py-10 px-4 rounded-xl max-w-[1400px] mx-auto'>
        <div className='w-full max-w-7xl grid justify-items-center gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
          {services.map((service: Services, i) => (
            <Card
              key={i}
              className='flex flex-col justify-between shadow-md hover:shadow-xl transition-transform duration-300 bg-white rounded-lg overflow-hidden transform hover:scale-105'
            >
              <CardHeader className='flex items-center gap-4'>
                <div className='p-4 bg-gray-100 rounded-full'>{service.icon}</div>
                <CardTitle className='text-lg font-bold text-gray-800'>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-700 font-medium'>{service.description}</p>
              </CardContent>
              <CardFooter className='pt-4'>
                <Link
                  href={service.href}
                  className='flex items-center gap-2 text-purple-600 font-semibold transition-transform duration-200 ease-in-out group'
                >
                  Learn More
                  <ArrowRight className='size-4 group-hover:translate-x-1 transition-transform duration-200 ease-in-out' />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
