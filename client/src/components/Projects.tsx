import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const handleGithubClick = (githubLink: string, title: string) => {
    console.log(`Opening GitHub for ${title}:`, githubLink);
    window.open(githubLink, '_blank');
  };

  const handleLiveClick = (liveLink: string, title: string) => {
    console.log(`Opening live demo for ${title}:`, liveLink);
    window.open(liveLink, '_blank');
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(selectedProject === projectId ? null : projectId);
    console.log('Project selected:', projectId);
  };

  return (
    <section id="projects" className="py-16 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.id}
                className={`hover-elevate cursor-pointer transition-all duration-300 ${
                  selectedProject === project.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => handleProjectClick(project.id)}
                data-testid={`card-project-${project.id}`}
              >
                {/* Project Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-primary/20 to-chart-2/20 flex items-center justify-center">
                  <div className="text-4xl font-bold text-primary/40">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground" data-testid={`text-project-description-${project.id}`}>
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                          data-testid={`badge-tech-${tech.toLowerCase().replace(/[.\s]/g, '-')}-${project.id}`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGithubClick(project.githubLink, project.title);
                      }}
                      data-testid={`button-github-${project.id}`}
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleLiveClick(project.liveLink, project.title);
                      }}
                      data-testid={`button-live-${project.id}`}
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => {
                console.log('View more projects clicked');
                window.open('https://github.com/username', '_blank');
              }}
              data-testid="button-view-more"
            >
              <Github className="w-4 h-4 mr-2" />
              View More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;