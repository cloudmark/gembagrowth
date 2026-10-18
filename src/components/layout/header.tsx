'use client';

import BrandLogo from '@/components/brand-logo';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Linkedin } from 'lucide-react';
import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/blog' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header bg-background/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <nav aria-label="Main navigation" className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <BrandLogo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-current={(item.href === '/' ? pathname === '/' : pathname.startsWith('/blog')) ? 'page' : undefined}
                className={cn(
                  'site-nav-link',
                  (item.href === '/' ? pathname === '/' : pathname.startsWith('/blog')) ? 'text-primary' : 'text-foreground/80'
                )}
              >
                {item.name}
              </Link>
            ))}
             <Button asChild variant="ghost" size="icon" className="site-icon-control text-muted-foreground">
                <a href="https://www.linkedin.com/in/mgalea-gembagrowth/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                </a>
            </Button>
          </div>
          
          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="site-icon-control">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open main menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="site-mobile-menu w-full max-w-sm p-0" aria-describedby={undefined}>
                <SheetTitle className="sr-only">Main navigation</SheetTitle>
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b">
                    <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileMenuOpen(false)}>
                       <BrandLogo />
                    </Link>
                  </div>
                  <div className="flex-grow py-6 px-4">
                    <nav className="flex flex-col gap-y-4">
                      {navItems.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          aria-current={(item.href === '/' ? pathname === '/' : pathname.startsWith('/blog')) ? 'page' : undefined}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            'site-mobile-link text-lg font-semibold px-4 py-2 rounded-md transition-colors hover:bg-muted',
                            (item.href === '/' ? pathname === '/' : pathname.startsWith('/blog')) ? 'text-primary bg-muted' : 'text-foreground'
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <div className="p-4 border-t flex justify-end">
                     <Button asChild variant="ghost" size="icon" className="site-icon-control text-muted-foreground">
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
