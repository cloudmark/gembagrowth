'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Linkedin, Sprout } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <nav className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <Sprout className="h-7 w-7 text-primary transition-transform group-hover:rotate-12" />
            <span className="font-headline text-2xl font-bold tracking-tight">
              <span className="text-primary">GembaGrowth</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'font-semibold text-lg transition-colors hover:text-accent',
                  pathname === item.href ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {item.name}
              </Link>
            ))}
             <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:bg-transparent hover:text-accent">
                <a href="https://www.linkedin.com/in/mgalea-gembagrowth/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </a>
            </Button>
          </div>
          
          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full max-w-sm p-0">
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b">
                    <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
                       <Sprout className="h-6 w-6 text-primary" />
                       <span className="font-headline text-xl font-bold">
                        <span className="text-primary">GembaGrowth</span>
                      </span>
                    </Link>
                  </div>
                  <div className="flex-grow py-6 px-4">
                    <nav className="flex flex-col gap-y-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            'text-lg font-semibold px-4 py-2 rounded-md transition-colors hover:bg-muted',
                            pathname === item.href ? 'text-primary bg-muted' : 'text-foreground'
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="p-4 border-t flex justify-end">
                     <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:bg-transparent hover:text-accent">
                        <a href="https://www.linkedin.com/in/mgalea-gembagrowth/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className="h-6 w-6" />
                        </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
