import { Button } from '@/components/ui/button';

export default function Work() {
  return (
    <div className='max-w-7xl mx-auto min-h-screen py-10 px-4'>
      <div className='flex flex-col gap-4 md:gap-0 md:flex-row justify-between md:items-end'>
        <div>
          <p className='text-gray-900 text-lg mb-2'>Our latest work</p>
          <p className='text-5xl font-medium flex flex-col gap-1'>
            Driving Online
            <p className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              Growth.
            </p>
          </p>
        </div>

        <p className='max-w-[520px] text-gray-900 text-lg'>
          Businesses of all sizes trust us with their digital needs. Check out
          some of our work and see if we are a good ft for you.
        </p>
      </div>

      <hr className='mt-10' />

      <div className='mt-5 flex flex-col lg:flex-row gap-7 lg:gap-10'>
        {/* buttons */}
        <div className='flex lg:flex-col gap-5'>
          <Button name='Web Design' className='schedule-call-btn bg-gradient-to-r from-blue-600 to-purple-600 text-white w-[170px] text-lg'>
            Web Design
          </Button>
          <Button name='E-Commerce' className='schedule-call-btn bg-gradient-to-r from-blue-600 to-purple-600 text-white w-[170px] text-lg'>
            E-Commerce
          </Button>
        </div>

        {/* display */}
        <div className='border-2 grow'>Display</div>
      </div>
    </div>
  );
}
