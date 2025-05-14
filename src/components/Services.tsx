
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Webcam } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, delay }) => (
  <Card className="animate-fade-in card-hover cursor-pointer" style={{ animationDelay: `${delay}ms` }}>
    <CardHeader>
      <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
        {icon}
      </div>
      <CardTitle className="text-2xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-muted-foreground text-base">
        {description}
      </CardDescription>
    </CardContent>
  </Card>
);

const Services: React.FC = () => {
  const services = [
    {
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces that prioritize user experience. I focus on clean design principles and responsive layouts that work across all devices.",
      icon: <Webcam className="h-8 w-8" />
    },
    {
      title: "Web Design & Development",
      description: "Building modern web applications with responsive design, interactive elements, and optimized performance. From concept to deployment, I handle the full development lifecycle.",
      icon: <Code className="h-8 w-8" />
    },
    {
      title: "Data Science & Engineering",
      description: "Leveraging data for insights and decision-making through analysis, visualization, and model building. I help transform raw data into meaningful business intelligence.",
      icon: <Database className="h-8 w-8" />
    }
  ];

  return (
    <section id="services" className="relative section-padding">
      <div className="shape-blob h-64 w-64 bottom-0 left-1/3 opacity-20"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title text-center">My Services</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Here's how I can contribute to your projects and teams
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
