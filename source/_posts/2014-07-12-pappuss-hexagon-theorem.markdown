---
layout: post
title: "Pappus's Hexagon Theorem"
date: 2014-07-12 23:48:36 +0800
comments: true
categories: math
---

{% img center /images/posts/PappusHexThm/PappusHexThm.svg 600 %}  
[Source](/downloads/code/PappusHexThm.tex)

Suppose that points $A,B$ and $C$ lie on the same straight line, and
$D,E$ and $F$ lie on *another* one.  Draw line segments
$AE,BD,BF,CE,AF$ and $CD$.  
Let <span class="grp1">$P$</span> be the intersection point of $AE$
and $BD$.  
Let <span class="grp1">$Q$</span> be the intersection point of $AF$
and $CD$.  
Let <span class="grp1">$R$</span> be the intersection point of $BF$
and $CE$.  
Then <span class="grp1">$P,Q$</span> and <span class="grp1">$R$</span>
are *collinear*.  (i.e.  The red dashed line and the red solid line
are collinear.)

<!-- more -->

## Discussion

To prove that three points are collinear, Menelaus's Theorem is often
useful.  To apply the theorem to this problem, (TL;DR;C image below)
one needs to find a triangle such that *exactly* one of points
<span class="grp1">$P,Q$</span> and <span class="grp1">$R$</span> lies on the *line* formed by
two vertices of the triangle, but *not* on the *segment* connecting
those two vertices, while each of the remaining two points lies on a
segment whose extension *doesn't* contain any one of points
<span class="grp1">$P,Q$</span> and <span class="grp1">$R$</span>.

{% img center /images/posts/PappusHexThm/MenelausThm.svg 600 %}  
[Source](/downloads/code/MenelausThm.tex)

It is obvious that points <span class="grp1">$Q$</span> and <span class="grp1">$R$</span>
divide some segments internally.  However, <span class="grp1">$P$</span> *also* has
such property.  How can one find a segment through <span class="grp1">$P$</span>
such that <span class="grp1">$P$</span> *externally* divides the segment?

The answer can be find out by a careful observation of the two
segments that pass through <span class="grp1">$P$</span>.  Since we want a segment
so that <span class="grp1">$P$</span> *externally* divides the segment, we need at
least two points on a line through <span class="grp1">$P$</span>.  Moreover, those
two points should be *on the same side of the line relative to
<span class="grp1">$P$</span>*.  This led us to define a *new* point.  
Let <span class="grp2">$S$</span> be the intersection of $AF$ and $BD$.

{% img center /images/posts/PappusHexThm/PappusHexThm1.svg 600 %}  
[Source](/downloads/code/PappusHexThm1.tex)

Then the light blue triangle $\triangle B\color{blue}{S}F$ is what we
need.

## The proof

Since I have been tired of drawing figures using TikZ and typing
equations with $\rm \LaTeX$, I *don't* want to illustrate or prove any
one of the four cases of Co-side Theorem, on which this proof heavily
depends.  I refer readers to Zhang J. Z.'s work.[^1]

From the above figure, it's clear that what we need to show is

$$
\begin{equation}
  \frac{B\color{red}{P}}{\color{red}{P}\color{blue}{S}} \cdot
    \frac{\color{blue}{S}\color{red}{Q}}{\color{red}{Q}F} \cdot
    \frac{F\color{red}{R}}{\color{red}{R}B} = -1
\end{equation}
$$

**The main idea of this proof is simple: reduce everything to what is
given.**  Thus, points <span class="grp1">$P,Q,R$</span> and <span
class="grp2">$S$</span> (i.e. <span class="grp1">red</span> and <span
class="grp2">blue</span> points) should be eventually *eliminated*.
The tool that we're going to use is Co-side Theorem.

$$
\begin{equation}
  \frac{F\color{red}{R}}{\color{red}{R}B} = 
    \frac{S_{\triangle CEF}}{S_{\triangle CEB}} \\
  \frac{\color{blue}{S}\color{red}{Q}}{\color{red}{Q}F} = 
    \frac{S_{\triangle CD\color{blue}{S}}}{S_{\triangle CDF}}
    \label{eq:3} \\
  \frac{B\color{red}{P}}{\color{red}{P}\color{blue}{S}} = 
    -\frac{S_{\triangle AEB}}{S_{\triangle AE\color{blue}{S}}}
\end{equation}
$$

On the right-hand side of (2), one can see that the <span
class="grp1">red</span> points are gone, and we still need to remove
the <span class="grp2">$S$</span>.  Moreover, dealing with length of
segments is *easier* than their area because the former and the later
are one-dimensional and two-dimensional quantities respectively.
Therefore, we rearrange the area of the triangles to get

$$
\begin{align}
  \frac{B\color{red}{P}}{\color{red}{P}\color{blue}{S}} \cdot
    \frac{\color{blue}{S}\color{red}{Q}}{\color{red}{Q}F} \cdot
    \frac{F\color{red}{R}}{\color{red}{R}B} &=
    -\frac{S_{\triangle AEB}}{S_{\triangle AE\color{blue}{S}}} \cdot
    \frac{S_{\triangle CD\color{blue}{S}}}{S_{\triangle CDF}} \cdot
    \frac{S_{\triangle CEF}}{S_{\triangle CEB}} \\
  &= -\frac{S_{\triangle AEB}}{S_{\triangle CEB}} \cdot
    \frac{S_{\triangle CEF}}{S_{\triangle CDF}} \cdot
    \frac{S_{\triangle CD\color{blue}{S}}}
    {S_{\triangle AE\color{blue}{S}}} \\
  &= -\frac{AB}{CB} \cdot -\frac{EF}{DF} \cdot
    \frac{S_{\triangle CD\color{blue}{S}}}
    {S_{\triangle AE\color{blue}{S}}}
\end{align}
$$

However, those two triangles in (5) have *no* common side.  Thus, we
need to work out the area of the two coloured triangles in the figure
below.  (i.e. $\triangle CD\color{blue}{S}$ and $\triangle
AE\color{blue}{S}$)

{% img center /images/posts/PappusHexThm/PappusHexThm2.svg 600 %}  
[Source](/downloads/code/PappusHexThm2.tex)

From equation (5), observe that $AB/CB$ and $EF/DF$ are independent
from each other.  Then, we need to relate the area of those two
colored triangles to the ratios of segment lengths in (5).

I still use Co-side Theorem since I *can't* think of another theorem
to eliminate <span class="grp2">S</span>.  In order to use that
theorem, one has to find another triangle and compare it with one of
those two coloured triangles.  I've looked at the picture and the
symbols to find out some clues.  Since the letter $C$ is present in
both $AB/CB$ and $\triangle CD\color{blue}{S}$, $C$ *can't* be the
"common side" of $\triangle CD\color{blue}{S}$ and the triangle that
we want.  Looking at $\triangle CD\color{blue}{S}$ again, it's obvious
that $D\color{blue}{S}$ is the "common side" because $D$,
<span class="grp2">$S$</span> and $B$ are collinear.

{% img center /images/posts/PappusHexThm/PappusHexThm3.svg 600 %}
[Source](/downloads/code/PappusHexThm3.tex)

$$
\begin{align}
  \frac{S_{\triangle CD\color{blue}{S}}}
    {S_{\triangle AD\color{blue}{S}}} &= \frac{CB}{BA}\text{, or} \\
  S_{\triangle CD\color{blue}{S}} &= \frac{CB}{BA} \cdot
    S_{\triangle AD\color{blue}{S}}
\end{align}
$$

The $CB/BA$ in (7) cancels the $AB/CB$ in (5).  Therefore, we're
almost done!

{% img center /images/posts/PappusHexThm/PappusHexThm4.svg 600 %}
[Source](/downloads/code/PappusHexThm4.tex)

$$
\begin{align}
  \frac{S_{\triangle AE\color{blue}{S}}}
    {S_{\triangle AD\color{blue}{S}}} &= -\frac{EF}{FD}\text{, or} \\
  S_{\triangle AE\color{blue}{S}} &= -\frac{EF}{FD} \cdot
    S_{\triangle AD\color{blue}{S}}
\end{align}
$$

Substituting (7) and (9) into (5), we get
$$
\frac{B\color{red}{P}}{\color{red}{P}\color{blue}{S}} \cdot
  \frac{\color{blue}{S}\color{red}{Q}}{\color{red}{Q}F} \cdot
  \frac{F\color{red}{R}}{\color{red}{R}B}
  = -\frac{AB}{CB} \cdot -\frac{EF}{DF} \cdot
  \frac{\frac{CB}{BA} \cdot S\_{\triangle AD\color{blue}{S}}}
  {-\frac{EF}{FD} \cdot S\_{\triangle AD\color{blue}{S}}} = -1
$$

Hence, by Menelaus's Theorem, we can conclude that
<span class="grp1">$P,Q$</span> and <span class="grp1">$R$</span> are
*collinear*, and prove Pappus's Hexagon Theorem.

---
[^1]:
    Chou, S. C., Gao, X. S., & Zhang, J. Z. (1993, June). *Automated
    production of traditional proofs for constructive geometry
    theorems*.  In Logic in Computer Science, 1993. LICS'93.,
    Proceedings of Eighth Annual IEEE Symposium on (pp. 48-56). IEEE.
    ([URL][coside])

[coside]: http://www.researchgate.net/publication/226332702_Automated_production_of_traditional_proofs_for_theorems_in_Euclidean_geometry_I._The_Hilbert_intersection_point_theorems/file/60b7d51a5db85afdd3.pdf
