---
layout: post
title: "Hyperlinks in Ordered Lists in Markdown in Vim"
date: 2016-02-10 01:06:42 +0800
comments: true
categories: [kramdown, Vim]
---

Background
---

Same as the one in [my previous post][pp1].

I usually write hyperlinks for software names using only one pair of
square brackets, like `[Vim]` instead of `[Vim][Vim]`.  Even though
this *isn't* standard, this is more convenient.

Problem
---

I want to start the second item of the following ordered list with a
hyperlink to [textobj-lastpat] written in a short but non-standard
way.

{% include_code Markdown code of the ordered list lang:text olhlmdvim/test-post.mkd %}

Unluckily, as I typed this Vim Ex command
[to see whether my Markdown syntax was correct][pp2], I quickly
received an error from [kramdown].

    :!kramdown % > %<.html
{:.cliUB}

{% include_code Markdown code of the ordered list olhlmdvim/test-post.html %}

    Warning: Duplicate link ID 'textobj-lastpat' on line 13 - overwriting

    Press ENTER or type command to continue
{:.cliUB}

This time, I *won't*
[find out what's wrong from the error message][errmsg] because writing
that hyperlink in the standard way is the quickest solution that I
know.

[pp1]: /blog/2016/02/09/rake-aborted-due-to-a-vim-swap-file/
[textobj-lastpat]: https://github.com/kana/vim-textobj-lastpat
[pp2]: /blog/2015/08/05/a-quick-markdown-syntax-error-detection-for-writing-mathjax-equations-in-octopress-posts-3/
[kramdown]: http://kramdown.gettalong.org
[errmsg]: http://polymerhk.com/articles/2016/02/03/27363/
