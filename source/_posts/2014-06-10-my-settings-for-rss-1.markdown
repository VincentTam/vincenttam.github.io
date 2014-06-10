---
layout: post
title: "My Settings for RSS (1)"
date: 2014-06-10 17:42:29 +0800
comments: true
categories: [Octopress, Ruby]
---

## Objective

To set up a user-friendly RSS feeds layout.

## Background

I installed [Clapper's image popup plugin][imgpopup] two months ago.[^1]

## Problem

As can be seen from Clapper's RSS feed page, each popup image appears *three* times.

{% imgpopup /images/posts/RSS1/3img.png 80% Clapper's RSS %}

<!-- more -->

The HTML code provides some information about this problem.

{% codeblock Source code of his RSS page in Firefox's Inspector lang:html http://brizzled.clapper.org/feed.atom His Atom Feed %}
<div xmlns="http://www.w3.org/1999/xhtml" class="imgpopup screen" xml:base="http://brizzled.clapper.org/feed.atom">
  <div class="caption">Click the image for a larger view.</div>
    <a id="image-4">
      <img width="240" height="183" alt="Click me." src="http://brizzled.clapper.org/images/2012-02-05-a-simple-octopress-image-popup-plugin/six-twenty-six.jpg" />
    </a>
    <div id="image-dialog-4">
      <img width="800" height="610" src="http://brizzled.clapper.org/images/2012-02-05-a-simple-octopress-image-popup-plugin/six-twenty-six.jpg" />
      <br clear="all" />
  </div>
</div>
<div xmlns="http://www.w3.org/1999/xhtml" class="illustration print" xml:base="http://brizzled.clapper.org/feed.atom">
  <img width="800" height="610" src="http://brizzled.clapper.org/images/2012-02-05-a-simple-octopress-image-popup-plugin/six-twenty-six.jpg" />
</div>
{% endcodeblock %}

## Failed approach: change the CSS

I googled "xml css", and learned the syntax for customizing the styles of an XML document from [a site in Taiwan][XMLCSS].  Unluckily, this method failed change the display styles of my RSS feed page.

At the top of the source code of `source/atom.xml`, I found two `<link>` tags, so I tried inserting an external CSS stylesheet, but it also failed.

## Solution

I searched "octopress rss css", and found [a page that I've visited][ewal] when I inserted some Ruby code into my `Rakefile` to submit new sitemaps.[^2]

{% codeblock Erv Walter's plugin to remove line numbers in Atom Feed lang:ruby http://www.ewal.net/2012/09/08/octopress-customizations/#remove-line-numbers-in-atom-feed %}
module CustomLiquidFilters
  def remove_linenumbers(input)
    input.gsub(/\<td\ class="gutter"\>.+?\<\/td\>/m, ' ')
  end
end

Liquid::Template.register_filter CustomLiquidFilters
{% endcodeblock %}

### Some Ruby regular expressions learnt (TL;DR)

When it comes to regular expressions, my memory is *poor* and my efficiency is *extremely* slow.  It's just for me to recall some Ruby's regular expression syntax.

#### Some special characters

- `\n`: newline
- `/\//`: escaping `/` in Ruby's regular expression

#### Some metacharacters

For details, view the [offical documentation][RubyDocRegexpCharClasses].

- `/./`: Any character exception `\n`
- `\w/`: Any alphanumeric character or underscore
- `/\D/`: `/[^0-9]/`
- `/\s/`: `/[ \t\r\n\f]/`

#### Some simple methods

I've learned two methods.

1. `match` in Regexp class
2. `gsub` in String class
    - 'g' stands for "global"

{% codeblock Some simple Ruby methods on regular expressions lang:ruby %}
str = "hello"; nil # Supress stdout
pat = /\w+/; nil
pat.match(str)   #=> "hello"
pat = /\w+?/;
path.match(str)  #=> "h"

pat = /[eo]/
map = {       # Same as the official example
  'e' => '3', # except 'o' is NOT mapped
}
str.gsub(pat,map)   #=> "h3ll"
{% endcodeblock %}

### My interpretation of the code of the above plugin

If I *don't* write down the reasons for using the metacharacters, quantifiers, etc, now, it's likely for me to forget them in a month.

- `/foo.bar/m`: With the trailing `m`, the `.` inside `/`s matches *any* characters.  
    To match any characters (including `\n`) inside a `<td>` tag.
- `/a+?/`: *non-greedy* cousin of `/a+/`  
    To match `<td>...</td>`, but *not* `<td>...</td>...<td>...</td>`

### Putting things together

I've changed my way of thinking: instead of changing the styles, I decided to manipulate the contents.  Once the HTML tags for the redundant images had been removed, the Atom Feed should be better.  Re-reading the HTML code in my RSS page, I realized that three tags could be stripped down: `<div class="cpation">`, `<div id="image-dialog-*">` and `<div class="illustration print">`.

From Walter's plugin, I knew that this involves writing Ruby code.  Any programmer will know that this can be done by using `gsub` two times.  However, this is *not* beautiful.  How about multiple replacements in general?  I found the last answer of [this question on Stack Overflow][StackOverflow8132492] elegant.  The arrow `=>` in variable `map` fascinates me.  At first, I thought that there's a "map" object in Ruby, and searched "ruby regex gsub map", but I couldn't see a webpage that I, having *no* experience in writing Ruby code, could understand.  It took me some time to figure out that variable `map` is actually a *hash*.

I copied `public/atom.xml` to my home folder and used a Ruby script to test my method first.  To avoid seeing broken things while previewing the site, I *didn't* directly modify `plugins/custom_filter.rb`.

{% include_code My testing Ruby scripts ri20min.rb %}

I *didn't* have much time to study Ruby's File I/O, so I just direct the standard output to a file.  Thus, within the Vim buffer that held the file, I typed the following editor command. (The current directory is `~`.)

    :!ruby % atom.xml > atom_changed.xml

To compare the difference between the two XML files, the following command can be used.

    :vertical diffsplit atom.xml atom_changed.xml

Of course `diff -u` can be used, but since it's the *first* time that I compare the two files, I have *no* idea about the length of the output.  If the output length is greater than the buffer length of my terminal, then I *couldn't* see all the differences.  `vimdiff` directly enter Vim's diff mode from the terminal.  The `]c` mapping is for jumping to the next difference.

With this keyboard shortcut, I could quickly browse through the files and knew that the `gsub` method had been correctly applied.  Therefore, I added a method in module `CustomLiquidFilters` in `plugins/custom_filter.rb`.

I learnt to use method `each_pair` in Hash class from an answer to [another Stack Overflow question about `gsub`][StackOverflow13556555].

{% codeblock My first custom filter lang:ruby %}
def remove_bigfig(input)
  RegexMap = {
    /\<div\ class="caption"\>Click the image for a larger view.\<\/div\>/ => '',
    /\<div\ id="image-dialog-\d+".*?\>.+?\<\/div\>/m => '',
    /\<div\ class="illustration\ print"\>.+?\<\/div\>/m => '',
  }

  RegexMap.each_pair {|k,v| input.gsub!(k, v)}
end
{% endcodeblock %}

Moreover, similar to Walter's modification to his `source/atom.xml`, to test my newly written code, I also needed to change it a little bit.

{% codeblock My first custom filter lang:xml %}
<entry>
  <!-- other elements -->
  <content type="html"><!-- add "remove_bigfig" just after "remove_linenumbers" --></content>
</entry>
{% endcodeblock %}

<small>Due to my limited knowledge in Jekyll, I *can't* find a way to escape the Liquid command inside an Octopress codeblock.</small>

Unfortunately, I got strange output from `rake`.

{% include_code How my first filter failed lang:text CustomFilterFailed1.txt %}

I searched "ruby dynamic constant assignment" on Google, and read the first search result, which was a Stack Overflow question.  The answers on the top were very informative and I *couldn't* comprehend them.  I could just understand [the last one][StackOverflow6712298].

After that, I tried to move the lines of code that defined hash `Regexp` outside of method `remove_bigfig`, and generate the site again.  I encountered another error.

{% include_code How my filter failed again lang:text CustomFilterFailed2.txt %}

---

[^1]: [The Git commit for installing the image popup plugin][94c7d97]
[imgpopup]: http://brizzled.clapper.org/blog/2012/02/05/a-simple-octopress-image-popup-plugin/ "A Simple Octopress Image Popup Plugin"
[94c7d97]: https://github.com/vincenttam/vincenttam.github.io/commit/94c7d97 "commit 94c7d97"
[XMLCSS]: http://www.study-area.org/coobila/tutorial_203.html "在XML中使用CSS"
[ewal]: http://www.ewal.net/2012/09/08/octopress-customizations/ "Octopress Customizations"
[^2]: /blog/2014/06/01/notifying-search-engines-of-new-sitemaps/ "Notifying Search Engines of New Sitemaps"
[RubyDocRegexpCharClasses]: http://www.ruby-doc.org/core-1.9.3/Regexp.html#class-Regexp-label-Character+Classes "Class: Regexp (Ruby 1.9.3)"
[StackOverflow8132492]: http://stackoverflow.com/questions/8132492 "Ruby Multiple String Replacement"
[StackOverflow13556555]: http://stackoverflow.com/a/13556720 "Using many instances of 'gsub' in Ruby"
[StackOverflow6712298]: http://stackoverflow.com/a/6712512 "Dynamic constant assignment"
