
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  delay: number;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, period, description, delay }) => (
  <div className="mb-12 relative animate-fade-in" style={{ animationDelay: `${delay}ms` }}>
    <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-secondary -translate-x-[6px]"></div>
    <Card>
      <CardHeader className="pb-4">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-md font-medium">{company}</CardDescription>
        <CardDescription className="text-sm">{period}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  </div>
);

const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "SkillDzire",
      period: "2023",
      description: "Worked on data analysis and visualization projects, applying machine learning algorithms to extract meaningful insights from datasets. Developed skills in Python, pandas, and data preprocessing techniques.",
    },
    {
      title: "Data Engineering Intern",
      company: "AICTE–AWS Internship Program",
      period: "2023",
      description: "Collaborated in a team to design and implement data pipelines on AWS. Gained hands-on experience with cloud services, data transformation, and ETL processes.",
    },
    {
      title: "Android Developer Virtual Intern",
      company: "Google",
      period: "2022",
      description: "Participated in a virtual internship program focused on Android app development. Built mobile applications using Kotlin and learned modern Android development practices and architecture patterns.",
    },
    {
      title: "Embedded Systems Intern",
      company: "Emertxe",
      period: "2022",
      description: "Worked on embedded systems projects, focusing on hardware-software integration. Developed skills in microcontroller programming, IoT fundamentals, and real-time systems.",
    }
  ];

  return (
    <section id="experience" className="relative section-padding">
      <div className="shape-blob h-64 w-64 -bottom-20 -left-20 opacity-40"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title text-center">Experience</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          My internship experiences and professional development journey
        </p>
        
        <div className="relative mt-20 pl-8 border-l border-border/50 max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              delay={index * 200}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
