---
layout: post
title: "Concatenate Loop Variable's Value and a String in Bash"
date: 2015-05-16 18:41:18 +0800
comments: true
categories: Linux
---

Problem
---

There're 2 image files in a folder: `fail1.png` and `fail2.png`.  I
wanted to create a scaled-down version of both pictures, and name the
smaller ones as `fail1_300.png` and `fail2_300.png`.

Failed attempt
---

    $ file *
    fail1.png: PNG image data, 467 x 243, 8-bit/color RGB, non-interlaced
    fail2.png: PNG image data, 464 x 242, 8-bit/color RGB, non-interlaced
    $ for i in {1..2}; do convert fail$i.png -resize 300 fail$i_300.png; done
    $ ls
    fail1.png  fail2.png  fail.png
{:.cliUB}

<!-- more -->

Solution
---

Add a backslash `\` between the end of the loop variable `i` and the
underscore character `_`.

    $ rm fail.png  # Clean up the mess
    $ for i in {1..2}; do convert fail$i.png -resize 300 fail$i\_300.png; done
    $ ls
    fail1_300.png  fail1.png  fail2_300.png  fail2.png  fail.png
{:.cliUB}
