import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards';
import { BriefcaseBusiness } from 'lucide-react';
import { projects } from '../_constants';

const Portfolio = () => {
  return (
    <div className='mt-20 flex flex-col gap-10'>
      <div className='w-[110px] self-center flex items-center justify-center gap-2 text-sm border rounded-full p-2 font-medium'>
        <BriefcaseBusiness className='size-4' />
        Portfolio
      </div>
      <div className='bg-gradient-to-r from-blue-600 to-purple-600'>
        <InfiniteMovingCards items={projects} speed='normal' />
      </div>
    </div>
  );
};

export default Portfolio;
