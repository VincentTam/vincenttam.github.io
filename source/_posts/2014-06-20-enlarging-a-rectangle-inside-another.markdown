---
layout: post
title: "Enlarging a Rectangle inside Another"
date: 2014-06-20 14:28:14 +0800
comments: true
categories: math
---

$\vect{I}$ is a generalized rectangle in $\reals^n$ with edges of
length $l_i$.  $\vect{J} \subseteq \vect{I}$ is the main character
here.  If the edges of $\vect{J}$ is allowed to coincide with those of
$\vect{I}$, then the problem is trivial.

**How about finding $\vect{J} \subseteq \interior \vect{I}$ such that
$\volume \vect{I} - \volume \vect{J} < \varepsilon$?**

<!-- more -->

Goal: Choose a big $L$ that depends on $\vect{I}$ and
$\varepsilon$.[^1]

$$
\begin{equation*}
\begin{split}
\volume \vect{J}
:=& \prod_{i = 1}^n \left( l_i - \frac{\varepsilon}{L} \right) \\
\volume \vect{I}
=& \prod_{i = 1}^n l_i \\
=& \prod_{i = 1}^n \left [ \left( l_i - \frac{\varepsilon}{L} \right)
+ \frac{\varepsilon}{L} \right] \\
=& \left[ \prod_{i = 1}^n \left( l_i - \frac{\varepsilon}{L} \right)
\right] \\
=& \left[ \prod_{i = 1}^n \left( l_i - \frac{\varepsilon}{L} \right)
\right] + \sum_{i = 1}^{n \choose 1} \left( l_i -
\frac{\varepsilon}{L} \right) \left( \frac{\varepsilon}{L}
\right)^{n - 1} \\
& + \sum_{i = 2}^{n - 1} \sum_{\left\{ a_j \right\} \in S_i} \left[
\prod_{j = 1}^i \left( l_{a_j} - \frac{\varepsilon}{L} \right)
\right] \left( \frac{\varepsilon}{L} \right)^{n - i} + \left(
\frac{\varepsilon}{L} \right)^n,
\end{split}
\end{equation*}
$$

where $S\_i$ is a set of $i$ numbers chosen from $\left\\{ 1,\dots,n
\right\\}$, and $\left\\{ a\_j \right\\}$ is an increasing sequence in
$S\_i$.

I assumed that $n > 2$.  For $n = 2$, deleting the third term in the
last step will do.  For $n = 1$, the problem is trivial.

Then
 
$$
\begin{equation*}
\begin{split}
\volume \vect{I}
=& \volume \vect{J} + \sum_{i = 1}^{n - 1} \sum_{\left\{ a_j \right\}
\in S_i} \left[ \prod_{j = 1}^i \left( l_{a_j} - \frac{\varepsilon}{L}
\right) \right] \left( \frac{\varepsilon}{L} \right)^{n - i} + \left(
\frac{\varepsilon}{L} \right)^n \\
<& \volume \vect{J} + \sum_{i = 1}^{n - 1} \sum_{\left\{ a_j \right\}
\in S_i} \left( \prod_{j = 1}^n l_{a_j} \right) \left(
\frac{\varepsilon}{L} \right)^{n - i} + \left( \frac{\varepsilon}{L}
\right)^n \\
=& \volume \vect{J} + \sum_{i = 1}^{n - 1} \sum_{\left\{ a_j \right\}
\in S_i} \volume \vect{I} \, \left( \frac{\varepsilon}{L}
\right)^{n - i} + \left( \frac{\varepsilon}{L} \right)^n \\
=& \volume \vect{J} + \sum_{i = 1}^{n - 1} {n \choose i} \volume
\vect{I} \, \left( \frac{\varepsilon}{L} \right)^{n - i} + \left(
\frac{\varepsilon}{L} \right)^n
\end{split}
\end{equation*}
$$

Rearanging the above inequality gives

$$
\volume \vect{I} - \volume \vect{J} < \sum_{i = 1}^{n - 1} {n \choose
i} \volume \vect{I} \, \left( \frac{\varepsilon}{L} \right)^{n - i} +
\left( \frac{\varepsilon}{L} \right)^n
$$

Assume $\varepsilon < 1, L \ge 1$, and let

$$M := \max_{1 \le i \le n - 1} {n \choose i}$$.

Then we have

$$
\begin{equation*}
\begin{split}
  \volume \vect{I} - \volume \vect{J}
  <& \left( \frac{\varepsilon}{L} \right)^n + \sum_{i = 1}^{n - 1} {n
  \choose i} \volume \vect{I} \, \left( \frac{\varepsilon}{L}
  \right)^{n - i} \\
  =& \frac{\varepsilon}{L} + M (n - 1) \volume \vect{I}
  \frac{\varepsilon}{L} \\
  =& [1 + M (n - 1) \volume \vect{I}] \frac{\varepsilon}{L}
\end{split}
\end{equation*}
$$

Hence, if $L \ge 1 + M (n - 1) \volume \vect{I}$, then
$\volume \vect{I} - \volume \vect{J} < \varepsilon$.

---
[^1]: $L$ is used to connote "large number".
