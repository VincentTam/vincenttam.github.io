---
layout: page
title: "categories"
comments: false
sharing: false
footer: false
---

<ul>
{% for item in site.categories %}
    <li><a href="/blog/categories/{{ item[0] }}/">{{ item[0] | capitalize }}</a> [{{ item[1].size }}]</li>
{% endfor %}
</ul>

Built with the instructions on
<http://vigodome.com/blog/2011/12/22/show-categories-and-post-count-in-octopress/>.

<!-- vim:set tw=70:wrap: -->
