
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Database, Globe, MessageSquare, ChevronLeft, ChevronRight, Link } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, technologies, icon }) => (
  <Card className="overflow-hidden flex flex-col h-full max-w-2xl mx-auto card-hover group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="relative h-40 md:h-48 overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <CardHeader className="pb-2 p-4 group-hover:bg-muted/20 transition-colors duration-300">
      <CardTitle className="flex items-center gap-2 text-lg group-hover:text-primary transition-colors duration-300">
        <span className="text-primary transform group-hover:scale-110 transition-transform duration-300">{icon}</span>
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow p-4 pt-0">
      <CardDescription className="text-muted-foreground text-sm mb-3 group-hover:text-foreground transition-colors duration-300">
        {description}
      </CardDescription>
    </CardContent>
    <CardFooter className="flex flex-wrap gap-1 p-4 pt-0">
      {technologies.map((tech, index) => (
        <Badge 
          key={index} 
          variant="outline" 
          className="bg-muted/30 text-xs transform hover:scale-105 hover:bg-primary/20 transition-all duration-200"
        >
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
      title: "MEDIAGRID-A Social webapp",
      description: "A responsive web application that allows users to sign up, log in, and upload media files (images/videos), which are then displayed in a dynamic grid layout. Built using Node.js, Express.js, Firebase, and EJS, the project focuses on secure user authentication, efficient file handling, and real-time media display. Ideal for digital portfolios or media galleries.",
      image: "/lovable-uploads/cae23af9-32db-481b-94b2-b15aaee4bcf2.png",
      technologies: ["Node.js", "Express.js", "Firebase Authentication", "Firebase Firestore", "Firebase Storage", "EJS", "Body-parser", "bcrypt", "Multer"],
      icon: <Globe className="h-4 w-4" />
    },
    {
      title: "Currency Converter",
      description: "A responsive currency converter web tool that provides real-time conversion rates between multiple currencies.",
      image: "https://ik.imagekit.io/jito8rw9a/Screenshot%202025-05-21%20124309.png",
      technologies: ["JavaScript", "Exchange Rate API", "HTML/CSS", "Express.JS", "Firebase"],
      icon: <Code className="h-4 w-4" />
    },
    {
      title: "Stock Info Webpage",
      description: "A web application that allows users to retrieve and display stock market data for a specified company using live data APIs.",
      image: "https://ik.imagekit.io/jito8rw9a/Screenshot%202025-05-21%20124016.png",
      technologies: ["HTML", "CSS", "JavaScript", "Stock Market API", "Express.JS", "Firebase"],
      icon: <Globe className="h-4 w-4" />
    },
    {
      title: "Telegram Bot – Personal Details Storage",
      description: "A Telegram bot designed to store and manage personal details of individuals securely within the Telegram chat interface.",
      image: "https://ik.imagekit.io/jito8rw9a/Screenshot%202025-05-21%20123146.png?updatedAt=1747810966724",
      technologies: ["JavaScript", "Telegram Bot API", "Firebase"],
      icon: <MessageSquare className="h-4 w-4" />
    },
    {
      title: "Telegram Bot – Weather Info",
      description: "A bot that returns real-time weather information for any given place using a weather API. Designed for quick, in-chat weather queries.",
      image: "https://ik.imagekit.io/jito8rw9a/Screenshot%202025-05-21%20123525.png",
      technologies: ["JavaScript", "Telegram Bot API", "OpenWeather API", "Firebase"],
      icon: <MessageSquare className="h-4 w-4" />
    },
    {
      title: "✨ URL Shortener",
      description: "A lightweight web app to create and manage short links.",
      image: "https://ik.imagekit.io/jito8rw9a/Screenshot%202025-06-18%20113724.png",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase Hosting", "Firebase Realtime Database", "Firebase CLI"],
      icon: <Link className="h-4 w-4" />
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
      <div className="shape-blob h-80 w-80 bottom-0 right-1/4 opacity-30 animate-pulse"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title text-center animate-fade-in">Projects</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto animate-fade-in">
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
              className="rounded-full hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            {/* Project Indicators */}
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentProject ? 'bg-primary scale-110' : 'bg-muted hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full hover:scale-110 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Project Counter */}
          <div className="text-center mt-4 text-muted-foreground animate-fade-in">
            {currentProject + 1} of {projects.length}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
