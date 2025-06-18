
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -10% 0px', // Trigger slightly before element is fully visible
      threshold: 0.15 // Trigger when 15% of the element is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class when section enters viewport
          entry.target.classList.add('animate-in');
          
          // Add staggered animation to child elements
          const children = entry.target.querySelectorAll('.scroll-item');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-in');
            }, index * 100); // Stagger by 100ms
          });
          
          // Stop observing this element once animated
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all sections except the hero (which should be visible immediately)
    const sections = document.querySelectorAll('section:not(#home)');
    sections.forEach(section => {
      section.classList.add('scroll-section');
      observer.observe(section);
    });

    // Clean up observer on component unmount
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
