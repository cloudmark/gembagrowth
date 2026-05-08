import { Sprout, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Separator } from '../ui/separator';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/30 backdrop-blur-sm border-t">
      <div className="w-full max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left items-start">
          
          {/* Logo and Copyright */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <Sprout className="h-6 w-6 text-primary" />
              <span className="font-headline text-xl font-bold text-primary">GembaGrowth</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              <Link href="/matthew-galea" className="transition-colors hover:text-accent" title="About Matthew Galea">
                &copy; {currentYear} Matthew Galea.
              </Link>
              {' '}All Rights Reserved.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col md:items-center gap-2 text-sm">
            <h3 className="font-semibold text-foreground tracking-wider uppercase mb-2">Navigate</h3>
            <Link href="/" className="text-muted-foreground hover:text-accent transition-colors">Home</Link>
            <Link href="/blog" className="text-muted-foreground hover:text-accent transition-colors">Blog</Link>
          </div>
          
          {/* Connect */}
          <div className="flex flex-col items-center md:items-end">
             <h3 className="font-semibold text-foreground tracking-wider uppercase mb-3">Connect</h3>
             <div className="flex items-center gap-2">
                <Button asChild variant="ghost" size="icon" className="text-muted-foreground hover:bg-transparent hover:text-accent">
                    <a href="https://www.linkedin.com/in/mgalea-gembagrowth/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <Linkedin className="h-6 w-6" />
                    </a>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
