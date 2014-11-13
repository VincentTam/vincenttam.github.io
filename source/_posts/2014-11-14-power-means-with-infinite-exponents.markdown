---
layout: post
title: "Power Means with Infinite Exponents"
date: 2014-11-14 00:30:15 +0800
comments: true
categories: math
---

Half a month ago, I *didn't* know how to find $\\displaystyle
\\lim\_\{n \\to \\infty} \\sqrt\[n\]\{a^n+b^n}$.  With the help from
others, I could show that the answer was $\\max\\left\\\{ a,b
\\right\\}$.  This inspired me to solve a question which had been in
my mind since I was F.3.

Suppose that $\\displaystyle M\_n (a\_1,\\dots,a\_k) :=
\\sqrt\[n\]\{\\frac\{\\sum\_\{i=1}^\{k} a\_i^n}\{k}}
\\quad\\forall\\,n \\in \\naturals$.  Show that $\\displaystyle
\\lim\_\{n \\to \\infty} M\_n (a\_1,\\dots,a\_k) = \\max\\left\\\{
a\_i \\mid i = 1,\\dots,k \\right\\}$ and $\\displaystyle \\lim\_\{n
\\to -\\infty} M\_n = \\min\\left\\\{ a\_i \\mid i = 1,\\dots,k
\\right\\}$.

*Proof*\:

I'll use the facts that $\\displaystyle \\lim\_\{n \\to \\infty}
b^\{\\frac\{1}\{n}} = 1 \\quad\\forall\\,b>0$.  (It can be proved by
dividing $b$ into $0 < b < 1$ and $b > 1$.  For $b > 1$, let
$b^\{\\frac\{1}\{n}} = 1 + \\delta\_n$ for some $\\delta\_n > 0$.
It's a good exercise on the definition of limits, the binomial
expansion and elementary properties of inequalities.)

Let $M := \\max\\left\\\{ a\_i \\mid i = 1,\\dots,k \\right\\}$.  Note
that

\\\[
\\frac\{M}\{k^\{\\frac\{1}\{n}}} = \\sqrt\[n\]\{\\frac\{M^n}\{k}}
\\le \\sqrt\[n\]\{\\frac\{\\sum\_\{i=1}^\{k} a\_i^n}\{k}} \\le
\\sqrt\[n\]\{\\frac\{kM^n}\{k}} = M
\\\]

Therefore, taking limit as $n \\to \\infty$ and applying the Squeeze
Theorem, one has $\\displaystyle \\lim\_\{n \\to \\infty} M\_n
(a\_1,\\dots,a\_k) = M = \\max\\left\\\{ a\_i \\mid i = 1,\\dots,k
\\right\\}$.

I wrote similar arguments for the case $n \\to -\\infty$, but after I
read Wikipedia, I've learnt a quicker way to finish the question.

Replace $a\_i$'s with $1/a\_i$'s.  Then

\\\[
\\begin\{aligned}
\\lim\_\{n \\to \\infty} \\sqrt\[n\]\{\\frac\{\\sum\_\{i=1}^\{k}
\\left( \\frac\{1}\{a\_i} \\right)^n}\{k}} &= \\max\\left\\\{
\\left.\\frac\{1}\{a\_i} \\right\| i = 1,\\dots,k \\right\\} \\\\\\\\
\\lim\_\{n \\to \\infty} \\sqrt\[n\]\{\\frac\{\\sum\_\{i=1}^\{k}
a\_i^\{-n}}\{k}} &= \\frac\{1}\{\\min\\left\\\{ a\_i \\mid i =
1,\\dots,k \\right\\}} \\\\\\\\
\\lim\_\{n \\to \\infty} \\left( \\frac\{\\sum\_\{i=1}^\{k}
a\_i^\{-n}}\{k} \\right)^\{-\\frac\{1}\{n}} &= \\min\\left\\\{ a\_i
\\mid i = 1,\\dots,k \\right\\}
\\end\{aligned}
\\\]

Hence, $\\displaystyle \\lim\_\{n \\to -\\infty} M\_n
(a\_1,\\dots,a\_k) = \\lim\_\{n \\to -\\infty}
\\sqrt\[n\]\{\\frac\{\\sum\_\{i=1}^\{k} a\_i^n}\{k}} = \\min\\left\\\{
a\_i \\mid i = 1,\\dots,k \\right\\}$.
