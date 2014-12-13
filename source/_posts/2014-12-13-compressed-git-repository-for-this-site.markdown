---
layout: post
title: "Compressed Git Repository for This Site"
date: 2014-12-13 16:39:09 +0800
comments: true
categories: Git
---

Background
---

I've uploaded nearly 200 blog posts to this blog.

Problem
---

As there're more and more pages here, the execution speed of the
command `git status` gradually *decreased*.

{% img fancybox center /images/posts/GitGc/gui.png 800 'Git GUI' 'git gui' %}

<!-- more -->

Solution
---

I ran the command `git gc` in Git Bash on M\$ Win\* 7.

<pre class="cli"><code>Welcome to Git (version 1.9.4-preview20140929)


Run 'git help git' to display the help index.
Run 'git help <command>' to display help for specific commands.

<span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">~</span>
$ cd /c/github/vincenttam.github.io/

<span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">/c/github/vincenttam.github.io (source)</span>
$ git gc
Counting objects: 8116, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (3621/3621), done.
Writing objects: 100% (8116/8116), done.
Total 8116 (delta 4603), reused 7360 (delta 4064)
Removing duplicate objects: 100% (256/256), done.

<span class="GitHostName">Owner@OWNER-PC</span> <span class="GitPathName">/c/github/vincenttam.github.io (source)</span>
$
</code></pre>
