import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/username',
      color: 'hover:text-[#333]'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/username',
      color: 'hover:text-[#0077B5]'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/username',
      color: 'hover:text-[#1DA1F2]'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:muhammad.tariq@example.com',
      color: 'hover:text-[#EA4335]'
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSocialClick = (url: string, name: string) => {
    console.log(`Opening ${name}:`, url);
    window.open(url, '_blank');
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-foreground" data-testid="text-footer-brand">
                Muhammad Tariq
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed" data-testid="text-footer-description">
                MERN Stack Developer passionate about creating exceptional 
                digital experiences with modern web technologies.
              </p>
              <div className="flex space-x-2">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`w-8 h-8 ${social.color} transition-colors`}
                    onClick={() => handleSocialClick(social.url, social.name)}
                    data-testid={`button-footer-social-${social.name.toLowerCase()}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground" data-testid="text-quick-links-title">
                Quick Links
              </h4>
              <div className="space-y-2">
                {quickLinks.map((link, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleNavClick(link.href)}
                    data-testid={`button-footer-link-${link.name.toLowerCase()}`}
                    className="justify-start p-0 h-auto text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground" data-testid="text-get-in-touch-title">
                Get in Touch
              </h4>
              <div className="space-y-2 text-sm">
                <p className="text-muted-foreground">
                  Ready to work together?
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleNavClick('#contact')}
                  data-testid="button-footer-contact"
                  className="justify-start p-0 h-auto text-primary hover:text-primary/80 transition-colors"
                >
                  Let's get in touch →
                </Button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-border mt-8 pt-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground" data-testid="text-copyright">
                © {currentYear} Muhammad Tariq. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;