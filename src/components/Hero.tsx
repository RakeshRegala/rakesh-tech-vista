
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center section-padding overflow-hidden">
      {/* Decorative blobs */}
      <div className="shape-blob h-64 w-64 top-1/4 -left-20"></div>
      <div className="shape-blob h-80 w-80 bottom-1/4 -right-20 opacity-50"></div>
      
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 space-y-6 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Hello, I'm <span className="gradient-text">Regala Rakesh</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-foreground/80">
              Computer Science Engineering Student
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about full-stack web development, data science, and backend technologies. 
              Aspiring to contribute to top tech companies like Amazon and Google, creating 
              innovative solutions to real-world problems.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild size="lg">
                <a href="#work">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-2 flex justify-center lg:justify-end animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-70 blur-md"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background relative">
                {/* Replace with actual photo of Rakesh */}
                <img 
                  src="/placeholder.svg" 
                  alt="Regala Rakesh" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
