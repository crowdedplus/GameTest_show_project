import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TeamSection from '../components/TeamSection';
import ProjectSection from '../components/ProjectSection';
import DemoSection from '../components/DemoSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    const el = document.querySelectorAll('.reveal');
    el.forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <HeroSection />
      <TeamSection />
      <AboutSection />
      <ProjectSection />
      <DemoSection />
      <ContactSection />
    </main>
  );
}
