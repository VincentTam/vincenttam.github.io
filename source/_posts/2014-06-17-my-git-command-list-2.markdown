---
layout: post
title: "My Git Command List (2)"
date: 2014-06-17 22:51:14 +0800
comments: true
categories: Git
---

Situation (TL;DR)
---

Since I tried to import my old WordPress posts to this blog *without* affecting `source` branch, I created a new branch called `wpcom-importer` branch, on which `rake deploy` was successfully run.  However, some of my old WordPress posts contain some unusual characters, which triggered an encoding problem in [Chuang's WordPress XML to Octopress importer][importer].  Looking at `rake`'s error message, I feel that I've put the converted posts from WordPress's XML on the right branch.

Thus, I drafted my new posts on `source` branch, but *not* on `wpcom-importer` branch.  I then switched to `wpcom-importer` and deleted some unwanted parts of XML file.  However, I *couldn't* switch back to `source` branch to do another commit.  As a result, I used `git stash` to solve the problem.

After finishing the draft, I committed the change, switched to `wpcom-importer` and "merged" the last change on `source` branch for `rake preview`.  The reason for *not* running the preview command on `source` branch is to avoid huge changes in `public` folder.  I've learnt to do the "merge" from [here][GitMergeTip].

Being *unfamiliar* with kramdown syntax for displayed math equations[^1], I had made some mistakes in the source code for my [previous post] while writing the draft on `source` branch.

The little list
---

[This list][GitCmdList] written in Chinese is a quick summary of Git commands.  I learnt the use of `git stash` commands from there.

<pre class="cli"><code class="ubuntu_gnome_terminal">$ git stash                     # save the uncommitted changes
$ git stash list                # show a list of stashes
$ git stash show                # inspect a list of stashes
$ git stash pop                 # apply and discard the topmost stash
$ git stash apply               # apply but don't discard the topmost stash
$ git checkout source -- &lt;file&gt; # copy the file from other branch
</code></pre>

In the last "merge" command, `--` avoids an ambiguity since `source` can be either the name of a branch or a folder in this case.  In addition, this command *doesn't* affect the commit history.

---

[^1]: The official kramdown syntax documentation. ([URL][kramdownDoc])

[kramdownDoc]: http://kramdown.gettalong.org/syntax.html#math-blocks
[importer]: https://gist.github.com/1394128
[GitMergeTip]: http://jasonrudolph.com/blog/2009/02/25/git-tip-how-to-merge-specific-files-from-another-branch/ 'Git Tip: How to "Merge" Specific Files from Another Branch'
[previous post]: /blog/2014/06/17/injectivity-of-stable-mappings/ "Injectivity of Stable Mappings"
[GitCmdList]: http://blog.longwin.com.tw/2009/05/git-learn-initial-command-2009/ "Git 初學筆記-指令操作教學-Tsung's Blog"
