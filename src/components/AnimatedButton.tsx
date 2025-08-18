'use client';

import { useState } from 'react';
import { ButtonProps } from './ui/button';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends ButtonProps {
  text: string;
  className?: string;
}

const AnimatedButton = ({ text, className }: AnimatedButtonProps) => {
  const [animation, setAnimation] = useState<boolean>(false);

  return (
    <Button
      className={cn(className, 'bg-[#5dd55d]')}
      onMouseEnter={() => setAnimation(true)}
      onMouseLeave={() => setAnimation(false)}
    >
      <p className={animation ? 'animated-button' : ''}>{text}</p>
    </Button>
  );
};

export default AnimatedButton;
