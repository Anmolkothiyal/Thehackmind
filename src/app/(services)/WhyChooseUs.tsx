import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

interface WhyChooseUsProps {
  CardDetails: { icon: JSX.Element; title: string; description: string }[];
}

const WhyChooseUs = ({ CardDetails }: WhyChooseUsProps) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-20 sm:gap-10 mt-20 justify-items-center px-2'>
      {CardDetails.map((d, i) => (
        <Card
          key={i}
          className='w-full md:w-80 lg:w-96 shadow-md hover:shadow-xl border-0'
        >
          <CardHeader>
            <div className='flex flex-col gap-5'>
              {d.icon}
              <CardTitle>{d.title}</CardTitle>
              <CardDescription className='tracking-wide'>
                {d.description}
              </CardDescription>
            </div>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
};

export default WhyChooseUs;
