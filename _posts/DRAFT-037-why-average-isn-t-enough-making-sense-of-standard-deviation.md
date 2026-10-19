---
title: 'Why Average Isn’t Enough: Making Sense of Standard Deviation'
slug: '037-why-average-isn-t-enough-making-sense-of-standard-deviation'
date: '2027-01-04'
excerpt: 'When I first encountered standard deviation during my engineering studies, I’ll be honest, it completely went over my head. The formula looked intimidating, the explanation felt abstract, and the purpose seemed… unnec...'
coverImage: ''
author: 'Matthew Galea'
tags: []
published: false
---

When I first encountered standard deviation during my engineering studies, I’ll be honest, it completely went over my head. The formula looked intimidating, the explanation felt abstract, and the purpose seemed… unnecessary.

It wasn’t until much later, when I revisited it with a more practical lens, that it finally clicked. And ironically, the explanation that stayed with me was one of the simplest.

### **The Basketball Team Dilemma**

Imagine you are investing in a basketball team. You are told that Team A has an average height of 180 cm.

“Great,” you think. That sounds ideal.

Now you are told that Team B also has an average height of 180 cm. So both teams look identical, right?

Not quite.

Let’s look closer:

- **Team A** has players ranging neatly between 170 cm and 190 cm
- **Team B** has most players around 160 cm… plus one extremely tall player pulling the average up

Suddenly, these teams are very different.

Team A is consistent. Team B is… let’s just say, heavily reliant on one very tall individual. If that player has an off day, the team quite literally falls short.

So while the average tells you something, it does not tell you everything.

What you really care about is **how spread out the data is**.

### **Measuring the Spread**

This is where standard deviation comes in.  If we want to understand spread, a natural starting point is this simple idea:

Take every value and measure how far it is from the average.

For each player, we compare their height to 180 cm and calculate the difference.

But there is a problem.

Some players are taller than the average and some are shorter. If we simply add all these differences together, the positives and negatives cancel each other out.

The result?

Zero.

Which is not helpful at all. It would suggest there is no variability, even when there clearly is.

### **First Attempt: Absolute Values**

One way around this is to ignore direction and only look at magnitude. In other words, treat every difference as positive.  This avoids the cancellation problem, but creates a new issue.  A player who is 1 cm away from the average is treated similarly to one who is 20 cm away, just scaled linearly. There is no extra emphasis on larger deviations.

But in reality, we care more about extreme differences.

### **The Clever Trick: Squaring the Differences**

This is where the key idea of standard deviation comes in.  Instead of just taking differences, we **square them**.  This does two important things:

1. It makes all values positive
1. It gives more weight to values that are further from the average

For example:

- A deviation of 2 becomes 22 = 4
- A deviation of 10 becomes 102= 100

So larger gaps grow much faster. This reflects the fact that extreme values matter more when assessing consistency.

### **From Variance to Standard Deviation**

Once we have squared all the differences, we average them. This gives us something called **variance**.

But there is still one small issue.  If our original data was in centimeters, then variance is in square centimeters. That is not very intuitive to interpret.  So we take the square root.

And just like that, we arrive at **standard deviation**, a measure of spread expressed in the same units as the data we started with.

### **Back to the Teams**

Now we can finally compare our basketball teams properly.

- Team A will have a **small standard deviation**, meaning heights are tightly clustered
- Team B will have a **large standard deviation**, meaning heights are spread out

And this tells us something important:

A smaller standard deviation means more consistency. A larger one means more variability.

If you are building a balanced team, consistency wins.

Standard deviation is often introduced as a formula to memorise, but it is really just a logical solution to a simple problem:

How do we measure how spread out data is, in a meaningful way?

Once you break it down, every step in the formula has a purpose. Nothing is arbitrary.

So the next time you see a standard deviation, do not think of it as a complicated statistic. Think of it as a way of answering a practical question:  *Are we dealing with a well-balanced team… or just one tall story?*
