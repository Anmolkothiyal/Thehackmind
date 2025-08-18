import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';
import { ListItem } from './NavItems';

const services = [
  {
    title: 'Web Development',
    href: '/web-development',
  },
  {
    title: 'App Development',
    href: '/app-development',
  },
  {
    title: '3D Animation',
    href: '/3d-animation',
  },
  {
    title: 'Video Editing',
    href: '/video-editing',
  },
  {
    title: 'Logo Designing',
    href: '/logo-designing',
  },
];

interface CollapsibleServicesProps {
  open: boolean;
}

const CollapsibleServices = ({ open }: CollapsibleServicesProps) => {
  return (
    <Collapsible open={open} className='border ml-3 rounded-md shadow-sm'>
      <CollapsibleContent>
        <ul className='flex flex-col gap-4 w-[180px]'>
          {services.map((component, i) => (
            <ListItem key={i} title={component.title} href={component.href}>
              {component.title}
            </ListItem>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleServices;
