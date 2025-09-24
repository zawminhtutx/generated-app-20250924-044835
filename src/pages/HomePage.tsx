import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, Github, Link as LinkIcon } from 'lucide-react';
import { portfolioData, Project } from '@/data/portfolio-data';
import { PortfolioHeader } from '@/components/PortfolioHeader';
import { PortfolioFooter } from '@/components/PortfolioFooter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '@/lib/utils';
const Section = ({ id, children, className }: { id: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={cn("py-24 md:py-32", className)}>
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  </section>
);
const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-4xl font-bold font-display text-center mb-12 md:mb-16">
    {children}
  </h2>
);
const MotionDiv = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);
const HeroSection = () => (
  <section id="home" className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center text-center overflow-hidden">
    <div className="absolute inset-0 -z-10 bg-hero-gradient" />
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-5xl font-extrabold font-display tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          {portfolioData.name}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground sm:text-xl md:text-2xl">
          {portfolioData.title}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" asChild>
            <a href="#contact">
              Get In Touch <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#projects">
              View My Work <ArrowDown className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);
const AboutSection = () => (
  <Section id="about">
    <MotionDiv>
      <SectionTitle>About Me</SectionTitle>
      <p className="max-w-3xl mx-auto text-center text-lg text-muted-foreground leading-relaxed">
        {portfolioData.bio}
      </p>
    </MotionDiv>
  </Section>
);
const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-w-16 aspect-h-9">
        <img src={project.image} alt={project.title} className="object-cover w-full h-full" />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        {project.repoUrl && (
          <Button variant="ghost" size="icon" asChild>
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
              <Github className="h-5 w-5" />
            </a>
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="ghost" size="icon" asChild>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="Live Demo">
              <LinkIcon className="h-5 w-5" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  </motion.div>
);
const ProjectsSection = () => (
  <Section id="projects" className="bg-muted/50">
    <SectionTitle>My Work</SectionTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  </Section>
);
const SkillsSection = () => (
  <Section id="skills">
    <MotionDiv>
      <SectionTitle>Skills & Expertise</SectionTitle>
      <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
        {portfolioData.skills.map((skill) => (
          <Badge key={skill} className="text-base md:text-lg px-4 py-2">
            {skill}
          </Badge>
        ))}
      </div>
    </MotionDiv>
  </Section>
);
const ContactSection = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="contact" className="bg-muted/50">
      <MotionDiv>
        <SectionTitle>Let's Connect</SectionTitle>
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="text-center p-8 bg-background rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
              <p className="text-muted-foreground">Your message has been sent successfully.</p>
            </div>
          ) : (
            <>
              <p className="text-center text-lg text-muted-foreground mb-8">
                Have a project in mind or just want to say hello? Feel free to send me a message.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Input type="text" placeholder="Your Name" required className="py-6" />
                  <Input type="email" placeholder="Your Email" required className="py-6" />
                </div>
                <Textarea placeholder="Your Message" rows={6} required />
                <div className="text-center">
                  <Button type="submit" size="lg" className="px-8">
                    Send Message
                  </Button>
                </div>
              </form>
            </>
          )}
        </div>
      </MotionDiv>
    </Section>
  );
};
export function HomePage() {
  return (
    <div className="bg-background text-foreground font-sans antialiased">
      <PortfolioHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <PortfolioFooter />
    </div>
  );
}