---
layout: post
title: "$L^\\infty$ is not separable"
date: 2016-04-02 17:00:13 +0800
comments: true
categories: [math]
---

This Wednesday, I read a proof about the non-separability of
$L^\infty$ spaces.  To simplify things, I assume that it's defined on
sequences.

<div class="myeqn">
\[
  L^\infty \triangleq \{ (x_n)_{n \in \N} \mid \exists\,M \ge 0
  \text{ such that } \forall\,n \in \N, \abs{x_n} \le M \}
\]
</div>

I have written down the uncountable set (see Cantor's diagonal
argument)

<div class="myeqn">
\[
  D \triangleq \{ (x_n)_{n \in \N} \mid \forall\,n \in \N, x_n=\pm1 \}
\]
</div>

in my notes.  I understand

<div class="myeqn">
\[
  B(x,1) \cap B(y,1) = \varnothing \quad \forall \, x,y \in D
  \text{ with } x \ne y.
\]
</div>

Then, my teacher said that the reason was like the Pigeon-Hole
Principle.  I got puzzled when I was revising the proof.  In fact, in
the above equation, an element in a *dense* set $C$ can be found in
each open ball $B(x,1)$.  Since the open balls $B(x,1)$ are
*disjoint*, $C$ has *uncountably* many elements.  Hence, $L^\infty$ is
non-separable.
