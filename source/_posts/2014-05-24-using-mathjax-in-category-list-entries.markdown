---
layout: post
title: "Using Mathjax in Category List Entries"
date: 2014-05-24 12:50:58 +0800
comments: true
categories: Octopress
---

About three weeks ago, I successfully changed the category "LaTeX" to
"$\rm \LaTeX$".  By trial, I discovered that `$\rm \LaTeX$` should be
input for "categories" at the head of the markdown source file of each
Octopress post/page.  Then, previewing the rendered contents at port
4000 at locolhost, I could see the category "$\rm \LaTeX$" rendered by
Mathjax at the bottom of each post/page.  Moreover, in the category
list in the sidebar at the right-hand side, the item "$\rm \LaTeX$"
was also correctly displayed.  However, as I clicked it, I was brought
to a page which titled something similar to "Error 404".  Then, I
realized that I need to modify the category list plugin[^1] so as to
fix this error.  I jotted the trailing part of wrong URL down:
"-rm-latex-".

Fortunately, the hyperlink for the category "$\rm \LaTeX$" at the
bottom of each post was correct: `$-slash-rm-slash-latex$`.  This was
an important guide to what was going to be done to the category list
plugin.  As I am *not* going to spend most of my time to study IT, I
aimed at *merely* changing "LaTeX" to "$\rm \LaTeX$".

Viewing the source code of Watson's `category_list_tag.rb`, I observed
that the generated URL of each item in the category list was
determined by the variable `category_url`, and the following method
was responsible for the error.

    category_url = File.join(category_dir, category.gsub(/_|\P{Word}/, '-').gsub(/-{2,}/, '-').downcase)

To solve the problem, I used the following approach:

1. Extract the trailing part of the URL of each category to
`category_string`.
2. Use an if-statement to match `category_string` with the erroneous
part URL: `-rm-latex-`.
    - If it is *not* matched, then do nothing.
3. If it is matched, change the trailing part of `category_url` to
`$-slash-rm-slash-latex$`.

That is, I added the following lines before writing the new item to
the variable `html`.

```ruby Display Mathjax rendered $\rm \LaTeX$ code in category lists item https://github.com/VincentTam/vincenttam.github.io/blob/7dcf6b7e8cdc6b9fd1f8de9a81a05af128849537/plugins/category_list_tag.rb source code
category_string = category.gsub(/_|\P{Word}/, '-').gsub(/-{2,}/, '-').downcase
if category_string == "-rm-latex-"
    latex_category_string = "$-slash-rm-slash-latex$"
    category_url = File.join(category_dir, latex_category_string)
end
```

---

[^1]: [Watson's Category List Plugin](http://www.dotnetguy.co.uk/post/2012/06/25/octopress-category-list-plugin/)

<!-- vim:se tw=70: -->
