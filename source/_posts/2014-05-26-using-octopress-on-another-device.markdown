---
layout: post
title: "Using Octopress on Another Device"
date: 2014-05-26 00:42:18 +0800
comments: true
categories: Octopress
---

Two days ago, my Linux desktop was down.  As a result, I had to use a
laptop that ran on Windows 7 to browse the web.  I wasn't sure how
long it'd take to fix the desktop, so I tried installing Octopress on
Windows 7.

I mainly followed [the tutorial on Simple Tutorial Blog][tut1].  If my
blog consists merely of simple passages, the tutorial should have
worked for me.  Unluckily, if any page/post contains a code block,
then [Pygment][pygment], which depends on Python, is used.  Jan
described how he solved the problem of RubyPython in details.[^1]  I
have *no* knowledge in Ruby and Python programming, so I *don't* think
that I can find out what's wrong like him.  Fortunately, I *didn't*
encounter his error.

However, when I was setting up Octopress on Windows 7, I've learned
something that I'd like to write it down.

## Additional notes on the prerequisite packages

In the section [*Before You Begin*][tut1_prereq] of the tutorial, it's
said that three packages are needed:

1. [Git][git]
2. [RubyInstaller for Windows (version 1.9.3)][ruby193] 
3. [Ruby Development Kit (the one "for use with Ruby...1.9.3")][rdk]

First, apart from just installing Git on Windows, it is better that
you can access Git through the command prompt.

---

[^1]: [在 Windows 使用 Octopress](http://tonytonyjan.net/2012/03/01/install-octopress-on-windows/)

[tut1]: http://www.techelex.org/setup-octopress-on-windows7/
[pygment]: http://pygments.org/
[tut1_prereq]: http://www.techelex.org/setup-octopress-on-windows7/#before-you-begin
[git]: http://git-scm.com/
[ruby193]: http://rubyinstaller.org/downloads/
[rdk]: http://rubyinstaller.org/downloads/

<!-- vim:se tw=70: -->
