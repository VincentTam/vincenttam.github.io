---
layout: post
title: "Limit of distances in metric spaces"
date: 2014-08-10 20:35:40 +0800
comments: true
categories: math
---

Let $X$ be a metric space and $g \in X$.  Suppose that sequence
$$\left\{ p_k \right\}$$ in $X$ converges to a point $p$ in $X$.
Then, $$\left\{d(p_k,q)\right\}$$ converges to $d(p,q)$.

$$
\begin{align}
  & \because \left\{ p_k \right\} \text{ converges to } p. \\
  & \therefore \forall \varepsilon \exists N \forall k (k \ge N
  \implies d(p_k,p) < \varepsilon) \\
  & \abs{d(p_k,q) - d(p,q)} < \varepsilon \iff d(p_k,q) - d(p,q) <
  \varepsilon \land d(p,q) - d(p_k,q) < \varepsilon \\
  & d(p_k,q) - d(p,q) \le d(p,p_k) \iff d(p_k,q) \le
  d(p,q) + d(p,p_k) \\
  & d(p,q) - d(p_k,q) \le d(p,p_k) \iff d(p,q) \le
  d(p_k,q) + d(p,p_k)
\end{align}
$$

(4), and (5) follows from the Triangular Inequality.  Apply (2) to (4)
and (5) to finish the proof.  Q.E.D.

Remark: Quantifications similar to (2) can be found in [Wikipedia]'s
entry for uniform continuity.

[Wikipedia]: https://en.wikipedia.org/wiki/Uniform_continuity#Local_continuity_versus_global_uniform_continuity
