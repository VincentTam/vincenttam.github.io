---
layout: post
title: "Writing Dollar Signs on Octopress Blogs with MathJax Support"
date: 2014-06-16 22:14:02 +0800
comments: true
categories:
- Octopress
- MathJax
---

Problem
---

When I was writing [my previous post][PrevPost], I typed three `$` in
one single paragraph.  Although I'd tried adding `\` in front of
`$`[^1], part of the words between `$` are still parsed by MathJax.

Solution
---

According to another page in MathJax's official documentation, this
problem can be solved by surrounding the dollar sign by a span tag
with class `tex2jax_ignore`[^2], i.e. `<span
class="tex2jax_ignore">$</span>`.

---

[^1]: MathJax TeX and LaTeX Support—MathJax 2.4 documentation ([URL][MathJaxDoc1])
[^2]: The tex2jax Preprocessor—MathJax 2.4 documentation ([URL][MathJaxDoc2])

[PrevPost]: /blog/2014/06/16/noscript-abe-rules-for-wlan-web-portal-login/ "NoScript ABE Rules for WLAN Web Portal Login"
[MathJaxDoc1]: http://docs.mathjax.org/en/latest/tex.html#tex-and-latex-math-delimiters
[MathJaxDoc2]: http://docs.mathjax.org/en/latest/options/tex2jax.html
