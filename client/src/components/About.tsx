import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download } from 'lucide-react';
import profileImage from '../../../../attached_assets/unnamed_1758992107685.jpg';

const About = () => {
  const handleResumeDownload = () => {
    console.log('Resume download triggered');
    // TODO: Replace with actual resume download functionality
    alert('Resume download feature will be implemented soon!');
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 relative" data-testid="text-about-title">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-violet-600 bg-clip-text text-transparent">
                About Me
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-blue-600/10 blur-lg -z-10 rounded-lg" />
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-blue-600 mx-auto rounded-full" />
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
              Passionate about crafting digital experiences that matter
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Profile Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="relative group">
                <div className="w-96 h-96 rounded-full overflow-hidden border-4 border-gradient-to-br from-primary/30 to-blue-600/30 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  <img 
                    src={profileImage} 
                    alt="Muhammad Tariq - MERN Stack Developer"
                    className="w-full h-full object-cover filter group-hover:brightness-110 transition-all duration-500"
                    data-testid="img-profile"
                  />
                </div>
                
                {/* Multiple decorative rings with different animations */}
                <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-pulse" />
                <div className="absolute -inset-8 rounded-full border border-blue-500/10 animate-ping" style={{animationDuration: '3s'}} />
                <div className="absolute -inset-12 rounded-full border border-violet-500/5 animate-pulse" style={{animationDelay: '1s'}} />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-blue-600/10 blur-xl group-hover:from-primary/20 group-hover:to-blue-600/20 transition-all duration-500" />
              </div>
            </div>

            {/* Enhanced About Content */}
            <div className="space-y-8 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="space-y-6">
                <p className="text-xl text-muted-foreground leading-relaxed relative" data-testid="text-bio-1">
                  <span className="absolute -left-4 top-0 text-6xl text-primary/10 font-serif">"</span>
                  I'm a passionate <span className="text-primary font-semibold">Full Stack Developer</span> with expertise in the MERN stack. 
                  I love creating <span className="text-blue-600 font-medium">digital solutions</span> that make a difference in people's lives.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed pl-6 border-l-4 border-primary/20" data-testid="text-bio-2">
                  With a strong foundation in both frontend and backend technologies, 
                  I specialize in building <span className="text-violet-600 font-medium">scalable web applications</span> that are both 
                  functional and visually appealing.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-bio-3">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to <span className="text-emerald-600 font-medium">open-source projects</span>, or sharing my knowledge 
                  with the developer community.
                </p>
              </div>

              {/* Enhanced Quick Stats */}
              <Card className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-0 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5" />
                <div className="relative z-10">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div className="group cursor-pointer">
                      <div className="text-4xl font-bold bg-gradient-to-br from-primary to-blue-600 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300" data-testid="text-projects-count">
                        25+
                      </div>
                      <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        Projects Completed
                      </div>
                      <div className="w-12 h-1 bg-gradient-to-r from-primary to-blue-600 mx-auto mt-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                    <div className="group cursor-pointer">
                      <div className="text-4xl font-bold bg-gradient-to-br from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2 transform group-hover:scale-110 transition-transform duration-300" data-testid="text-experience-years">
                        4+
                      </div>
                      <div className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        Years Experience
                      </div>
                      <div className="w-12 h-1 bg-gradient-to-r from-violet-600 to-purple-600 mx-auto mt-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Card>

              {/* Enhanced Resume Download */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleResumeDownload}
                  data-testid="button-download-resume"
                  className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 px-8 py-3"
                  size="lg"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Resume
                </Button>
                
                <Button 
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="border-primary/30 hover:border-primary hover:bg-primary/10 px-8 py-3 transform hover:scale-105 transition-all duration-300"
                >
                  Let's Connect
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;