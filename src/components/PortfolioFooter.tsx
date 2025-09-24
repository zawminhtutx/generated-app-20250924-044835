import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolio-data';
export const PortfolioFooter = () => {
  const { socialLinks } = portfolioData;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-muted/50">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm text-muted-foreground">
          &copy; {year} {portfolioData.name}. Built with ❤️ at Cloudflare.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.github && (
            <Button variant="ghost" size="icon" asChild>
              <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          )}
          {socialLinks.linkedin && (
            <Button variant="ghost" size="icon" asChild>
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
          )}
          {socialLinks.twitter && (
            <Button variant="ghost" size="icon" asChild>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </footer>
  );
};