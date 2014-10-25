---
layout: post
title: "Understood Power Means Inequality for Integer Powers"
date: 2014-10-25 18:02:53 +0800
comments: true
categories: math
---

I've learnt the AM--GM--HM inequality when I was a secondary school
student.

\\[
  \frac{\sum\_{i=1}^n x\_i}{n} \ge \sqrt[n]{\prod\_{i=1}^n x\_i} \ge
  \frac{n}{\sum\_{i=1}^n x\_i^{-1}}
\\]

But I didn't know how to generalise it to integer power $s$.  That is,
if $k$ and $m$ are positive integers such that $k \le m$, then we have

\\[
  \left( \frac{\sum\_{i=1}^n x\_i^k}{n} \right)^{\frac{1}{k}} \le
  \left( \frac{\sum\_{i=1}^n x\_i^m}{n} \right)^{\frac{1}{m}}.
\\]

I read the proof in Wikipedia, and got stuck in the first step.

\\[
  \frac{\sum\_{i=1}^{n}w\_{i}x\_{i}^{k}}{\sum\_{i=1}^{n}w\_{i}x\_{i}^
  {k-1}} \le \frac{\sum\_{i=1}^{n}w\_{i}x\_{i}^{k+1}}{\sum\_{i=1}^{n}
  w\_{i}x\_{i}^{k}},
\\]

I quickly realised that $w\_i = 1/n$ in this case.  Even though I know
that the above inequality is eqivalent to

\\[
  \left( \sum\_{i=1}^n w\_{i}x\_{i}^{k} \right)^2 \le
  \left( \sum\_{i=1}^n w\_{i}x\_{i}^{k-1} \right)
  \left( \sum\_{i=1}^n w\_{i}x\_{i}^{k+1} \right),
\\]

At the first glance, I didn't know how to relate this to the famous
Cauchy--Schwartz inequality.

\\[
  \left( \sum\_{i=1}^n a\_{i}b\_{i} \right)^2 \le
  \left(\sum\_{i=1}^n a\_{i}^2\right)
  \left(\sum\_{i=1}^n b\_{i}^2\right)
\\]

Actually, setting $a\_i = \sqrt{w\_{i}x\_{i}^{k-1}}$ and $b\_i =
\sqrt{w\_{i}x\_{i}^{k+1}}$ will do.
