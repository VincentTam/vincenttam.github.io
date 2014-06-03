---
layout: post
title: "Make Images with Transparent Background using GIMP, and More ..."
date: 2014-04-27 13:38:12 +0800
comments: true
categories: [GIMP, CSS]
---

## Getting an image with transparent background

### An apple with white background

{% img left /images/posts/GIMPTransparentBg/apple-logo-2.jpg 285 251 %}

Downloaded from [*History of the Apple Logo*][apple_logo].[^1]

Thanks to [Ruiz's GIMP tutorial][gimp_tutorial] on
[Mbrsolution][mbrsolution], I can remove the white background of the
picture on the left.

### Using GIMP

It's a brief summary of the referenced tutorial.  To save time, I
won't post screenshots here.  You may refer to those in the tutorial.

{% img right /images/posts/GIMPTransparentBg/apple-logo-3.png 171 150.6 %}

1. Use the **Fuzzy Tool** and click on the background.
2. Click **Layer → Transparency** to check if an alpha channel has
been added.  If not, then add one.
3. Produce a transparent background by **Edit → Clear**.
4. Save it as a PNG file.
    - See the detailed instructions in the tutorial.
    - JPEG images can't have transparent background.[^2]

## Centering an image in HTML

I've found Mrchief's answer to Web_Designer's question on Stack
Overflow useful.[^3]

## Inserting shadows for images

Inspired by [ParaImage's tutorial on Hong Kong Silicon][hksilicon],
I've written a small and simple HTML file to practice the concepts
learnt from Stack Overflow and HK Silicon.  
(Click "download" for viewing the HTML code in a web browser.)

{% include_code A small HTML file for displaying pictures lang:html transparent.html %} 

Using Firefox, I can dynamically change the width and displacement of
the shadow of an image by choosing "Inspect Element" and hitting arrow
keys.

{% imgpopup /images/posts/GIMPTransparentBg/inspect_element.png 50% Dynamically change box shadow using Firefox %}

- Click the values of a CSS property.
- Move the cursor to a number, then hit ↑/↓ to adjust the values.
- Use ←/→ to move the cursor to another property.

---

[^1]: Source URL: <http://fineprintnyc.com/images/blog/history-of-apple-logo/apple-logo-2.jpg>
[^2]: [Transparent background in JPEG image – Stack Overflow](http://stackoverflow.com/questions/16906144/transparent-background-in-jpeg-image)
[^3]: [Center image using text-align center? – Stack Overflow](https://stackoverflow.com/questions/7055393/center-image-using-text-align-center)

[gimp_tutorial]: http://mbrsolution.com/tutorial/gimp-tutorial-how-to-make-an-image-background-transparent.php
[mbrsolution]: http://mbrsolution.com/
[apple_logo]: http://fineprintnyc.com/blog/history-of-the-apple-logo
[hksilicon]: http://www.hksilicon.com/kb/articles/4690/CSS3-box-shadow

<!-- vim:se tw=70: -->
