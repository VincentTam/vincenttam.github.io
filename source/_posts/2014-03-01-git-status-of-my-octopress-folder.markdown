---
layout: post
title: "Git status of my Octopress folder"
date: 2014-03-01 17:32:29 +0800
comments: true
categories: 
---
I'd like to include my GitHub repositories here.  To do so, it's a
piece of cake to slightly modify `_config.yml`.[^config_octopress]

Once, I curiously typed `git status` in `~/octopress`.  The following
screenshot is from my terminal.

{% img /images/git_status.png 'git status' 'git status' %}

Then I blindly followed the "advice" of `git status` and typed

```
$ git add .
```

It seemed that I had made a mistake.  Actually, **without adding those
modified and untracked files on the stage for commit**, the following
two commands will do.

```
$ rake generate
$ rake deploy
```

The final step is to view your blog again after going out for a cup
water or some snacks.

How about the `git status`?  Simply *forget about it*!

[^config_octopress]: [Configuring Octopress](http://octopress.org/docs/configuring/)

<!-- vim:set tw=70 wrap spell: -->
