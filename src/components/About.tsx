
import React from 'react';
import { Briefcase, Code, Database } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="relative section-padding">
      {/* Decorative elements */}
      <div className="shape-blob h-64 w-64 -top-20 right-1/4 opacity-30"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title text-center scroll-item">About Me</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto scroll-item">
          A brief introduction about who I am and my academic journey
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="space-y-6 scroll-item">
            <h3 className="text-2xl font-semibold">Education & Background</h3>
            <p className="text-muted-foreground">
              Currently pursuing a B.Tech in Computer Science and Engineering at Vishnu Institute of Technology, 
              Bhimavaram. My academic journey has been focused on building a strong foundation in computer science 
              fundamentals while exploring emerging technologies through hands-on projects and internships.
            </p>
            
            <div className="bg-card shadow-md rounded-lg p-6 border">
              <h4 className="font-medium">B.Tech in Computer Science and Engineering</h4>
              <p className="text-muted-foreground">Vishnu Institute of Technology, Bhimavaram</p>
              <p className="text-sm text-muted-foreground">2023 - 2027</p>
            </div>

            <div className="bg-card shadow-md rounded-lg p-6 border">
              <h4 className="font-medium">Sri Chaitanya Junior college</h4>
              <p className="text-muted-foreground">Visakhapatnam</p>
              <p className="text-sm text-muted-foreground">2021 - 2023</p>
            </div>

            <div className="bg-card shadow-md rounded-lg p-6 border">
              <h4 className="font-medium">St.Ann's Convent School</h4>
              <p className="text-muted-foreground">Pathapatnam</p>
              <p className="text-sm text-muted-foreground">2021</p>
            </div>
            
            <p className="text-muted-foreground">
              Beyond academics, I'm passionate about solving real-world problems through technology. 
              I believe in continuous learning and staying updated with the latest developments in 
              the tech industry. My goal is to contribute to innovative solutions and eventually work with 
              leading tech companies like Amazon and Google.
            </p>
          </div>
          
          <div className="space-y-8 scroll-item">
            <h3 className="text-2xl font-semibold">My Approach</h3>
            
            <div className="grid gap-6">
              <div className="flex gap-4 items-start group">
                <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Code className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Full-Stack Development</h4>
                  <p className="text-muted-foreground">
                    I approach development with a focus on both frontend and backend, creating cohesive and efficient applications.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Database className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Data-Driven Solutions</h4>
                  <p className="text-muted-foreground">
                    I leverage data science and engineering principles to build intelligent systems that deliver insights.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start group">
                <div className="bg-primary/10 p-3 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium">Continuous Learning</h4>
                  <p className="text-muted-foreground">
                    I'm committed to growing my skills through internships, projects, and staying current with industry trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
