---
layout: post
title: "Creating $\\rm \\LaTeX$ Résumés on Ubuntu"
date: 2014-12-11 19:31:23 +0800
comments: true
categories: [LaTeX, Linux]
---

Background
---

I created a résumé using [Mik$\rm \TeX$][MikTeX].  Simply copy any
sample document of the "res" class and compile it.  Things will run
smoothly in Mik$\rm \TeX$.

Problem
---

{% img fancybox center /images/posts/LaTeXResume/err.png 800 'Figure 1' 'err' %}

Solution
---

I glanced through the section "[Installing packages manually][doc]" in
Ubuntu's *Community Help Wiki*, and issued the following commands,
after having `res.cls` [downloaded from CTAN][down_file].

    $ mkdir -p ~/texmf/res
    $ mv res.cls ~/texmf/res/
    $ texhash ~/texmf
    texhash: Updating /home/owner/texmf/ls-R... 
    texhash: Done.
{:.cliUB}

[MikTeX]: http://miktex.org
[doc]: https://help.ubuntu.com/community/LaTeX#Installing_packages_manually
[down_file]: http://www.ctan.org/pkg/res "res -- A résumé class"
