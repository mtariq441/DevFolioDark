import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Sparkles, Code, Zap } from 'lucide-react';

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background with multiple gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-violet-500/5 to-blue-600/5" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-emerald-500/3 to-primary/8" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{animationDelay: '0s'}} />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-500/40 rounded-full animate-ping" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-1/3 left-1/5 w-3 h-3 bg-violet-500/20 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-emerald-500/30 rounded-full animate-ping" style={{animationDelay: '0.5s'}} />
        <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-primary/20 rounded-full animate-pulse" style={{animationDelay: '1.5s'}} />
      </div>
      
      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-20 left-10 w-6 h-6 text-primary/10 animate-float" style={{animationDelay: '0s'}} />
        <Sparkles className="absolute top-32 right-16 w-5 h-5 text-violet-500/15 animate-float" style={{animationDelay: '1s'}} />
        <Zap className="absolute bottom-32 left-20 w-4 h-4 text-blue-500/10 animate-float" style={{animationDelay: '2s'}} />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Greeting with animation */}
          <p className="text-lg text-muted-foreground mb-4 animate-fade-in-up" data-testid="text-greeting" style={{animationDelay: '0.2s'}}>
            <span className="inline-flex items-center gap-2">
              <span>👋</span>
              <span>Hi, I'm</span>
            </span>
          </p>
          
          {/* Name with enhanced gradient effect */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" data-testid="text-name" style={{animationDelay: '0.4s'}}>
            <span className="bg-gradient-to-r from-primary via-violet-600 to-blue-600 bg-clip-text text-transparent animate-gradient-x bg-300% hover:scale-105 transition-transform duration-300 inline-block">
              Muhammad Tariq
            </span>
          </h1>
          
          {/* Role with premium styling */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 animate-fade-in-up" data-testid="text-role" style={{animationDelay: '0.6s'}}>
            <span className="relative">
              <span className="text-foreground relative z-10">MERN Stack Developer</span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 blur-sm" />
            </span>
          </h2>
          
          {/* Description with enhanced styling */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up" data-testid="text-description" style={{animationDelay: '0.8s'}}>
            <span className="relative">
              I build exceptional digital experiences with modern web technologies. 
              Passionate about creating <span className="text-primary font-medium">scalable</span>, <span className="text-blue-600 font-medium">user-friendly applications</span> using React, Node.js, and MongoDB.
            </span>
          </p>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{animationDelay: '1s'}}>
            <Button 
              size="lg" 
              onClick={handleViewProjects}
              data-testid="button-view-projects"
              className="text-base px-8 py-3 h-auto bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Sparkles className="mr-2 w-4 h-4" />
              View Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={handleContactMe}
              data-testid="button-contact-me"
              className="text-base px-8 py-3 h-auto backdrop-blur-sm border-primary/30 hover:border-primary hover:bg-primary/10 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Me
              <Zap className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex justify-center bg-background/20 backdrop-blur-sm">
          <div className="w-1 h-3 bg-gradient-to-b from-primary to-blue-600 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;