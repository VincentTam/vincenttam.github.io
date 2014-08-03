---
layout: post
title: "My Pandoc Template (1)"
date: 2014-08-03 17:21:01 +0800
comments: true
categories: [pandoc, template]
---

The last post about [pandoc] was written four months ago.  Last week,
I worked on a pandoc template which enables users to easily create
$\rm \LaTeX$ documents with

- 1-inch margin; and
- one-half (or double) spacing.

The following command can create a PDF using the template.

    $ pandoc % --template=my_template1.latex -o %<.pdf

I hope that more people will use pandoc and write in Markdown.

<!-- more -->

{% gist ffad6efe2c65d5e70b28 my_template1.latex %}

[pandoc]: http://johnmacfarlane.net/pandoc/ "pandoc—a universal document converter"
