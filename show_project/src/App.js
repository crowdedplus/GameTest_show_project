import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ProjectSection from './components/ProjectSection';
import DemoSection from './components/DemoSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <ProjectSection />
        <DemoSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
