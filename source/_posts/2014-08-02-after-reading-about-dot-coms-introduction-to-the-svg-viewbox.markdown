---
layout: post
title: "After Reading About.com's Introduction to the SVG Viewbox"
date: 2014-08-02 20:30:22 +0800
comments: true
categories: SVG
---

While I was testing [SVGPan], I saw the `viewBox` attribute.  I learnt
something from the first search result after googling "svg viewbox".
It was an article introducing the SVG viewbox.  There's *no* difficult
concepts in the guide, but I *can't* understand it because of the
following claim.[^1]

>     <svg width="800" height="400" viewBox="0 0 400 200">
>
> This view box covers half the page starting in the **upper right
> hand corner**. 

I have investigated into this, and I'm dubious about this idea.  I'll
illustrate my doubts using two examples.  Click "download" at the top
right-hand corner to view the result.

{% include_code My first example SVGViewBox/viewBox1.html %}

"The view box covers the entire page", as expected.

{% include_code My second example SVGViewBox/viewBox2.html %}

This time, the view box only covers the top left-hand corner.

In addition, I've found out that changing `0 0 400 200` to `400 200 0 0`
*doesn't* work.

---
[^1]: Ferrara, D. n.d. *Viewbox Attribute in SVG: Understanding the SVG Viewbox*. Retrieved from <http://webdesign.about.com/od/svg/a/svg-viewbox-attribute.htm>
[SVGPan]: http://www.cyberz.org/blog/2009/12/08/svgpan-a-javascript-svg-panzoomdrag-library/ "SVGPan: a Javascript SVG (Viewer) Pan/Zoom/Drag library"
