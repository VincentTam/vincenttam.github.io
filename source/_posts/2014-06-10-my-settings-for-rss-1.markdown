---
layout: post
title: "My Settings for RSS (1)"
date: 2014-06-10 17:42:29 +0800
comments: true
categories: [Octopress, Ruby]
---

## Objective

To set up a user-friendly RSS feeds layout.

## Background

I installed [Clapper's image popup plugin][imgpopup] two months ago.[^1]

## Problem

As can be seen from Clapper's RSS feed page, each popup image appears *three* times.

{% imgpopup /images/posts/RSS1/3img.png 80% Clapper's RSS %}

The HTML code provides some information about this problem.

{% codeblock Source code of his RSS page in Firefox's Inspector lang:html %}
<div xmlns="http://www.w3.org/1999/xhtml" class="imgpopup screen" xml:base="http://brizzled.clapper.org/feed.atom">
  <div class="caption">Click the image for a larger view.</div>
    <a id="image-4">
      <img width="240" height="183" alt="Click me." src="http://brizzled.clapper.org/images/2012-02-05-a-simple-octopress-image-popup-plugin/six-twenty-six.jpg" />
    </a>
    <div id="image-dialog-4">
      <img width="800" height="610" src="http://brizzled.clapper.org/images/2012-02-05-a-simple-octopress-image-popup-plugin/six-twenty-six.jpg" />
      <br clear="all" />
  </div>
</div>
<div xmlns="http://www.w3.org/1999/xhtml" class="illustration print" xml:base="http://brizzled.clapper.org/feed.atom">
  <img width="800" height="610" src="http://brizzled.clapper.org/images/2012-02-05-a-simple-octopress-image-popup-plugin/six-twenty-six.jpg" />
</div>
{% endcodeblock %}

---

[^1]: [The Git commit for installing the image popup plugin][94c7d97]

[imgpopup]: http://brizzled.clapper.org/blog/2012/02/05/a-simple-octopress-image-popup-plugin/ "A Simple Octopress Image Popup Plugin"

[94c7d97]: https://github.com/vincenttam/vincenttam.github.io/commit/94c7d97
