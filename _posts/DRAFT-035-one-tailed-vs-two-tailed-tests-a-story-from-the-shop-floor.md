---
title: 'One-Tailed vs Two-Tailed Tests: A Story from the Shop Floor'
slug: '035-one-tailed-vs-two-tailed-tests-a-story-from-the-shop-floor'
date: '2026-12-07'
excerpt: 'On a busy Monday morning, the production team gathered around the daily performance board. Two topics were under discussion. One was a dimensional issue on a moulded component. The other was a recent design change to...'
coverImage: ''
author: 'Matthew Galea'
tags: []
published: false
---

On a busy Monday morning, the production team gathered around the daily performance board. Two topics were under discussion. One was a dimensional issue on a moulded component. The other was a recent design change to reduce the actuation force of a switch. Both involved data, both involved decisions, but the questions behind them were very different.

### **The Moulding Line: “Has Something Changed?”**

Sarah, the process engineer, had been monitoring a critical dimension on a plastic moulding line. The target was stable, and the process had been running well for months. However, the latest sample results looked slightly different. Not dramatically out of tolerance, but enough to raise concern.

The team asked a simple question:
 “Has the process changed?”

Nobody cared whether the dimension had increased or decreased. Either direction could create problems. A slightly larger part could cause assembly issues. A slightly smaller one could lead to functional failure. The direction did not matter, only the fact that it might have shifted.

Sarah explained that this called for a **two-tailed test**.

They were not trying to prove improvement. They were trying to detect *any deviation from normal behaviour*. The hypotheses were framed accordingly:

- The process mean is still on target
- The process mean is different from the target

This approach matched the reality of the situation. It was about control and stability, not optimisation. After analysing the data, the result showed no statistically significant shift. The small difference seen in samples was simply normal variation.

The team moved on, avoiding unnecessary adjustment and keeping the process stable.

### **The Switch Line: “Have We Improved It?”**

Later that same day, attention shifted to a different problem. James, a design engineer, had introduced a modification to reduce the force required to actuate a switch. Customer feedback had indicated that the product felt too stiff, so this change was intentional and directional.

Now the team asked a different question:
 “Has the actuation force decreased?”

This time, the direction mattered. A reduction would be a success. An increase would mean failure. They were not interested in “any change”, only improvement in one direction.

This called for a **one-tailed test**.

The hypotheses reflected that intent:

- The force has not decreased
- The force has decreased

The analysis showed a statistically significant reduction in force. The result was not just variation, but a meaningful improvement aligned to the design goal.

The team confidently approved the change.

### **Two Questions, Two Approaches**

By the end of the meeting, something important had become clear. The difference between a one-tailed and two-tailed test was not about statistics alone. It was about the **question being asked**.

- When the goal is **control**, use a two-tailed test
 You are asking, “Has anything changed?”
- When the goal is **improvement**, use a one-tailed test
 You are asking, “Has it improved in the direction we intended?”

The key is deciding this *before* looking at the data. Changing the approach after seeing results can easily lead to biased conclusions.  Both situations happen every day. Teams monitor stable processes while also driving targeted improvements. Using the correct test ensures that decisions reflect reality, not just convenient interpretation.

The story of Sarah and James highlights a simple truth. The statistics do not change, but the *intent does*. And getting that intent right is what makes the analysis meaningful.
