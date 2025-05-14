
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return <section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Decorative blobs */}
      <div className="shape-blob h-64 w-64 top-1/4 -left-20"></div>
      <div className="shape-blob h-80 w-80 bottom-1/4 -right-20 opacity-50"></div>
      
      <div className="container mx-auto">
        <div className="flex flex-col items-center lg:items-start gap-8">
          {/* Profile picture moved up */}
          <div className="flex justify-center lg:justify-start animate-fade-in mb-6 lg:mb-8" style={{
            animationDelay: '0.4s'
          }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-70 blur-md"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background relative">
                {/* Updated image with the newly uploaded image */}
                <img src="/lovable-uploads/91b64fa3-2744-4354-a4a5-b09fe3295815.png" alt="Regala Rakesh" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in text-center lg:text-left" style={{
            animationDelay: '0.2s'
          }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hello, I'm <span className="gradient-text">Regala Rakesh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground/80">
              Computer Science Engineering Student
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">Passionate about full-stack web development, data science, and backend technologies. Aspiring to contribute to top tech companies creating innovative solutions to real-world problems.</p>
          </div>
          
          {/* Buttons positioned below text content and centered */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4 animate-fade-in" style={{
            animationDelay: '0.6s'
          }}>
            <Button  asChild size="lg">
              <a href="#experience">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild size="lg">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};

export default Hero;
