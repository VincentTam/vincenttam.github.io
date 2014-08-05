---
layout: post
title: "Fixing Embedded Gists in Octopress"
date: 2014-08-05 20:18:53 +0800
comments: true
categories: Octopress
---

Background
---

Octopress's default plugins for including code snippets/blocks enable
users to share code.  This is good for open source technologies.
*Without* intelligent and generous users of open source tools, I
*won't* be able to

1. show images which can be enlarged with a click;[^1]
2. display a category list of Octopress posts;[^2]
3. find out how to include contents rendered by Mathjax (e.g. $\rm
\LaTeX$) in the category list;[^3]
4. figure out a way to remove the line numbers and repeating figures
in the RSS (category) feeds;[^4]
5. embed SVG images that support zooming, panning and dragging.[^5]

Problem
---

However, if one uses Gist instead of Octopress's default plugins for
sharing code, one will see that the line numbers *aren't* in the right
position.

{% img /images/posts/FixGist/wrong.png 'Gist #1' 'A Gist that does not look good' %}

<!-- more -->

Solution
---

There's a solution on devspade.[^6]  However, due to my *poor*
knowledge on Ruby, I *couldn't* understand what was actually done in
`plugins/git_tag.rb`.

Therefore, I followed Rothberg's approach of changing a few CSS
properties of embedded Gists.[^7]

After an hour of testing, I realized that changing
`sass/partials/_syntax.scss` would suffice.  There's no need to
actually change `.themes/classic/sass/partials/_syntax.scss` unless
one wants to customize the theme.[^8]  Now I can use Gists in my
posts.[^9]

---
[^1]: Refer to [*Testing jQuery Image Popup*][imgpopup] for details.
[imgpopup]: /blog/2014/03/30/testing-jquery-image-popup/
[^2]: Refer to [*Octopress Category List*][CatList] for details.
[CatList]: /blog/2014/04/27/octopress-category-list/
[^3]: Refer to [*Fixing Broken URLs in the Catetory List*][CatListURL] for details.
[CatListURL]: /blog/2014/06/20/fixing-broken-urls-in-the-catetory-list/
[^4]: Refer to *My Settings for RSS [(1)][RSS1], [(2)][RSS2]* for details.
[RSS1]: /blog/2014/06/10/my-settings-for-rss-1/
[RSS2]: /blog/2014/06/11/my-settings-for-rss-2/
[^5]: Refer to [*Zooming SVG in Web Browsers*][SVGZoom] for details.
[SVGZoom]: /blog/2014/08/02/zooming-svg-in-web-browsers/
[^6]: Caffrey, B. Aug 6, 2014. *Fixing Gist Embeds in Octopress*. Retrieved from <http://devspade.com/blog/2013/08/06/fixing-gist-embeds-in-octopress/>
[^7]:
    For details, refer to

    1. [Octopress issue #847][Octopress#847]; and
    2. [cancan101/cancan101.github.io@d30d956][d30d956]

[Octopress#847]: https://github.com/imathis/octopress/issues/847 "GitHub gist changes break gist plugin formatting"
[d30d956]: https://github.com/cancan101/cancan101.github.io/commit/d30d956
[^8]:
    Before fixing the embedded Gists in Octopress, I *didn't* know how
    the SCSS files under `.themes/classic/partials/` affect those
    under `sass`.  Therefore, to prepare for a possible failure, I
    divided the process into two Git commits.

    1. Commit [233b333]: I changed
    `.themes/classic/sass/partials/_syntax.scss`, according to
    [cancan101/cancan101.github.io@d30d956][d30d956]

    2. Commit [e5668de]: I ran the command for installing a theme, and
    found out that my changes to the HTML and XML files were *lost*,
    just like commits [f687612] and [fc59e2a].  Though running `git
    checkout -- source/_includes/<file>` could revert the `<file>` to
    its previous version, it's still troublesome.

[233b333]: https://github.com/VincentTam/vincenttam.github.io/commit/233b333
[e5668de]: https://github.com/VincentTam/vincenttam.github.io/commit/e5668de
[f687612]: https://github.com/VincentTam/vincenttam.github.io/commit/f687612
[fc59e2a]: https://github.com/VincentTam/vincenttam.github.io/commit/fc59e2a
[^9]: For a successful example, you may refer to a Gist in my [previous post][prev_post].
[prev_post]: /blog/2014/08/03/my-pandoc-template-1/#gist13584483 "My Pandoc Template (1)"
