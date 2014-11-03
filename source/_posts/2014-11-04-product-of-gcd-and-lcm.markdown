---
layout: post
title: "Product of GCD and LCM"
date: 2014-11-04 00:00:31 +0800
comments: true
categories: math
external-url: https://proofwiki.org/wiki/Product_of_GCD_and_LCM
---

In ProokWiki's first proof, it has taken me some time to understand.
I often write $d=\gcd(a,b)$, $a=a'd$, $b=b'd$ for some $a',b' \in
\integers\_{>0}$, and $n$ as *any* common multiple of $a$ and $b$.
Then $n=q\_1 a=q\_2 b$ for some $q\_1,q\_2 \in \integers$.  The letter
$q$ connotes *quotient*.  To show that $\lcm(a,b) \times \gcd(a,b) =
ab$, it suffices to show that

\begin{gather}
  a \left | \frac{ab}{d} \right. \land 
    b \left | \frac{ab}{d} \right. \label{eq:isLCM}\\\\\\\\
  a|n \land b|n \implies\left.\frac{ab}{d}\right|n \label{eq:leastLCM}
\end{gather}

Equations \eqref{eq:isLCM} and \eqref{eq:leastLCM} mean that "$ab/d$
is *a* LCM of $a$ and $b$" and "$ab/d$ is the *least* LCM of $a$ and
$b$" respectively.

Equation \eqref{eq:isLCM} is very easy to check since $\displaystyle
\frac{ab}{d} = a'b = ab'$.

By Bézout's Identity, $ax+by=d$ for some $x,y \in \integers$.

Since what we want is $\displaystyle \frac{ab}{d} (\dots) = n$, we
multiply both sides of the above equation by $\displaystyle
\frac{n}{d}$.

\\[
\begin{aligned}
  \frac{axn+byn}{d}=n\\\\\\\\
  \frac{axbq\_2+byaq\_1}{d}=n\\\\\\\\
  \left( \frac{ab}{d} \right) (xq\_2+yq\_1) = n
\end{aligned}
\\]

Hence \eqref{eq:leastLCM} is proved.
