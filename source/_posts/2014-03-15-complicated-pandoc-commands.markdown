---
layout: post
title: "Complicated Pandoc Commands"
date: 2014-03-15 12:55:46 +0800
comments: true
categories: 
---

I don't need to memorize these commands.  Instead, what I need is to
create a page here so that I can make quickly get the right command
for my work.  This saves the time for checking and testing the right
command.

# Pandoc markdown

Official demo:
<http://johnmacfarlane.net/pandoc/demos.html>

## Beamer

    !pandoc -t beamer -s -S --biblio mybib.bib --csl ~/Dropbox/Git/styles/apa.csl % -V theme:Berlin -o %<.pdf

<!-- vim:set tw=70 wrap: -->
