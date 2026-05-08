
'use client';

import {
    Briefcase,
    Zap,
    DollarSign,
    Anchor,
    Database,
    Globe,
    TrendingUp,
    Container,
    BarChart,
    ArrowRightLeft,
    Cpu,
} from 'lucide-react';

const highlights = [
    {
        icon: <Zap className="h-6 w-6 text-accent" />,
        title: 'Operational Efficiency',
        description: 'Improved schedule adherence by 20%, achieving over 90% reliability in production planning.',
    },
    {
        icon: <DollarSign className="h-6 w-6 text-accent" />,
        title: 'Cost Savings',
        description: 'Reduced inventory by 15% ($1M net saving) through streamlined WIP processes.',
    },
    {
        icon: <Anchor className="h-6 w-6 text-accent" />,
        title: 'Capacity Stabilisation',
        description: 'Reduced demand variability by 40%, enabling more predictable production capacity.',
    },
    {
        icon: <Database className="h-6 w-6 text-accent" />,
        title: 'Systems Innovation',
        description: 'Designed and implemented an internal MRP system to enhance planning and efficiency.',
    },
    {
        icon: <Globe className="h-6 w-6 text-accent" />,
        title: 'Global Operations Leadership',
        description: 'Directed international operations across China, Egypt, and Mexico, managing diverse teams and complex supply chains.',
    },
    {
        icon: <TrendingUp className="h-6 w-6 text-accent" />,
        title: 'Business Turnaround',
        description: 'Transformed a $37M breakeven operation into a $50M business with sustained double-digit profitability.',
    },
    {
        icon: <Container className="h-6 w-6 text-accent" />,
        title: 'Revenue Growth',
        description: 'Increased revenue by €2M without additional labour costs by optimising efficiency.',
    },
    {
        icon: <BarChart className="h-6 w-6 text-accent" />,
        title: 'Productivity Gains',
        description: 'Reduced labour costs as a percentage of sales by 33% through targeted productivity improvements.',
    },
    {
        icon: <ArrowRightLeft className="h-6 w-6 text-accent" />,
        title: 'Strategic Expansion',
        description: 'Oversaw the full transfer of manufacturing from the Philippines to Egypt, including expansion into new product lines.',
    },
    {
        icon: <Cpu className="h-6 w-6 text-accent" />,
        title: 'Throughput Improvement',
        description: 'Enhanced production throughput by reducing end-of-line testing time by 50% through redesigned methodologies.',
    },
];

export default function KeyCareerHighlights() {
    return (
        <div className="my-12">
            <h3 className="text-3xl font-headline font-bold text-primary mb-8 text-center">Key Career Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {highlights.map((highlight) => (
                <div key={highlight.title} className="flex flex-col p-4">
                    <div className="flex items-center gap-4 mb-2">
                        <div className="flex-shrink-0">{highlight.icon}</div>
                        <h4 className="font-headline text-xl font-bold text-primary">{highlight.title}</h4>
                    </div>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                </div>
            ))}
            </div>
        </div>
    );
}
