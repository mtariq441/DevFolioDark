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
    <section id="about" className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-about-title">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20">
                  <img 
                    src={profileImage} 
                    alt="Muhammad Tariq - MERN Stack Developer"
                    className="w-full h-full object-cover"
                    data-testid="img-profile"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute -inset-4 rounded-full border border-primary/10 animate-pulse" />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-bio-1">
                  I'm a passionate Full Stack Developer with expertise in the MERN stack. 
                  I love creating digital solutions that make a difference in people's lives.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-bio-2">
                  With a strong foundation in both frontend and backend technologies, 
                  I specialize in building scalable web applications that are both 
                  functional and visually appealing.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-bio-3">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing my knowledge 
                  with the developer community.
                </p>
              </div>

              {/* Quick Stats */}
              <Card className="p-6 bg-card/50">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary" data-testid="text-projects-count">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary" data-testid="text-experience-years">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>
              </Card>

              {/* Resume Download */}
              <Button 
                onClick={handleResumeDownload}
                data-testid="button-download-resume"
                className="w-full sm:w-auto"
                size="lg"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;