import React from 'react';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ScheduleCall = () => {
  return (
    <div className='mt-[120px] min-h-[500px] flex justify-center items-center text-white bg-gradient-to-r from-blue-600/80 to-purple-600/80 px-4 py-16'>
      <div className='max-w-4xl w-full'>
        <div className='flex flex-col gap-5 text-center mb-12'>
          <h2 className='text-3xl md:text-5xl font-bold leading-tight'>
            We make your online
            <br />
            presence shine
          </h2>
          <p className='text-md md:text-xl max-w-2xl mx-auto'>
            Book a call to see how we can help elevate your company&apos;s
            online presence to the next level.
          </p>
        </div>
        <div className='grid md:grid-cols-2 gap-8 max-w-3xl mx-auto'>
          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300'>
            <div className='flex flex-col gap-4'>
              <div className='bg-white/20 rounded-full w-12 h-12 flex items-center justify-center'>
                <Calendar className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold'>Schedule a Meeting</h3>
              <p className='text-white/80'>
                Choose a convenient time for a detailed discussion about your
                project.
              </p>
              <a
                href='https://calendly.com/anmolkothiyal2021'
                target='_blank'
                rel='noopener noreferrer'
                className='mt-4'
              >
                <Button name='book meeting' className='w-full bg-white text-blue-600 hover:bg-white/90 transition-colors duration-300 group'>
                  Book Meeting
                  <ArrowRight className='ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform' />
                </Button>
              </a>
            </div>
          </div>
          <div className='bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300'>
            <div className='flex flex-col gap-4'>
              <div className='bg-white/20 rounded-full w-12 h-12 flex items-center justify-center'>
                <Phone className='w-6 h-6' />
              </div>
              <h3 className='text-xl font-semibold'>Direct Call</h3>
              <p className='text-white/80'>
                Need immediate assistance? Reach out to us directly.
              </p>
              <a href='tel:+917452938683' className='mt-4'>
                <Button name='call now' className='w-full bg-white text-blue-600 hover:bg-white/90 transition-colors duration-300 group'>
                  Call Now
                  <Phone className='ml-2 w-4 h-4' />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleCall;
