import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Globe, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, technologies, icon }) => (
  <Card className="overflow-hidden flex flex-col h-full max-w-2xl mx-auto">
    <div className="relative h-40 md:h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <CardHeader className="pb-2 p-4">
      <CardTitle className="flex items-center gap-2 text-lg">
        <span className="text-primary">{icon}</span>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow p-4 pt-0">
      <CardDescription className="text-muted-foreground text-sm mb-3">
        {description}
      </CardDescription>
    </CardContent>
    <CardFooter className="flex flex-wrap gap-1 p-4 pt-0">
      {technologies.map((tech, index) => (
        <Badge key={index} variant="outline" className="bg-muted/30 text-xs">
          {tech}
        </Badge>
      ))}
    </CardFooter>
  </Card>
);

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: "Currency Converter",
      description: "A responsive currency converter web tool that provides real-time conversion rates between multiple currencies.",
      image: "https://ik.imagekit.io/jito8rw9a/Screenshot%202025-05-21%20124309.png",
      technologies: ["JavaScript", "Exchange Rate API", "HTML/CSS", "Express.JS", "Firebase"],
      icon: <Code className="h-5 w-5" />
    },
    {
      title: "Stock Info Webpage",
      description: "A web application that allows users to retrieve and display stock market data for a specified company using live data APIs.",
      image: "https://ik.imagekit.io/jito8rw9a/Screenshot%202025-05-21%20124016.png",
      technologies: ["HTML", "CSS", "JavaScript", "Stock Market API", "Express.JS", "Firebase"],
      icon: <Globe className="h-5 w-5" />
    },
    {
      title: "Telegram Bot – Personal Details Storage",
      description: "A Telegram bot designed to store and manage personal details of individuals securely within the Telegram chat interface.",
      image: "https://ik.imagekit.io/jito8rw9a/Screenshot%202025-05-21%20123146.png?updatedAt=1747810966724",
      technologies: ["JavaScript", "Telegram Bot API", "Firebase"],
      icon: <MessageSquare className="h-5 w-5" />
    },
    {
      title: "Telegram Bot – Weather Info",
      description: "A bot that returns real-time weather information for any given place using a weather API. Designed for quick, in-chat weather queries.",
      image: "https://ik.imagekit.io/jito8rw9a/Screenshot%202025-05-21%20123525.png",
      technologies: ["JavaScript", "Telegram Bot API", "OpenWeather API", "Firebase"],
      icon: <MessageSquare className="h-5 w-5" />
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="relative section-padding">
      <div className="shape-blob h-80 w-80 bottom-0 right-1/4 opacity-30"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title text-center">Projects</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          A showcase of my technical projects and applications
        </p>
        
        <div className="relative mt-12">
          {/* Project Display */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    icon={project.icon}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {/* Project Indicators */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentProject ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4 text-muted-foreground">
            {currentProject + 1} of {projects.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
