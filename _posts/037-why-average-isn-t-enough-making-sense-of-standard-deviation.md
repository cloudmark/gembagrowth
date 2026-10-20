---
title: 'Why Average Isn’t Enough: Making Sense of Standard Deviation'
slug: '037-why-average-isn-t-enough-making-sense-of-standard-deviation'
date: '2027-01-04'
excerpt: 'Two processes can share the same average and behave very differently. A practical introduction to standard deviation, what it tells us about variation, and how to use it in manufacturing.'
coverImage: '/037.png'
author: 'Matthew Galea'
tags: ['Statistics', 'Data Analysis', 'Standard Deviation', 'Manufacturing']
published: true
---

When I first encountered standard deviation during my engineering studies, I’ll be honest: it went over my head. The formula looked intimidating, the explanation felt abstract, and the purpose seemed unnecessary.

It was much later, when I revisited it through a practical lens, that it finally clicked. The explanation that stayed with me was one of the simplest.

### The Basketball Team Dilemma

Imagine you are comparing two basketball teams. You are told that Team A has an average height of 180 cm.

“All right,” you think. That gives you a starting point.

Then you learn that Team B also has an average height of 180 cm. Does that mean the teams are similar?

Not quite.

Team A’s players might be clustered fairly closely around that average. Team B might have several players well below it and one exceptionally tall player pulling the average upwards. The teams can share the same average while their individual heights are spread very differently.

The average tells us where the centre is, but not how closely the observations sit around it. To understand that, we also need to consider **spread**.

### Measuring the Spread

For each player, we can calculate how far their height is from the team average. These differences are called deviations.

Some players are taller than the average and some are shorter. If we simply add their signed deviations, positive and negative values cancel out. For a complete data set, those deviations always add up to zero—even when the values are widely spread—so their sum does not measure variability.

### Why Square the Deviations?

One way to avoid cancellation would be to take the absolute value of each deviation. Standard deviation takes a different route: it **squares** each deviation before averaging them.

Squaring makes every result positive and gives larger deviations more influence:

- A deviation of 2 cm becomes 2² = 4 cm².
- A deviation of 10 cm becomes 10² = 100 cm².

The average of the squared deviations is called the **variance**. Because it is measured in squared units, it can be awkward to interpret. Taking the square root brings us back to the original unit—in this example, centimetres—and gives us the **standard deviation**.

That extra influence on large deviations is useful, but it is worth remembering: a standard deviation can be affected by unusually extreme values.

### A Note About Samples

The idea is the same whether we are describing a full population or estimating spread from a sample. The calculation differs slightly: population variance averages squared deviations over the whole population, while sample variance typically divides by one less than the sample size to account for estimating the mean from the sample. Statistical software handles this distinction, but it is helpful to know which measure you are looking at.

### Back to the Teams—and the Shop Floor

The team with heights clustered closely around 180 cm has a smaller standard deviation. The team with heights spread further from 180 cm has a larger one.

Neither value is automatically “good” or “bad”; it depends on what matters for the decision. In basketball, a team might value a mix of heights for different positions. In manufacturing, a process producing parts to a target dimension may need both an average close to target and variation small enough to meet customer requirements.

Imagine two machines producing parts with the same average dimension. If one machine has a much larger standard deviation, its output is less tightly clustered. Even if the average is on target, more parts may fall outside specification. Looking only at the average could hide that risk.

Standard deviation is one useful summary, not a complete picture of process performance. It does not tell us whether the process is stable over time, whether the data follows a particular distribution, or how many parts fall outside specification. Use it alongside a plot of the data, control charts, and capability analysis where appropriate.

### Average and Spread Tell Different Stories

Standard deviation is often introduced as a formula to memorise, but the idea behind it answers a practical question: **How spread out are the data around their average?**

The average and standard deviation tell different parts of the story. The average describes the centre; standard deviation describes the spread. Once I understood that purpose, the formula stopped feeling arbitrary and started to feel like a tool.

The next time two processes share the same average, ask what the spread looks like too. You may find there is more to the story than the average suggests.
