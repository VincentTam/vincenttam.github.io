---
layout: post
title: "Moved to Octopress 3"
date: 2017-01-28 15:26:33 +0100
comments: true
categories: [Octopress]
---

In short
---

Link for my new blog: <https://git.io/vo3>

Motivation for giving up a large blog
---

As this blog grows, things have become increasingly harder to manage.
The customizations, scripts and stylesheets are *everywhere*, within
and outside the `source` folder.  The CSS stylesheets for codeblocks
and a Solarized theme were written or installed years ago.  The Gist
tag in Octopress *doesn't* work as well as expected.  It's hard to see
the highlighted area.  Moreover, the `range` and `mark` in Octopress
2's `codeblock` tag *never* works.  As the purpose of this blog is to
remind myself about the technical details of the code, the lack of
such functionalities caused me a lot of inconveniences: while writing,
after attaching the whole chuck of code, I need to specify the line
number; while reading, after viewing the line number, I have to locate
it in lines of code.  In order to highlight part of the code, I've
created some CSS classes (e.g. `UBCli`) and put it somewhere inside
`sass` folder, I spent hours for test the rules and identified the
`important !` ones.  This custom CSS class is fine in normal text, but
it *breaks* in list items `<li></li>`.  It's time switch to Jekyll
plugins written by full-time developers, such as
[jekyll-terminal][jkl-term].  But then I need to install a plugin.
Will it be compatible with the existing `plugins/*.rb`?  Instead of
spending even much more time on code written in a language that I
*don't* even understand, as a *non*-developer and a math student, I
can choose another popular technology which is well-developped for
posting math and program code.

The structure of an Octopress 3 blog repository is cleaner than that
of Octopress 2 because Octopress 3 is a Ruby gem, which can be managed
by bundle.  This tool and Git work together to bring about an easier
new feature test on the local repository for my blog.

What's worse: due to the change of timezone last year, Google
Webmasters has found over 70 crawl errors in this blog.  Despite the
Jekyll update to version 3, I *couldn't* resolve this issue.  I'll
manually fix each erroneous link later if I've time.

I tried hard migrating over 350 existing post in this blog to
Octopress 3, but it's too hard.  First, `jekyll build` returned a
plethora of syntax errors caused by the change in default markdown
parser (from rdiscound to kramdown with GFM enabled).  Second, some of
the posts are about technologies that I'm no longer using now, so they
*aren't* worth the effort.  Third, I found it extremely hard to set up
the stylesheets and the Liquid templates dispersed in several separate
folders (namely, `sass/, _includes/`, `_templates/`, `_layouts`
`stylesheets`, `javascripts`), so that I can have the category list
and RSS back.  The sources for examples and documentations for Jekyll
Liquid tags are few.  I *can't* even find a way to verify *the*
example of the `include` tag on Shopify Liquid's documentation.  The
result depends on so many factors, notably the installed version of
Ruby (runtime environment and gems) and the machine's operating system
(for Windows, the `wdm` gem is needed).  The whole process requires
many commands and is certainly prone to human errors.  After one
week's fruitless attempt.  Being exhausted, I realised that I need to
give up some nice features in the original blog, and move to the new
one for a more manageable framework in order to save time.

[jkl-term]: https://github.com/Xadeck/jekyll-terminal

*[GFM]: GitHub-flavored markdown
