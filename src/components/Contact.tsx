
import React from 'react';
import { Mail, Phone, Linkedin, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, title, value, href }) => (
  <div className="flex items-start gap-3 group">
    <div className="mt-1 p-2 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
      {icon}
    </div>
    <div>
      <h3 className="font-medium">{title}</h3>
      {href ? (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-muted-foreground">{value}</p>
      )}
    </div>
  </div>
);

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - in a real implementation this would send an email or save to a database
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="shape-blob h-80 w-80 -bottom-40 -right-20 opacity-40"></div>
      
      <div className="container mx-auto">
        <h2 className="section-title text-center">Get In Touch</h2>
        <p className="section-subtitle text-center max-w-3xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just to say hello
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              I'm currently open to new opportunities, collaborations, and conversations about technology. 
              Don't hesitate to reach out through any of the channels below.
            </p>
            
            <div className="space-y-6">
              <ContactItem 
                icon={<Mail className="h-5 w-5" />} 
                title="Email" 
                value="rakeshregala3@gmail.com" 
                href="mailto:rakeshregala3@gmail.com" 
              />
              
              <ContactItem 
                icon={<Phone className="h-5 w-5" />} 
                title="Phone" 
                value="+91 8260743146" 
                href="tel:+918260743146" 
              />
              
              <ContactItem 
                icon={<Linkedin className="h-5 w-5" />} 
                title="LinkedIn" 
                value="https://www.linkedin.com/in/rakesh-regala" 
                href="https://www.linkedin.com/in/rakesh-regala-13a8382b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
              />
              
              <ContactItem 
                icon={<Github className="h-5 w-5" />} 
                title="GitHub" 
                value="https://github.com/RakeshRegala" 
                href="https://github.com/RakeshRegala" 
              />
              
              <ContactItem 
                icon={<Instagram className="h-5 w-5" />} 
                title="Instagram" 
                value="@rakesh" 
                href="https://www.instagram.com/rakesh_comrade_/?__pwa=1" 
              />
            </div>
          </div>
          
          <div className="bg-card rounded-lg border p-6 shadow-sm animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" placeholder="How can I help you?" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message here..." 
                  className="min-h-32" 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
