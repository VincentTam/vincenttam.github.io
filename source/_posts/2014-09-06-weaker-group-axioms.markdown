---
layout: post
title: "Weaker Group Axioms"
date: 2014-09-06 11:12:06 +0800
comments: true
categories: math
---

The following axioms seem to be weaker.

Let $G$ be a set, and $\*: G \times G \to G$ be a binary operation.

Associativity
: $\forall a,b,c \in G, (a \* b) \* c = a \* (b \* c)$

Existence of *left* identity
: $\exists e \in G \text{ s.t. } \forall a \in G, e \* a = a$

Existence of *left* inverse
: $\forall a \in G, \exists a^{-1} \in G \text{ s.t. } a^{-1} \* a =
  e$

Claim: They're actually *equivalent* definition of a group.

<!-- more -->

*Proof*

Existence of inverse
: We try to show that a left inverse of a group element is *also* a
  right inverse of the group element.

  $\forall a \in G,$
  \\[
  \begin{split}
  a * a^{-1} &= e * (a * a^{-1}) &\qquad \text{(existence of left
  identity)}\\\\\\\\
  &= ((a^{-1})^{-1} * a^{-1}) * (a * a^{-1}) &\qquad \text{(existence
  of left identity of $a^{-1}$)}\\\\\\\\
  &= (((a^{-1})^{-1} * a^{-1}) * a) * a^{-1} &\qquad
  \text{(associativity)}\\\\\\\\
  &= ((a^{-1})^{-1} * (a^{-1} * a)) * a^{-1} &\qquad
  \text{(associativity)}\\\\\\\\
  &= ((a^{-1})^{-1} * e) * a^{-1} &\\\\\\\\
  &= (a^{-1})^{-1} * (e * a^{-1}) &\qquad
  \text{(associativity)}\\\\\\\\
  &= (a^{-1})^{-1} * a^{-1} &\\\\\\\\
  &= e &
  \end{split}
  \\]
  ∴$\forall a \in G, \exists a^{-1} \in G \text{ s.t. } a \* a^{-1} =
  e = a^{-1} \* a.$

Existence of identity
: Similarly, we try to show that a left identity is *also* a right
  identity.

  $\forall a \in G,$
  \\[
  \begin{split}
  a * e &= a * (a^{-1} * a) &\qquad \text{(existence of inverse of
  $a$)}\\\\\\\\
  &= (a * a^{-1}) * a &\qquad \text{(associativity)}\\\\\\\\
  &= e * a &\\\\\\\\
  &= a&
  \end{split}
  \\]
  ∴$\exists e \in G \text{ s.t. } \forall a \in G, a \* e = e \* a =
  a$.

An application in secondary school mathematics
---

In high school, to show that $B \in M\_{n \times n}(\R)$ is an inverse
of $A \in M\_{n \times n}(\R)$[^1], one is taught to show *both* $AB =
I$ and $BA = I$.  Calculating $AB$ and $BA$ is hard in general.

Taking $G = \GL(n,\R)$ and regard $\*$ as matrix multiplication, one
can just show that $AB = I$ by direct calculation and then conclude
that $BA = I$, and vice versa.

---
[^1]: To be more general, $\R$ can be replaced with $\F$.
