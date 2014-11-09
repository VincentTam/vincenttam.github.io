---
layout: post
title: "MathJax Local Configuration File"
date: 2014-11-09 01:06:46 +0800
comments: true
categories: MathJax
published: false
---

Problem
---

I tried following the instructions in MathJax's official Wiki for
using a local configuration file.

{% codeblock lang:html %}
<script type="text/javascript"
   src="//cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS_HTML,/javascripts/MathJaxLocal.js">
</script>
{% endcodeblock %}

Things seems worked, but undersirably *slow*.

![loading time graph](/images/posts/MathJaxLocalConfigSlow/slow1.png){:.fancybox}

![loading time graph](/images/posts/MathJaxLocalConfigSlow/slow2.png){:.fancybox}

It took about *16 seconds* for loading the math.  **How can they load
quicker with a local configuration file**, like <http://drz.ar>?

<!-- more -->
