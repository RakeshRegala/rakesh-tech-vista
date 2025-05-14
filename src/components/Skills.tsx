
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, delay }) => (
  <Card className="animate-fade-in card-hover" style={{ animationDelay: `${delay}ms` }}>
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index} 
            className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </CardContent>
  </Card>
);

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "C","C++", "JavaScript", "TypeScript"]
    },
    {
      title: "Frontend Development",
      skills: ["HTML/CSS", "React", "Next.js", "Tailwind CSS", ]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Django", "Flask", "RESTful APIs"]
    },
    {
      title: "Mobile Development",
      skills: ["Android", "Kotlin"]
    },
    {
      title: "Data Science & Engineering",
      skills: ["Pandas", "NumPy", "TensorFlow", "SQL", "ETL", "Big Data"]
    },
    {
      title: "Cloud Services",
      skills: ["AWS", "Google Cloud", "Docker", "Kubernetes"]
    },
    {
      title: "Embedded Systems",
      skills: ["Microcontrollers", "IoT", "Raspberry Pi", "Arduino"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Jupyter", "Linux"]
    }
  ];

  return (
    <section id="skills" className="relative section-padding">
      <div className="shape-blob h-80 w-80 top-1/3 right-0 opacity-30"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title text-center">Technical Skills</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          My expertise across various technologies and domains
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
