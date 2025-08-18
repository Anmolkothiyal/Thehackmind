import Hero from '@/app/sections/Hero';
import Services from './sections/Services';
import Section from '@/components/core/Section';
import Contact from '@/components/Contact';
import BookCall from '@/app/sections/BookCall';
import ProcessSection from './sections/Steps';
import ScheduleCall from '@/app/sections/ScheduleCall';
import Portfolio from './sections/Portfolio';

export default function Home() {
  return (
    <>
      <section className='hero flex flex-col h-[100vh] relative'>
        <div className='grow'>
          <Hero />
        </div>
      </section>
      <Section>
        <Services />
      </Section>
      <section>
        <ProcessSection />
      </section>

      <Portfolio />

      <Contact />

      <BookCall />

      <ScheduleCall />
    </>
  );
}
