import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Replace with actual form submission logic
    console.log('Form submitted:', formData);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for your message. I\'ll get back to you soon!',
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

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

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muhammad.tariq@example.com',
      href: 'mailto:muhammad.tariq@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/20 via-background to-primary/5 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 relative" data-testid="text-contact-title">
              <span className="bg-gradient-to-r from-primary via-blue-600 to-violet-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-violet-600/10 blur-lg -z-10 rounded-lg" />
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary via-blue-600 to-violet-600 mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project in mind or want to collaborate? I'd love to hear from you!
              <br />
              <span className="text-primary font-medium">Let's create something amazing together.</span>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <Card className="p-10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-600/5" />
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-blue-600" />
              
              <CardHeader className="px-0 pt-0 relative z-10">
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2" data-testid="text-form-title">
                  Send me a message
                </CardTitle>
                <p className="text-muted-foreground">I'll get back to you within 24 hours</p>
              </CardHeader>
              <CardContent className="px-0 pb-0 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-base font-semibold text-foreground">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      data-testid="input-name"
                      className="h-12 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-base font-semibold text-foreground">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      data-testid="input-email"
                      className="h-12 bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-base font-semibold text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      required
                      data-testid="input-message"
                      className="bg-background/50 backdrop-blur-sm border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full h-14 text-base bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
                    disabled={isSubmitting}
                    data-testid="button-submit"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white/30 border-t-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Enhanced Contact Info & Social Links */}
            <div className="space-y-8">
              {/* Enhanced Contact Information */}
              <Card className="p-10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-0 shadow-2xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-600/5" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-blue-600" />
                
                <CardHeader className="px-0 pt-0 relative z-10">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-2" data-testid="text-contact-info-title">
                    Let's Connect
                  </CardTitle>
                  <p className="text-muted-foreground">Ready to start your project?</p>
                </CardHeader>
                <CardContent className="px-0 pb-0 space-y-8 relative z-10">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-6 group hover:scale-105 transition-transform duration-300">
                      <div className="w-14 h-14 bg-gradient-to-br from-emerald-500/20 to-blue-600/20 rounded-xl flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                        <info.icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-muted-foreground mb-1">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href}
                            className="text-lg font-medium text-foreground hover:text-emerald-600 transition-colors duration-300"
                            data-testid={`link-${info.label.toLowerCase()}`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-lg font-medium text-foreground" data-testid={`text-${info.label.toLowerCase()}`}>
                            {info.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Enhanced Social Links */}
              <Card className="p-10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-sm border-0 shadow-2xl relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.9s'}}>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-600/5" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-purple-600" />
                
                <CardHeader className="px-0 pt-0 relative z-10">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent mb-2" data-testid="text-social-title">
                    Follow Me
                  </CardTitle>
                  <p className="text-muted-foreground">Stay connected on social media</p>
                </CardHeader>
                <CardContent className="px-0 pb-0 relative z-10">
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className={`h-16 ${social.color} border-border/30 hover:border-violet-600/50 bg-background/50 backdrop-blur-sm hover:bg-violet-600/10 transform hover:scale-105 transition-all duration-300 group`}
                        onClick={() => {
                          console.log(`Opening ${social.name}:`, social.url);
                          window.open(social.url, '_blank');
                        }}
                        data-testid={`button-social-${social.name.toLowerCase()}`}
                      >
                        <div className="flex flex-col items-center space-y-2">
                          <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                          <span className="text-xs font-semibold">{social.name}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;