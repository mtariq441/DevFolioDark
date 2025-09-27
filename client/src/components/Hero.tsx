import { Button } from '@/components/ui/button';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const handleViewProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    console.log('View Projects clicked');
  };

  const handleContactMe = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    console.log('Contact Me clicked');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-lg text-muted-foreground mb-4" data-testid="text-greeting">
            Hi, I'm
          </p>
          
          {/* Name with gradient effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6" data-testid="text-name">
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Muhammad Tariq
            </span>
          </h1>
          
          {/* Role */}
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8" data-testid="text-role">
            MERN Stack Developer
          </h2>
          
          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed" data-testid="text-description">
            I build exceptional digital experiences with modern web technologies. 
            Passionate about creating scalable, user-friendly applications using React, Node.js, and MongoDB.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              onClick={handleViewProjects}
              data-testid="button-view-projects"
              className="text-base px-8 py-3 h-auto"
            >
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleContactMe}
              data-testid="button-contact-me"
              className="text-base px-8 py-3 h-auto backdrop-blur-sm"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;