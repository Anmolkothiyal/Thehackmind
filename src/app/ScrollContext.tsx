'use client';

import { createContext, useState, useContext, useEffect } from 'react';

type ScrollContext = {
  scroll: number;
};

export const ScrollContext = createContext<ScrollContext | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const [scroll, setScroll] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== undefined) {
      const handleScroll = () => {
        setScroll(window.scrollY);
      };

      document.querySelector('body')?.addEventListener('scroll', handleScroll);

      return () => {
        document
          .querySelector('body')
          ?.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ scroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const scroll = useContext(ScrollContext);
  if (!scroll) {
    throw Error('Error  in scroll provider');
  }
  return scroll.scroll;
};
