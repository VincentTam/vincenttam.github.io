---
layout: post
title: "An Image with Changeable Size"
date: 2015-04-11 17:14:23 +0800
comments: true
categories: [SVG, web technologies]
---

Background
---

I sometimes upload pictures for illustrating ideas.  You may see
[*Two Diagrams Illustrating the Isomorphism Extension Theorem*][pp] in
this blog for example.

Motivation
---

Enable users to adjust the size of SVG graphics.

Problem
---

In the linked post, if the zoom level is too *large*, then part of the
image will be hidden.

<object type="image/svg+xml" class="boxed"
  data="/downloads/code/svgpan_1.2.2/IET.svg"
  width="200" height="200">
  Your browser does not support SVG
</object>

This is quite *inconvenient* for users who want a *whole* picture.

Goal
---

To set up a slide bar which controls the size of an SVG image.

<span>Image size:</span>
<input id="bar" type="range" name="points" min="200" max="800"
value="200" step="10">
<span id="lbl">200</span>

<object type="image/svg+xml" class="boxed" id="obj"
  data="/downloads/code/resizable/IET.svg"
  width="200" height="200">
  Your browser does not support SVG
</object>

<!-- more -->

Example
---

Click "download" to view the sample web page.

{% include_code A minimum working example resizable/test.html %}

[pp]: /blog/2015/03/28/two-diagrams-illustrating-the-isomorphism-extension-theorem/
