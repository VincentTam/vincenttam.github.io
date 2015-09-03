---
layout: post
title: "Power Means with Infinite Exponents"
date: 2014-11-14 00:30:15 +0800
comments: true
categories: math
---

Half a month ago, I *didn't* know how to find <span class="myeqn"
markdown="0">$\displaystyle \lim_{n \to \infty}
\sqrt[n]{a^n+b^n}$</span>.  With the help from others, I could show
that the answer was <span class="myeqn" markdown="0">$\max\left\{ a,b
\right\}$</span>.  This inspired me to solve a question which had been
in my mind since I was F.3.

<span class="myeqn" markdown="0">
Suppose that $\displaystyle M_n (a_1,\dots,a_k) :=
\sqrt[n]{\frac{\sum_{i=1}^{k} a_i^n}{k}} \quad\forall\,n \in \N$, and
$a_i > 0\quad\forall\,i = 1, \dots,k$.  
Show that $\displaystyle \lim_{n \to \infty} M_n (a_1,\dots,a_k) =
\max\left\{ a_i \mid i = 1,\dots,k \right\}$ and $\displaystyle
\lim_{n \to -\infty} M_n = \min\left\{ a_i \mid i = 1,\dots,k
\right\}$.
</span>

*Proof*:

<span class="myeqn" markdown="0">
I'll use the facts that $\displaystyle \lim_{n \to \infty}
b^{\frac{1}{n}} = 1 \quad\forall\,b>0$.  (It can be proved by dividing
$b$ into $0 < b < 1$ and $b > 1$.  For $b > 1$, let $b^{\frac{1}{n}} =
1 + \delta_n$ for some $\delta_n > 0$.  It's a good exercise on the
definition of limits, the binomial expansion and elementary properties
of inequalities.)
</span>

<span class="myeqn" markdown="0">
Let $M := \max\left\{ a_i \mid i = 1,\dots,k \right\}$.  Note that
</span>

<div class="myeqn">
\[
\frac{M}{k^{\frac{1}{n}}} = \sqrt[n]{\frac{M^n}{k}} \le
\sqrt[n]{\frac{\sum_{i=1}^{k} a_i^n}{k}} \le
\sqrt[n]{\frac{kM^n}{k}} = M
\]
</div>

Therefore, taking limit as $n \to \infty$ and applying the Squeeze
Theorem, one has

<div class="myeqn">
\[
\lim_{n \to \infty} M_n (a_1,\dots,a_k) = M = \max\left\{ a_i \mid i =
1,\dots,k \right\}.
\]
</div>

I wrote similar arguments for the case $n \to -\infty$, but after I
read Wikipedia, I've learnt a quicker way to finish the question.

<span class="myeqn" markdown="0">
Replace $a_i$'s with $1/a_i$'s.  Then
</span>

<div class="myeqn">
\[
\begin{aligned}
\lim_{n \to \infty} \sqrt[n]{\frac{\sum_{i=1}^{k}
\left( \frac{1}{a_i} \right)^n}{k}} &= \max\left\{
\left.\frac{1}{a_i} \right\| i = 1,\dots,k \right\} \\
\lim_{n \to \infty} \sqrt[n]{\frac{\sum_{i=1}^{k}
a_i^{-n}}{k}} &= \frac{1}{\min\left\{ a_i \mid i =
1,\dots,k \right\}} \\
\lim_{n \to \infty} \left( \frac{\sum_{i=1}^{k}
a_i^{-n}}{k} \right)^{-\frac{1}{n}} &= \min\left\{ a_i
\mid i = 1,\dots,k \right\}
\end{aligned}
\]
</div>

<span class="myeqn" markdown="0">
Hence, $\displaystyle \lim_{n \to -\infty} M_n (a_1,\dots,a_k) =
\lim_{n \to -\infty} \sqrt[n]{\frac{\sum_{i=1}^{k} a_i^n}{k}} =
\min\left\{ a_i \mid i = 1,\dots,k \right\}$.
</span>
