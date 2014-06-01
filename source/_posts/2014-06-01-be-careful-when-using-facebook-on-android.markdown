---
layout: post
title: "Be Careful When Using Facebook on Android"
date: 2014-06-01 22:34:40 +0800
comments: true
categories: 
---

Tonight, I had read an article on the security risk of using Facebook
on Android.  I am shocked at Kanwal's discovery about WebView.

{% blockquote Mohit Kanwal http://creativepsyco.github.io/blog/2014/02/02/webview-vulnerability-in-facebook-android-sdk-embedded-oauth/ WebView Vulnerability in Facebook Android SDK: Embedded OAuth %}
That said, I hacked around to see if injecting Javascript on the
WebView was possible and it was, with a bit of change I could actually
get the user name and password of the victim by making him/her
uninstall Facebook on their phone and use FB login in my app.
{% endblockquote %}

I will avoid using Facebook on Android.

<!-- vim:se tw=70: -->
