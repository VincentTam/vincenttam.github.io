---
layout: post
title: "Jump to $\\rm \\LaTeX$ Syntax Error"
date: 2014-03-22 17:23:19 +0800
comments: true
categories: [Vim, $\rm \LaTeX$]
---

**This post is written in response to a question of
[one of my video](http://youtu.be/y67t-05nFD0).**

Vim-$\rm \LaTeX$ enables users to jump to a syntax error quickly.  To
show you how, I use a GIF "animation", instead of a video, so that the
file size is much smaller.

{% imgpopup /images/vim-latex-err.gif 50% A GIF animation showing Vim-LaTeX's quickfix window %}

Explanation:

Error message: The `equation*` environment is "undefined".  
Cause of error: I forget to include the `amsmath` package in the
preamble.

- [Figure 1](/images/vim-latex-err1.png): Compilation error occurs,
  so a quickfix window pops up.
- [Figure 2](/images/vim-latex-err2.png): I typed `j` to move the
  cursor down in the quickfix window by one line, and the window below
  showing the log file automatically scrolled down. 
- [Figure 3](/images/vim-latex-err3.png): I typed `k` to go up one
  line, so the situation goes back to Figure 1.
- [Figure 4](/images/vim-latex-err4.png): I typed `<Enter>` to jump
  to the "error location". (line 6)
- [Figure 5](/images/vim-latex-err5.png): I typed `<C-w> j` to go
  back to the quickfix window, and the situation goes back to Figure 1
  again.
- [Figure 6](/images/vim-latex-err6.png): I typed `j` again, and
  the situation goes back to Figure 2.
- [Figure 7](/images/vim-latex-err7.png): I typed `<Enter>` again
  to jump to *another* "error location".

P.S. As I've said in my "[About](/about)" page, I mainly write in
Markdown now, unless a teacher want me to submit homework with
specific formatting requirements like 1 inch margin, 1.5 line spacing,
etc.  As you can see from the footer of this blog, this post is also
written in Markdown.

<!-- vim:set tw=70:wrap: -->
