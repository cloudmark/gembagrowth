'use client';

import React from 'react';
import {
  Target,
  Users,
  BarChart4,
  Shuffle,
  ShieldCheck,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const strategies = [
  {
    icon: <Target className="h-8 w-8 text-accent" />,
    title: 'Reframe the Mission',
    description:
      'Shift your goal from achieving maximum performance to unlocking maximum potential within your given constraints. This is not about lowering standards; it is about recalibrating expectations to what is realistically achievable with the team you have, turning a frustrating situation into a focused challenge.',
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: 'Build Micro-Movements',
    description:
      'Identify and champion the pockets of excellence that already exist, no matter how small. By highlighting and empowering your high-performers, you can create a positive ripple effect. Culture rarely changes from the top down; it shifts from the edges inward.',
  },
  {
    icon: <BarChart4 className="h-8 w-8 text-accent" />,
    title: 'Use Visual Leadership',
    description:
      'Make performance gaps impossible to ignore by using clear, visual tools. Use dashboards, simple charts, and powerful storytelling to show-not just tell-where the team is falling short. This invites shared ownership of the problem without resorting to blame.',
  },
  {
    icon: <Shuffle className="h-8 w-8 text-accent" />,
    title: 'Redefine Roles',
    description:
      'Analyse whether the issue is the person or the position. Sometimes, a team member is failing not because of a lack of skill, but because of a poor fit. Consider rotating, redesigning, or reassigning roles to better align with individual strengths and aptitudes.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-accent" />,
    title: 'Protect the Empty Seat',
    description:
      'An empty seat on the team is painful, but filling it with an inefficient or misaligned person is corrosive. It sends the message that mediocrity is acceptable. If you must compromise, do so consciously, document the operational cost, and never stop advocating for the right fit.',
  },
];

export default function FiveStrategies() {
  return (
    <Card className="my-8 shadow-xl">
      <CardHeader>
        <CardTitle className="font-headline text-3xl text-primary text-center">
          Navigating the Constraint
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-col">
          {strategies.map((strategy, index) => (
            <React.Fragment key={strategy.title}>
              <div className="grid grid-cols-[auto,1fr] items-start gap-4 md:gap-6 py-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                  {strategy.icon}
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold text-primary mb-1">
                    {strategy.title}
                  </h4>
                  <p className="text-muted-foreground">
                    {strategy.description}
                  </p>
                </div>
              </div>
              {index < strategies.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
