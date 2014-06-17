---
layout: post
title: "Injectivity of Stable Mappings"
date: 2014-06-17 19:44:37 +0800
comments: true
categories: math
---

Two weeks ago, I revised calculus and read the proof of the Inverse
Function Theorem in the calculus textbook that I was reading.[^1]  The
Nonlinear Stablity Theorem is first applied to a continuously
differentiable function
$$\mathbf{F}: \mathcal{O} \rightarrow \mathbb{R}^n$$, where
$$\mathcal{O}$$ is an open subset of $$\mathbb{R}^n$$ and contains a
point $$\mathbf{x_*}$$ at which
$$\det \mathbf{DF}(\mathbf{x_*}) \ne 0$$, to construct a neighbourhood
$$U$$ of $$\mathbf{x_*}$$ and find $$c > 0$$ such that

$$
\|\mathbf{F}(\mathbf{u})-\mathbf{F}(\mathbf{v})\| \ge c \|\mathbf{u}-\mathbf{v}\| \quad \forall \mathbf{u},\mathbf{v} \in U.
$$

It's said that if $$V := \mathbf{F}(U)$$, then
$$\mathbf{F}: U \rightarrow V$$ is bijective.  The surjectivity is
obvious, but I *wasn't* smart enough to see the injectivity
immediately.  After a week, I realised that I overlooked the
discussion about invertible linear operators on $\mathbb{F}^n$ that
preceeded the introduction to the idea of *stable mapping*.  In fact,

$$
\forall \mathbf{u},\mathbf{v} \in U, \mathbf{F}(\mathbf{u}) = \mathbf{F}(\mathbf{v}) \iff \|\mathbf{F}(\mathbf{u})-\mathbf{F}(\mathbf{v})\| = 0.
$$

Then
$$\|\mathbf{u}-\mathbf{v}\| \le \|\mathbf{F}(\mathbf{u})-\mathbf{F}(\mathbf{v})\| / c = 0 \iff \mathbf{u}=\mathbf{v}$$.

---

[^1]: FitzPatrick's *Advanced Calculus*
