'use client';
import { useState, useRef, useEffect } from 'react';

const steps = [
  {
    title: 'Meeting & Strategy',
    description:
      "To better understand your project's vision and objectives, we arrange a meeting with your team...",
  },
  {
    title: 'Research',
    description:
      'To get a good overview of your business, we will send you a comprehensive questionnaire...',
  },
  {
    title: 'Web Design',
    description:
      'Before we build your website, we will create a prototype for you to review...',
  },
  {
    title: 'Development',
    description:
      'When developing websites, we adhere to best practices and industry standards...',
  },
  {
    title: 'Launch',
    description:
      'We will schedule a session to train your team on using your new website...',
  },
  {
    title: 'Support & Maintenance',
    description:
      'We can provide maintenance and ongoing support for your new website...',
  },
];

const ProcessSection = () => {
  const [activeSteps, setActiveSteps] = useState(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(
            entry.target as HTMLDivElement
          );
          if (entry.isIntersecting) {
            setActiveSteps((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.5 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className='py-16 px-4 flex flex-col items-center bg-gray-50'>
      <h2 className='block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-4xl text-transparent pb-5'>
        Our Project Process
      </h2>

      <div className='relative w-full max-w-4xl'>
        {/* Central Line */}
        <div className='absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-r from-blue-600 to-purple-600 h-full'></div>

        {steps.map((step, index) => (
          <div
            key={index}
            ref={(el) => {
              sectionRefs.current[index] = el;
            }}
            className={`flex items-center w-full mb-12 transition-all duration-700 ease-in-out ${
              activeSteps.has(index)
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            } ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}
          >
            {/* Step Marker */}
            <div
              className='w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-2 border-white absolute'
              style={{ left: '50%', transform: 'translate(-50%, 0)' }}
            ></div>

            {/* Step Content with Space Between Line and Card */}
            <div
              className={`w-1/2 p-6 rounded-lg shadow-md bg-white ${
                index % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'
              }`}
            >
              <h3 className='text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600'>
                {step.title}
              </h3>
              <p className='text-gray-600 mt-2'>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSection;
