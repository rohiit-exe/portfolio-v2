import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Skills } from '@/components/sections/skills';
import { Performance } from '@/components/sections/performance';
import { Playground } from '@/components/sections/playground';
import { Philosophy } from '@/components/sections/philosophy';
import { Contact } from '@/components/sections/contact';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Performance />
      <Playground />
      <Philosophy />
      <Contact />
      <Footer />
    </>
  );
}
