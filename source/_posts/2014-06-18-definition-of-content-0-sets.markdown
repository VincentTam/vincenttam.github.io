---
layout: post
title: "Definition of Content 0 Sets"
date: 2014-06-18 16:16:31 +0800
comments: true
categories: math
---

Motivation
---

I saw a minor difference the definition of Jordan content 0 sets
between two books.

Some basic definitions
---

I make this list *for my reference only*.  If I'm asked the *true*
meaning of some geometric concepts, such as *boundary*, by someone
*seriously*, then I can quickly refer to this list in order to remind
myself what ideas should be introduced.

<!-- more -->

Unless otherwise specified, assume that
$$A\in\mathbb{R}^n,\mathbf{x},\mathbf{x_0},\mathbf{u},\mathbf{v}\in\mathbb{R}^n,\mathbf{u}_i\in\mathbb{R}^n\,\forall\,i\in\mathbb{N}$$.

Norm
: The *norm* of $$\mathbf{x}$$ is defined as

  $$\|\mathbf{x}\| := \sqrt{\sum_{i=1}^n x_i^2}.$$

Distance
: The *distance* between $$\mathbf{u}$$ and $$\mathbf{v}$$ is
  $$\|\mathbf{u}-\mathbf{v}\|$$.

Open ball
: \$$\mathcal{B}_r (\mathbf{x}_0):=\{\mathbf{x}\mid\|\mathbf{x}-\mathbf{x}_0\|<r\}$$

Interior point
: $$\mathbf{u}$$ is an *interior point in* $A$ if
  $$\,\exists\,r>0\,\text{s.t.}\,\mathcal{B}_r(\mathbf{u}) \subseteq A$$.
  [^1]

Interior of a set
: \$$\operatorname{int} A := \{\mathbf{u}\mid\exists\,r>0\,\text{s.t.}\,\mathcal{B}_r(\mathbf{u})\subseteq A\}$$

Open set
: $A$ is *open* if $$A = \operatorname{int} A$$.

Limit of $$\{\mathbf{u}_k\}$$
: \$$\forall\,\varepsilon>0,\exists\,K\in\mathbb{N}\,\text{s.t.}\,\forall\,k\ge K,\|\mathbf{u}_k-\mathbf{u}\|<\varepsilon$$

  We denote it as

  $$\lim_{k\to\infty}\mathbf{u}_k=\mathbf{u}.$$

Closed set
: $$\mathbf{u}_k\in A\,\forall\,k\in\mathbb{N},\lim_{k\to\infty}\mathbf{u}_k=\mathbf{u}\implies\mathbf{u}\in A$$

Boundary
: \$$\partial A := \{\mathbf{x}\mid\forall\,r>0,\exists\,\mathbf{u}\in A,\mathbf{v}\notin A\,\text{s.t.}\,\mathbf{u},\mathbf{v}\in\mathcal{B}_r(\mathbf{x})\}$$

Exterior point
: $$\mathbf{u}$$ is an *exterior point in* $A$ if
  $$\,\exists\,r>0\,\text{s.t.}\,\mathcal{B}_r(\mathbf{u}) \subseteq \mathbb{R}^n\setminus A$$.

Exterior of a set
: \$$\operatorname{ext} A := \{\mathbf{u}\mid\exists\,r>0\,\text{s.t.}\,\mathcal{B}_r(\mathbf{u})\subseteq \mathbb{R}^n\setminus A\}$$

Some claims
---

If a subset $A$ of $$\mathbb{R}^n$$ is contained in a closed subset
$B$ of $$\mathbb{R}^n$$, $$\partial A \subseteq B$$.
{: #claim1}

*Proof*. Let
$$\mathbf{u}\in\partial A.\forall\,k\in\mathbb{N},\exists\,\mathbf{u}_k\in\mathcal{B}_{1/k}(\mathbf{u})\cap A$$.
Then

$$\lim_{k\to\infty}\mathbf{u}_k=\mathbf{u}$$

because
$$\forall\,\varepsilon>0,K>1/\varepsilon,k\ge K\implies\|\mathbf{u}-\mathbf{u}_k\|<1/k\le\varepsilon$$.  
$$\because\mathbf{u}_k\in A\,\forall\,k\in\mathbb{N}$$,

$$\lim_{k\to\infty}\mathbf{u}_k=\mathbf{u},$$

and $B$ is closed.  
$$\therefore\mathbf{u}\in B$$.  
Q.E.D.

\$$\mathbb{R}^n=\operatorname{int} A\sqcup\partial A\sqcup\operatorname{ext} A$$

*Proof*. Let $$\mathbf{x}\notin\operatorname{int} A$$.
Then
$$\forall\,r>0,\exists\,\mathbf{u}\in\mathcal{B}_r(\mathbf{x})\setminus A$$.

Case 1:
$$\forall\,r>0,\mbox{there also exists}\,\mathbf{v}\in\mathcal{B}_r(\mathbf{x})\cap A$$.  
Putting the two statements about $$\mathbf{u}$$ and $$\mathbf{v}$$
together, we get
$$\forall\,r>0,\exists\,\mathbf{u}\notin A,\mathbf{v}\in A\,\text{s.t.}\,\mathbf{u},\mathbf{v}\in\mathcal{B}_r(\mathbf{x})$$.  
$$\therefore\mathbf{x}\in\partial A$$

Case 2:
$$\neg\,(\forall\,r>0,\exists\,\mathbf{v}\in\mathcal{B}_r(\mathbf{x})\cap A)$$  
i.e. 
$$\exists\,r>0\,\text{s.t.}\,\nexists\,\mathbf{v}\in\mathcal{B}_r(\mathbf{x})\cap A$$.  
$$\therefore\exists\,r>0\,\text{s.t.}\,\mathbf{v}\in A\uparrow\mathbf{v}\in\mathcal{B}_r(\mathbf{x})$$[^2]  
i.e.
$$\exists\,r>0\,\text{s.t.}\,\mathbf{v}\in\mathcal{B}_r(\mathbf{x})\implies\mathbf{v}\notin A$$  
$$\therefore\exists\,r>0\,\text{s.t.}\,\mathcal{B}_r(\mathbf{x})\subseteq\mathbb{R}^n\setminus A$$  
Hence $$\mathbf{x}\in\operatorname{ext} A$$.  
Q.E.D.

From the definition of the *exterior* of $A$, it's clear that
$$\operatorname{ext} A \subseteq \mathbb{R}^n \setminus A$$.  The
reason is that $$\mathbf{u}\in\mathcal{B}_r(\mathbf{u})$$.  If
$$\mathbf{u}\in\operatorname{ext} A$$, then
$$\exists r>0\,\text{s.t.}\,\mathcal{B}_r(\mathbf{u})\subseteq\mathbb{R}^n\setminus A$$.
Thus,
$$\mathbf{u}\in\mathcal{B}_r(\mathbf{u})\subseteq\mathbb{R}^n\setminus A\implies\mathbf{u}\notin A$$.
{: #trivial1}

Another trivial fact is from the definition of the *interior* of $A$.
$$\operatorname{int} A \subseteq A$$ due to the same reason for
$$\operatorname{ext} A \subseteq \mathbb{R}^n \setminus A$$—
$$\mathbf{u}\in\mathcal{B}_r(\mathbf{u})$$.
$$\mathbf{u}\in\operatorname{int} A\implies\exists r>0\,\text{s.t.}\,\mathcal{B}_r(\mathbf{u})\subseteq A$$.
Thus,
$$\mathbf{u}\in\mathcal{B}_r(\mathbf{u})\subseteq A\implies\mathbf{u}\in A$$.
{: #trivial2}

More definitions
---

Unless otherwise specified, assume that
$$a_i,b_i \in \mathbb{R}\,\forall\,i \in \mathbb{N}$$.

Closure
: \$$\bar{A} := \operatorname{int} A \cup \partial A$$

Bounded set
: \$$\exists\,M\ge 0\,\text{s.t.}\,\|\mathbf{x}\|\ge M\,\forall\,\mathbf{x}\in A$$

Generalized rectangle
: $$\mathbf{I} := \mathbf{I_1} \times \dots \times \mathbf{I_n}$$,
  where $$\mathbf{I_i} := [a_i,b_i]\,\forall\,i \in \mathbb{N}$$.

Volume of generalized rectangle
: $$\operatorname{vol} \mathbf{I} := \prod_{i=1}^n (b_i - a_i)$$

From the definition of the closure of a set, we can conclude that
$$A \subseteq \bar{A}$$ since
$$\mathbb{R}^n=\operatorname{int} A\sqcup\partial A\sqcup\operatorname{ext} A$$
and $$A \cap \operatorname{ext} A = \varnothing$$.
([proved](#trivial1))  Thus,
$$A \subseteq \operatorname{int} A \sqcup \partial A = \bar{A}$$.

We can extend the [first claim](#claim1) like this.

> If a subset $A$ of $$\mathbb{R}^n$$ is contained in a closed subset
> $B$ of $$\mathbb{R}^n$$, $$\bar{A} \subseteq B$$.
{: #ExtendedClaim}

*Proof*.  $$\bar{A} := \operatorname{int} A \cup \partial A$$.  By the
[first claim](#claim1), it's already known that
$$\partial A \subseteq B$$, so it remains to show that
$$\operatorname{int} A \subseteq B$$.  Since
$$\operatorname{int} A \subseteq A$$ ([proved](#trivial2)) and it's
given that $$A \subseteq B$$, we're done!  
Q.E.D.

Comparing the definitions
---

That's the definition of *Jordan content 0* sets.

Suppose $D$ is a bounded subset of $$\mathbb{R}^n$$.

$$\forall\,\varepsilon>0,\exists\,\text{generalized rectangle}\,\mathbf{I}_1,\dots,\mathbf{I}_m\subseteq\mathbb{R}^n\,\text{s.t.}\,D\subseteq\bigcup_{j=1}^m \mathbf{I}_j\;\text{and}\,\sum_{j=1}^m \operatorname{vol} \mathbf{I}_j<\varepsilon$$

I have read another version of the definition, and the only difference
between those two versions is that $D$ is replaced by $$\bar{D}$$.  It
took me a short while to understand why this is OK.

First, $$\mathbf{I}_j$$ is closed for each $j$ since it's the
Cartesian product of closed intervals.

$$\bigcup_{j=1}^m \mathbf{I}_j\;\text{is also closed. (DeMorgan's Law)}$$

Hence, by the [extended claim](#ExtendedClaim), one can also write

$$\bar{D} \subseteq \bigcup_{j=1}^m \mathbf{I}_j$$

instead of $D$ in the above definition.

---
[^1]:
    By writing "$$\subseteq$$", I mean "subset" here, but *not*
    "proper subset".

    According to 
    [$$\mathsf{Pr}\infty\mathsf{fWiki}$$][ProofWikiSubset], the use of
    "$$\subset$$" to denote "subset" is "not recommended", though the
    $$\rm \LaTeX$$ code for "$$\subset$$" is `$$\subset$$`.

[^2]: 
    According to [$$\mathsf{Pr}\infty\mathsf{fWiki}$$][ProWikiNand],
    "$$\uparrow$$" means "nand".

[ProofWikiSubset]: https://proofwiki.org/wiki/Symbols:Set_Operations_and_Relations#Subset.2C_Superset
[ProWikiNand]: https://proofwiki.org/wiki/Symbols:Logical_Operators#Nand
