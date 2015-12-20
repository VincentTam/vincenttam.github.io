---
layout: post
title: "$\\rm \\LaTeX$ Template for Simplex Tableaux"
date: 2015-12-20 20:19:54 +0800
comments: true
categories: [LaTeX]
---

Goal
---

To provide a good-looking template of simplex tableaux for users of
[Mathematics Stack Exchange][mathse].

<div class="myeqn">
\[
  \begin{array}{rrrrrrrr|l}
               & x_1 & x_2 & x_3 & x_4 & x_5 & x_6 &  x_7 &        \\ \hline
           x_4 &   0 &  -3 &   7 &   1 &   0 &   0 &    2 & 2M  -4 \\
           x_5 &   0 &  -9 &   0 &   0 &   1 &   0 &   -1 & -M  -3 \\
           x_6 &   0 &   6 &  -1 &   0 &   0 &   1 & -4^* & -4M +8 \\
           x_1 &   1 &   0 &   1 &   0 &   0 &   0 &    1 &      M \\ \hline
               &   0 &   1 &   1 &   0 &   0 &   0 &    2 &     2M \\
  \text{ratio} &     &     &   1 &     &     &     &  1/2 &
  \end{array}
\]
</div>

<!-- more -->

Solution
---

{% codeblock lang:tex A minimum working example %}
\begin{equation*}
  \begin{array}{rrrrrrrr|l}
               & x_1 & x_2 & x_3 & x_4 & x_5 & x_6 &  x_7 &        \\ \hline
           x_4 &   0 &  -3 &   7 &   1 &   0 &   0 &    2 & 2M  -4 \\
           x_5 &   0 &  -9 &   0 &   0 &   1 &   0 &   -1 & -M  -3 \\
           x_6 &   0 &   6 &  -1 &   0 &   0 &   1 & -4^* & -4M +8 \\
           x_1 &   1 &   0 &   1 &   0 &   0 &   0 &    1 &      M \\ \hline
               &   0 &   1 &   1 &   0 &   0 &   0 &    2 &     2M \\
  \text{ratio} &     &     &   1 &     &     &     &  1/2 &
  \end{array}
\end{equation*}
{% endcodeblock %}

[mathse]: http://math.stackexchange.com/
