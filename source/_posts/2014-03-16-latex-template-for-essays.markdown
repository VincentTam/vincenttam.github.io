---
layout: post
title: "$\\rm \\LaTeX$ Template for Essays"
date: 2014-03-16 00:28:20 +0800
comments: true
categories: latex
---

## Introduction

This is a $\rm \LaTeX$ template for writing an article.

## Sample output

<iframe src="/downloads/latex_sample.pdf" frameborder="0" width="100%" height="960px"></iframe>

## Sample code

{% include_code The essay latex_sample.tex %}

{% include_code The bibliography lang:text biblio.bib %}

## Explanation of code in "latex_sample.tex"

For the one-inch margin, I have used the geometry package to do so. (line 2) The font size has been set to 12. (line 1) The 1.5 line spacing has been implemented. (lines 7–8)

The APA-style reference list was automatically generated using the biblatex package along with the biber backend. (lines 15–17,107)

## Comparison of $\rm \LaTeX$ and other technologies

I personally appreciate the beauty of Professor Donald Knuff's Computer Modern typefaces, and thus the font Computer Modern Roman has been chosen through the whole PDF file. In terms the number of trailing hyphenations in each line, and other relating in-word spacing statistics, $\rm \LaTeX$ is better than an array of internationally-acclaimed proprietary softwares, such as Microsoft Word and Abode InDesign[^1]. In addition, the typesetting of Microsoft is incorrect, whereas $\rm \LaTeX$ gives the correct kerning and ligatures of characters, apart from rendering "ancient and rare ligatures"[^2]. The staff in the Department of Engineering at the University of Cambridge has made a more comprehensive and detailed comparison of WYSIWYG (What-You-See-Is-What-You-Get) editors and $\rm \LaTeX$ on <http://www.eng.cam.ac.uk/help/tpl/textprocessing/latex_advocacy.html>.

[^1]: <http://tex.stackexchange.com/questions/110133/visual-comparison-between-latex-and-word-output-hyphenation-typesetting-ligat>
[^2]: <http://nitens.org/taraborelli/latex>
