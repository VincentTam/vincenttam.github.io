---
layout: post
title: "Limit Superior and Limit Inferior"
date: 2014-11-08 17:18:17 +0800
comments: true
categories: math
---

Problem
---

For sequences of numbers, *limit inferior* and *limit superior* are
defined as $\\liminf (a\_n):=\\sup\\\{\\inf\\\{a\_k:k \\ge n\\}\\}$
and $\\limsup (a\_n):=\\inf\\\{\\sup\\\{a\_k:k \\ge n\\}\\}$
respectively; for sequences of sets, they are defined as
$\\displaystyle \\bigcup\_\{n=1}^\{\\infty}
\\bigcap\_\{k=n}^\{\\infty} A\_k$ and $\\displaystyle
\\bigcap\_\{n=1}^\{\\infty} \\bigcup\_\{k=n}^\{\\infty} A\_k$
respectively.

**Why are they consistent?**

<!-- more -->

Discussion
---

It suffices to find a relation between \'<\' and \'⊆\': $\\\{x \\le
a\\} \\subseteq \\\{x \\le b\\} \\iff a \\le b$.

Claim: $\\displaystyle \\bigcup\_\{a \\in A} \\\{x \\le a\\} = \\\{x
\\le \\sup A\\}$.

*Proof*\:

\\\[
  \\begin\{aligned}
    & x \\in \\bigcup\_\{a \\in A} \\\{x \\le a\\} \\\\\\\\
    \\iff& x \\le a \\;\\forall a \\in A \\\\\\\\
    \\iff& x \\text\{ is a lower bound of } A \\\\\\\\
    \\iff& x \\le \\inf A
    \\end\{aligned}
\\\]

The last step is due to the defintion of infimum (*greatest* lower
bound).

With the above claim, one has

\\\[
  \\begin\{aligned}
    & \\bigcap\_\{n=1}^\{\\infty} \\bigcup\_\{k=n}^\{\\infty}
      \\\{x \\le a\_k\\} \\\\\\\\
    =& \\bigcap\_\{n=1}^\{\\infty}
      \\bigcup\_\{a \\in \\\{a\_k:k \\ge n\\}}\\\{x \\le a\\} \\\\\\\\
    =& \\bigcap\_\{n=1}^\{\\infty}
      \\\{ x \\le \\sup \\\{a\_k:k \\ge n\\}\\} \\\\\\\\
    =& \\\{x \\le \\inf\\sup \\\{a\_k:k \\ge n\\}\\}
  \\end\{aligned}
\\\]

Hence, one can see that $\\sup\\inf \\\{a\_k:k \\ge n\\} \\le
\\inf\\sup \\\{a\_k:k \\ge n\\}$ and $\\displaystyle
\\bigcup\_\{n=1}^\{\\infty} \\bigcap\_\{k=n}^\{\\infty} \\\{x \\le
a\_k\\} \\subseteq \\bigcap\_\{n=1}^\{\\infty}
\\bigcup\_\{k=n}^\{\\infty} \\\{x \\le a\_k\\}$ share something in
common. 
