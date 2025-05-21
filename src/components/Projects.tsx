
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, MessageSquare } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  delay: number;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, technologies, delay, icon }) => (
  <Card className="animate-fade-in card-hover overflow-hidden flex flex-col h-full" style={{ animationDelay: `${delay}ms` }}>
    <div className="relative h-48 md:h-56 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    <CardHeader className="pb-2">
      <CardTitle className="flex items-center gap-2 text-xl">
        <span className="text-primary">{icon}</span>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <CardDescription className="text-muted-foreground text-base mb-4">
        {description}
      </CardDescription>
    </CardContent>
    <CardFooter className="flex flex-wrap gap-2">
      {technologies.map((tech, index) => (
        <Badge key={index} variant="outline" className="bg-muted/30">
          {tech}
        </Badge>
      ))}
    </CardFooter>
  </Card>
);

const Projects: React.FC = () => {
  const projects = [
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
    },
    {
      title: "Stock Info Webpage",
      description: "A web application that allows users to retrieve and display stock market data for a specified company using live data APIs.",
      image: "https://ik.imagekit.io/jito8rw9a/Screenshot%202025-05-21%20124016.png",
      technologies: ["HTML", "CSS", "JavaScript", "Stock Market API", "Express.JS", "Firebase"],
      icon: <Globe className="h-5 w-5" />
    },
    {
      title: "Currency Converter",
      description: "A responsive currency converter web tool that provides real-time conversion rates between multiple currencies.",
      image: "https://ik.imagekit.io/jito8rw9a/Screenshot%202025-05-21%20124309.png",
      technologies: ["JavaScript", "Exchange Rate API", "HTML/CSS", "Express.JS", "Firebase"],
      icon: <Code className="h-5 w-5" />
    }
  ];

  return (
    <section id="projects" className="relative section-padding">
      <div className="shape-blob h-80 w-80 bottom-0 right-1/4 opacity-30"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title text-center">Projects</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          A showcase of my technical projects and applications
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              icon={project.icon}
              delay={index * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
