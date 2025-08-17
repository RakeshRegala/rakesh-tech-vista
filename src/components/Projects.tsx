
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, MessageSquare, Link } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, image, technologies, icon }) => (
  <Card className="overflow-hidden flex flex-col h-full min-w-[320px] md:min-w-[400px] max-w-[450px] mx-auto card-hover group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl flex-shrink-0">
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
  const projects = [
    {
      title: "🎮 Tic Tac Toe",
      description: "A fun and interactive two-player Tic Tac Toe game with both frontend and backend integration. Players take turns placing X's and O's (each styled with different colors), and the winner is announced with a big glowing animated result message. The game also supports a restart option for replayability. On the backend, it's powered by Node.js and Express, with Firebase used for database connectivity and authentication (via service account).",
      image: "/lovable-uploads/tic-tac-toe.png",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "Firebase", "Git", "GitHub"],
      icon: <Code className="h-4 w-4" />
    },
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

  return (
    <section id="projects" className="relative section-padding">
      <div className="shape-blob h-80 w-80 bottom-0 right-1/4 opacity-30 animate-pulse"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title text-center animate-fade-in">Projects</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto animate-fade-in">
          A showcase of my technical projects and applications
        </p>
        
        <div className="relative mt-12">
          {/* Horizontal Scrollable Projects Container */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 pb-4 px-4">
              {projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  icon={project.icon}
                />
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-6 text-muted-foreground animate-fade-in">
            <p className="text-sm">← Scroll horizontally to view all projects →</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
