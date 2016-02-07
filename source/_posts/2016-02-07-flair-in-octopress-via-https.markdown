---
layout: post
title: "Flair in Octopress via HTTPS"
date: 2016-02-07 23:52:33 +0800
comments: true
categories: [information security, Octopress]
---

Background
---

I replaced [the big avatar][avatar] of my self intro in the sidebar
with my Stack Exchange flair, which summarized my reputation and
badges on [Mathematics Stack Exchange][mathse].  Since then, it's
easier to see my profile there.

Problem
---

When I browsed my blog, I saw a lock with a yellow triangle on the
left of the URL.

<picture class="fancybox" title="An abnormal icon on the left of the
URL">
  <source srcset="/images/posts/Flair/mixed-397.png"
    media="(min-width: 400px)"></source> 
  <img alt="An abnormal icon on the left of the URL"
    src="/images/posts/Flair/mixed-300.png" />
</picture>

This indicated the presence of insecure contents.

<picture class="fancybox" title="Firefox's error console message">
  <source srcset="/images/posts/Flair/log-714.png"
    media="(min-width: 720px)"></source> 
  <source srcset="/images/posts/Flair/log-516.png"
    media="(min-width: 520px)"></source> 
  <img alt="Firefox's error console message"
    src="/images/posts/Flair/log-300.png" />
</picture>

**How can I get rid of this error message?**

<!-- more -->

Solution
---

Even though I focus on math analysis now and I'm *not* going to write
any programming code, the advice of
[this article about programming][ref] still applies.  Reading the
error message, I recalled one of my old posts written more than one
year ago.  It was titled [*MathJax in Octopress via HTTPS*][pp].
Therefore, the only thing that I needed to do was to add an `s`
between `http` and `:` in the URL of the image for the flair.

[avatar]: /images/avatar256.png
[mathse]: https://math.stackexchange.com
[ref]: http://polymerhk.com/articles/2016/02/03/27363/
[pp]: /blog/2014/06/05/mathjax-in-octopress-via-https/
