---
layout: post
title: "Error Bound of the Fixed Point of Contraction Mappings"
date: 2014-08-11 01:32:23 +0800
comments: true
categories: math
---

This afternoon, I read the proof of Banach fixed-point theorem in
*Wikipedia*.[^1]  It's said that

$$
\begin{equation}
  d(x^*,x_n) \le \frac{q^n}{1 - q} d(x_1,x_0).
  \label{eq:inf_err}
\end{equation}
$$

In the proofs for the lemmas, I could only find something like $x_k$
inside the brackets, but *not* $x^\*$.  Thus, I *couldn't* figure out
how one can derive inequality \eqref{eq:inf_err} from an inequality
derived in the proof of Lemma 2.

$$
\begin{equation}
  d(x_m,x_n) \le \frac{q^n}{1 - q} d(x_1,x_0), \text{ where } m > n.
  \label{eq:finite_err}
\end{equation}
$$

I googled for some notes, and found one which told me to take the
limit of the L.H.S. of inequality \eqref{eq:finite_err} as $m \to
\infty$.[^2] After looking at Corollary 2.4 in the PDF file in
footnote #2 for a while, I know what I've missed.

If $\left\\{ p\_k \right\\}$ converges to $p$,

$$
\begin{equation}
  \lim_{k \to \infty} d(p_k,q) = d(p,q)
    = d\left(\lim_{k \to \infty} p_k,q \right)
  \label{eq:dist_limit}
\end{equation}
$$

That's why I wrote the [previous post][PrevPost].

With equation \eqref{eq:dist_limit}, I can now derive
\eqref{eq:inf_err} from \eqref{eq:finite_err}.

$\displaystyle \because \lim\_{k \to \infty} x\_k = x\_\*$

$$
\begin{equation*}
  \begin{aligned}
    d(x^*,x_n) =& d\left( \lim_{k \to \infty} x_k,x_n \right) \\
    =& \lim_{k \to \infty} d(x_k,x_n) \\
    \le& \lim_{k \to \infty} \frac{q^n}{1 - q} d(x_1,x_0) \qquad
      \text{by \eqref{eq:finite_err}} \\
    =& \frac{q^n}{1 - q} d(x_1,x_0)
  \end{aligned}
\end{equation*}
$$

---
[^1]:
    Banach fixed-point theorem.  (2014, July 15).  In *Wikipedia, The
    Free Encyclopedia*.  Retrieved 17:34, August 10, 2014, from
    <http://en.wikipedia.org/w/index.php?title=Banach_fixed-point_theorem&oldid=617083697>

[^2]:
    Conrad, K.  (2014).  The contraction mapping theorem.  *Expository
    paper.  University of Connecticut, College of Liberal Arts and
    Sciences, Department of Mathematics*.  Retrieved August 10,2014,
    from
    <http://www.math.uconn.edu/~kconrad/blurbs/analysis/contraction.pdf>

[PrevPost]: /blog/2014/08/10/limit-of-distances-in-metric-spaces/ "Limit of Distances in Metric Spaces"
