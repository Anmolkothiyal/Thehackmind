import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import { ScrollProvider } from './ScrollContext';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/core/Navbar';

export const metadata: Metadata = {
  title: 'thehackmind',
  description: 'Learn more about TheHackMind, our mission, expertise, and approach.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='relative antialiased lora-normal'>
        <Navbar />
        <ScrollProvider>{children}</ScrollProvider>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
