import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  SiReact, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiJavascript, 
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiGithub,
  SiVercel
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: SiReact, color: 'text-[#61DAFB]' },
        { name: 'JavaScript', icon: SiJavascript, color: 'text-[#F7DF1E]' },
        { name: 'TypeScript', icon: SiTypescript, color: 'text-[#3178C6]' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-[#06B6D4]' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: SiNodedotjs, color: 'text-[#339933]' },
        { name: 'Express', icon: SiExpress, color: 'text-foreground' },
        { name: 'MongoDB', icon: SiMongodb, color: 'text-[#47A248]' },
        { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-[#336791]' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: SiGit, color: 'text-[#F05032]' },
        { name: 'Docker', icon: SiDocker, color: 'text-[#2496ED]' },
        { name: 'GitHub', icon: SiGithub, color: 'text-[#181717]' },
        { name: 'Vercel', icon: SiVercel, color: 'text-foreground' },
      ]
    }
  ];

  const coreSkills = [
    'Full Stack Development',
    'RESTful APIs',
    'Database Design',
    'Responsive Design',
    'Version Control',
    'Agile Development',
    'Problem Solving',
    'Team Collaboration'
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
      <div className="absolute top-20 left-20 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative" data-testid="text-skills-title">
              <span className="bg-gradient-to-r from-primary via-violet-600 to-emerald-600 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-violet-600/10 blur-lg -z-10 rounded-lg" />
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-violet-600 to-emerald-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Leveraging cutting-edge technologies to craft exceptional digital experiences
            </p>
          </div>

          {/* Enhanced Technical Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={categoryIndex} 
                className="p-8 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 relative overflow-hidden group animate-fade-in-up"
                style={{animationDelay: `${categoryIndex * 0.2}s`}}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent" data-testid={`text-category-${category.title.toLowerCase()}`}>
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex flex-col items-center p-4 rounded-xl bg-background/50 hover:bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 transform hover:scale-110 transition-all duration-300 group/skill cursor-pointer"
                        data-testid={`skill-${skill.name.toLowerCase().replace(/[.\s]/g, '-')}`}
                      >
                        <skill.icon className={`w-10 h-10 mb-3 ${skill.color} transform group-hover/skill:rotate-12 transition-transform duration-300`} />
                        <span className="text-sm font-semibold text-center text-foreground group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Enhanced Core Competencies */}
          <Card className="p-10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-0 shadow-2xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.8s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-violet-500/5 to-emerald-500/10" />
            <div className="absolute top-0 left-1/2 w-32 h-1 bg-gradient-to-r from-primary via-violet-600 to-emerald-600 transform -translate-x-1/2 rounded-full" />
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-primary via-violet-600 to-emerald-600 bg-clip-text text-transparent" data-testid="text-core-competencies">
                Core Competencies
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {coreSkills.map((skill, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="px-6 py-3 text-base font-medium bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-sm border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transform hover:scale-105 transition-all duration-300 cursor-pointer group"
                    data-testid={`badge-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span className="group-hover:text-primary transition-colors duration-300">
                      {skill}
                    </span>
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;