
import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold gradient-text">Regala Rakesh</h3>
            <p className="text-muted-foreground mt-2">Computer Science Engineering Student</p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com/rakesh-regala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/RakeshRegala" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rakesh-regala-13a8382b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Regala Rakesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
