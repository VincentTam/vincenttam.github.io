---
layout: post
title: "Octopress Config for Ruby 2.3 on Windows 10"
date: 2017-01-10 16:38:32 +0100
comments: true
categories: [M$ Win*, Octopress, Ruby]
---

Motivation
---

Same as the background in [my previous article][pp].

Background
---

I uninstalled Ruby 2.0 in the Control Panel, and then installed
version 2.3.3 from [RubyInstaller for Windows][rb4win]

Problem 1: RedCloth installation failure
---

### Error message

    Gem::InstallError: The 'RedCloth' native gem requires installed build tools.

    Please update your PATH to include build tools or download the DevKit
    from 'http://rubyinstaller.org/downloads' and follow the instructions
    at 'http://github.com/oneclick/rubyinstaller/wiki/Development-Kit'

    An error occurred while installing RedCloth (4.2.9), and Bundler cannot
    continue.
    Make sure that `gem install RedCloth -v '4.2.9'` succeeds before bundling.
{:.cli}

The error message is similar to [Joe's gem install error][so36274233].
The only difference is that I was installing [RedCloth] 4.9.

### Solution

This failure is due to the absence of a valid path to [RubyInstaller
Development Kit][rbdevkt].  I tried manually adding the path to the
folder for binary executables (default to `C:\RubyDevKit\bin`) to
`PATH`, but it's *unsuccessful*.  I googled "Please update your PATH
to include build tools" and found [his question][so36274233], whose
third answer explained the function of `devkitvar.bat`.  This batch
script actually prepended the path of *two* folders into `PATH`.  One
is stated above; one is `C:\RubyDevKit\mingw\bin`.  Running this batch
file changes `PATH` *temporarily*.  A manual configuration in the
Control Panel allowed the system to detect [DevKit][rbdevkt], and this
problem was thus solved.

### Related gems

#### Already installed

Name    | Version Number
---     | ---
rake    | 10.4.2
bundler | 1.13.7

#### Being installed

Name                 | Version Number | With native extensions?
---                  | ---            | ---
**RedCloth**         | 4.2.9          | ✓
**wdm**              | 0.1.0          | ✓
blankslate           | 2.1.2.4        | ✗
chunky_png           | 1.3.4          | ✗
coffee-script-source | 1.9.1          | ✗
colorator            | 0.1            | ✗
execjs               | 2.4.0          | ✗
fast-stemmer         | 1.0.2          | ✓
ffi                  | 1.9.6          | ✗
hitimes              | 1.2.2          | ✓
jekyll-gist          | 1.1.0          | ✗
jekyll-paginate      | 1.1.0          | ✗
jekyll-sitemap       | 0.8.0          | ✗
kramdown             | 1.6.0          | ✗
liquid               | 2.6.2          | ✗
mercenary            | 0.3.5          | ✗
multi_json           | 1.11.0         | ✗
posix-spawn          | 0.3.10         | ✓
rack                 | 1.6.0          | ✗
rb-fsevent           | 0.9.4          | ✗
redcarpet            | 3.2.2          | ✓
safe_yaml            | 1.0.4          | ✗
sass                 | 3.4.13         | ✗
stringex             | 1.4.0          | ✗
tilt                 | 1.4.1          | ✗
yajl-ruby            | 1.2.1          | ✓

Problem 2: wdm installation failure


[pp]: /blog/2017/01/10/upgraded-to-git-for-windows-2-dot-11/
[rb4win]: https://rubyinstaller.org/
[so36274233]: http://stackoverflow.com/a/36274233/280189
[RedCloth]: http://redcloth.org/
[rbdevkt]: https://rubyinstaller.org/add-ons/devkit/
