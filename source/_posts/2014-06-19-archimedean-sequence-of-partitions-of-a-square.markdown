---
layout: post
title: "Archimedean Sequence of Partitions of a Square"
date: 2014-06-19 20:13:52 +0800
comments: true
categories: math
---

Suppose $f: \vect{I} \to \reals^2$, where $\vect{I} = [0,1] \times
[0,1]$,

$$
f(x,y) =
  \begin{cases}
    0 & \text{if } (x,y) \text{ is in } \vect{I} \text{ and } y\ge x\\
    1 & \text{if } (x,y) \text{ is in } \vect{I} \text{ and } y < x,
  \end{cases}
$$

$P\_k := \{0,1/k,\dots,1\}, \vect{P}\_k := (P\_k,P\_k)$.

It's said that
$\mathcal{U}(f,\vect{P}\_k) - \mathcal{L}(f,\vect{P}\_k) < 2/k.$

However, at first, I *don't* understand why there are fewer than $2k$
squares which contribute to the difference between
$\mathcal{U}(f,\vect{P}\_k)$ and $\mathcal{L}(f,\vect{P}\_k)$.  I
wrongly think that only the $k$ diagonal squares make such a
contribution.  Actually,
$\forall\,i=1,\dots,k-1,[i/k,(i+1)/k] \times [(i-1)/k,i/k]$ also
causes the difference between those two Darboux sums because

$$
\begin{align*}
  \inf\{f(\vect{x})\mid\vect{x}\in[i/k,(i+1)/k]\times[(i-1)/k,i/k]\}&=f(i/k,i/k)=0\text{ and}\\
  \sup\{f(\vect{x})\mid\vect{x}\in[i/k,(i+1)/k]\times[(i-1)/k,i/k]\}&=1.
\end{align*}
$$
