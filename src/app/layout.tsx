
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import Image from 'next/image';
import { Inter, Lora } from 'next/font/google';
import Script from 'next/script';

const fontBody = Inter({
  subsets: ['latin'],
  variable: '--font-body',
});

const fontHeadline = Lora({
  subsets: ['latin'],
  variable: '--font-headline',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://gembagrowth.com';

export const metadata: Metadata = {
  title: {
    default: 'GembaGrowth | From Gemba to Growth',
    template: `%s | GembaGrowth`,
  },
  description: "I share my journey and practical insights on leadership, lean management, and continuous improvement. Let's connect and grow together.",
  metadataBase: new URL(siteUrl),
  icons: {
    icon: '/favicon.ico', // Explicitly point to favicon to avoid build discovery errors
  },
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: 'GembaGrowth | From Gemba to Growth',
    description: "I share my journey and practical insights on leadership, lean management, and continuous improvement. Let's connect and grow together.",
    images: [
      {
        url: '/profile.JPG',
        width: 1200,
        height: 630,
        alt: 'Matthew Galea',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GembaGrowth | From Gemba to Growth',
    description: "I share my journey and practical insights on leadership, lean management, and continuous improvement. Let's connect and grow together.",
    images: [`${siteUrl}/profile.JPG`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontBody.variable} ${fontHeadline.variable} h-full scroll-smooth`} suppressHydrationWarning>
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-EKVWCH1NL6"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EKVWCH1NL6');
          `}
        </Script>
      </head>
      <body className={cn("font-body antialiased flex flex-col min-h-screen", "bg-background")} suppressHydrationWarning>
        
        <div className="fixed inset-0 -z-10 h-full w-full">
            <Image
                src="/background.png"
                alt="background"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 bg-background/95 dark:bg-background/98" />
        </div>

        <Header />
        <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
