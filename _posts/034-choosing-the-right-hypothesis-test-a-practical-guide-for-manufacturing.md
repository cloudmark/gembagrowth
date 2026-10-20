---
title: 'Choosing the Right Hypothesis Test: A Practical Guide for Manufacturing'
slug: '034-choosing-the-right-hypothesis-test-a-practical-guide-for-manufacturing'
date: '2026-11-23'
excerpt: 'A practical guide to choosing a hypothesis test based on the question, data type, and study design—and to interpreting the result responsibly.'
coverImage: '/034B.png'
author: 'Matthew Galea'
tags: ['Statistics', 'Data Analysis', 'Hypothesis Testing', 'Manufacturing']
published: true
---

Over the past few weeks, I have written about the concepts behind hypothesis testing. Feedback has highlighted a practical challenge: understanding the idea is one thing; choosing the right test for the situation is another.

Different tests answer different questions. The right choice depends on what you want to learn, what kind of data you have, and how that data was collected. Choosing a test simply because it is familiar can produce a precise answer to the wrong question.

Here is a practical way to make the choice.

## Start with the Question and the Data

Before opening a statistics package, write down the question in plain language. Are you comparing averages, defect rates, or variation? Are you comparing one process with a target, two processes with each other, or several groups?

Then identify the outcome you measured:

- **A continuous measurement:** for example, length, temperature, cycle time, or weight.
- **A categorical outcome:** for example, pass/fail, defect type, or accepted/rejected.
- **A count:** for example, the number of defects per unit or incidents per shift.

Finally, check how the observations relate to each other. Measurements from the same part before and after a change are paired. Results from separate, unrelated parts are usually independent. Treating paired data as independent—or the other way around—can lead to the wrong conclusion.

## A Quick Selection Guide

| Question | Typical approach |
| --- | --- |
| Is one process average different from a target? | One-sample t-test |
| Do two independent groups have different averages? | Welch's two-sample t-test |
| Did the average change on the same units before and after? | Paired t-test |
| Do three or more groups have different averages? | ANOVA or Welch ANOVA |
| Are two defect rates or yields different? | Two-proportion test or chi-square test |
| Are defect rates different across several groups? | Chi-square test or a suitable regression model |
| Do two processes differ in spread? | Levene's or Brown–Forsythe test; use an F-test only when its assumptions are reasonable |

This is a starting point, not an automatic answer. The study design and assumptions still matter.

## Comparing Averages: t-Tests and ANOVA

When the outcome is a measurement and the question is about an average, a t-test is often appropriate:

- A **one-sample t-test** compares a sample average with a target.
- An **independent two-sample t-test** compares averages from two separate groups.
- A **paired t-test** compares two measurements taken from the same units, such as before and after a process adjustment.

For two independent groups, Welch's t-test is a useful default when the groups may have different amounts of variation or different sample sizes. A paired test is different: it analyses the within-unit differences, so the pairing must be preserved.

For three or more groups, **ANOVA** tests whether there is evidence that at least one group average differs. A significant result does not identify which groups differ; planned comparisons or post-hoc tests are needed, with an appropriate adjustment for multiple comparisons.

ANOVA is for comparing averages of a measured, continuous outcome. For example, it could compare the mean thickness produced by three machine settings. It is not the right choice for comparing defect percentages across shifts; those are categorical outcomes and call for a proportion or categorical-data method.

### What About a Z-Test?

A z-test for a mean is appropriate when the population standard deviation is genuinely known. That situation is uncommon in day-to-day manufacturing. A large sample by itself does not mean you should switch from a t-test to a z-test. As sample sizes grow, the t-distribution approaches the normal distribution, and the practical difference becomes small.

## Comparing Defect Rates and Other Proportions

If every item is classified into a category such as pass or fail, the outcome is a proportion rather than a continuous measurement.

A **one-proportion test** can compare a defect rate with a target. A **two-proportion test** can compare the rates from two processes. For several groups, a chi-square test can assess whether the categorical outcomes and groups are associated. When counts are sparse, Fisher's exact test may be more appropriate than the usual chi-square approximation.

Make sure the denominator is clear. Ten defects in 100 parts is not directly comparable with ten defects in 1,000 parts. Also consider whether observations are truly independent: multiple defects on one part, repeated measurements, or parts clustered by machine or batch can require a model that accounts for that structure.

If the outcome is a count—such as the number of defects per unit—and the number of opportunities varies, a count model may be more suitable than a basic proportion test.

## Comparing Variation

Sometimes the concern is not the average but consistency. Two machines might produce parts with similar average dimensions while one has much greater spread.

An F-test can compare the variances of two normally distributed, independent groups, but it is sensitive to departures from normality. Levene's test and the Brown–Forsythe test are generally more robust choices when comparing spread across groups.

For ongoing process monitoring, a control chart is often more informative than a one-off test of variation. It shows how the process behaves over time and helps distinguish routine fluctuation from evidence of a change. A hypothesis test does not replace process monitoring.

## Check the Study Before Trusting the Test

The calculation cannot repair a weak study. Before interpreting a result, ask:

- Were the samples selected in a way that represents the process?
- Were the measurements collected consistently, with a suitable measurement system?
- Are observations independent, or are they paired or grouped?
- Is the process stable enough for the comparison to be meaningful?
- Are the assumptions of the chosen method reasonable?
- If many groups or outcomes were tested, have you accounted for multiple comparisons?

If assumptions are not met, do not pick another test at random. Revisit the question and design, and consider a suitable alternative—such as a transformation, a robust or non-parametric method, or a model that reflects the data structure. These alternatives do not all answer exactly the same question, so be clear about what you want to compare.

## Statistical Significance Is Not the Whole Decision

A p-value does not tell you the probability that your hypothesis is true, nor does it measure the size or importance of an effect. Look at the estimated difference, a confidence interval, and whether that difference matters in practice.

For example, a tiny change in average cycle time may be statistically detectable with a very large sample but have no operational value. Conversely, a potentially important change may be uncertain because the study had too few observations. Plan the sample size around the decision you need to make, rather than relying on a universal rule such as “30 samples.”

## A Practical Roadmap

When you need to choose a test, work through these steps:

1. **Define the decision:** What would you do differently depending on the result?
2. **State the comparison:** A target, two groups, several groups, a proportion, or variation?
3. **Identify the outcome:** A measurement, category, or count?
4. **Describe the design:** Independent observations, paired measurements, or grouped data?
5. **Choose a method that fits:** Check its assumptions before analysing.
6. **Interpret the size and uncertainty:** Consider the estimate, confidence interval, and practical impact—not just the p-value.
7. **Confirm the process context:** Use process knowledge and monitoring to decide whether an apparent difference represents a real, actionable change.

Choosing the right hypothesis test is less about memorising a list of statistical names and more about understanding the question, the data, and the decision at stake. Get those right, and the analysis is much more likely to support a sound manufacturing decision.
