import React from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';
const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];
const NavLinks = ({ isMobile = false }: { isMobile?: boolean }) => (
  <nav className={`flex gap-2 ${isMobile ? 'flex-col items-start gap-4 p-4' : 'items-center'}`}>
    {navLinks.map((link) => (
      <Button key={link.name} variant="ghost" asChild>
        <a href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
          {link.name}
        </a>
      </Button>
    ))}
  </nav>
);
export const PortfolioHeader = () => {
  const isMobile = useIsMobile();
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="sticky top-0 z-50 w-full border-b bg-background/75 backdrop-blur-lg"
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-2 font-bold text-lg">
          <Code className="h-6 w-6" />
          <span className="font-display">Zenith</span>
        </a>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
<SheetContent side="right" className="flex flex-col">
  <NavLinks isMobile />
  <div className="mt-auto p-4">
    <ThemeToggle className="" />
  </div>
</SheetContent>
          </Sheet>
        ) : (
          <div className="flex items-center gap-2">
  <NavLinks />
  <ThemeToggle className="" />
</div>
        )}
      </div>
    </motion.header>
  );
};