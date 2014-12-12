---
layout: post
title: "Cheat in an Online Quiz"
date: 2014-12-11 18:14:44 +0800
comments: true
categories: 
---

Background
---

I saw [an online quiz on France Technology][quiz].  I *didn't* know
the answers, but wanted to give the *right* response.

<!-- more -->

How?
---

First, view the HTML source code of the web page for the quiz and find
the relevant part.

{% codeblock Part of the source code for the quiz lang:html http://goo.gl/cy3GYD %}
<div><h3>1.In which year was the first French technical exhibition
held in China?</h3></div>
<input type="radio"  name="d1">A.1492 <br />
<input type="radio" name="d1">B.1954<br />
<input type="radio" name="d1" value="1">C.1964 <br />
<input type="radio" name="d1">D.2014<br />
<input type="button" value="Submit" class="submit"/>
</div>
{% endcodeblock %}

It's quite obvious that 'C' is the answer.

If one wants to know what will happen after clicking the "Submit"
button, one may search for this word in the HTML source code.  In this
case, one finds a [jQuery] function.

{% codeblock What does the "Submit" button do? lang:js http://goo.gl/cy3GYD %}
$(document).ready(function(){
  $(".submit").click(function(){
	$this=$(this);
	value=$this.parent().find("input:radio:checked").val();
	if(value==1){
	    alert("Congratulations! right answer~");
	}else{
	    alert("OOPS, wrong answer~");
	}
  });
});
{% endcodeblock %}

Finally, one can conclude that if the radio button has the value
*one*, then it is certainly the answer.

[quiz]: http://www.kejifalanxi.com/en/category/quiz
[jQuery]: http://jquery.com
