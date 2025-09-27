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
  SiPostgresql
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
    <section id="skills" className="py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-skills-title">
              Skills & Technologies
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto" />
            <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
              I work with modern technologies to build exceptional web applications
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6 hover-elevate">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center" data-testid={`text-category-${category.title.toLowerCase()}`}>
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex flex-col items-center p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                      data-testid={`skill-${skill.name.toLowerCase().replace(/[.\s]/g, '-')}`}
                    >
                      <skill.icon className={`w-8 h-8 mb-2 ${skill.color}`} />
                      <span className="text-sm font-medium text-center text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Core Competencies */}
          <Card className="p-8">
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center" data-testid="text-core-competencies">
              Core Competencies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {coreSkills.map((skill, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm"
                  data-testid={`badge-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;