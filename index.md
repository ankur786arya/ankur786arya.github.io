---
layout: default
title: ScrumDo - Some sub title
bodyclass: home
---

# ScrumDo 


## Blog Posts:
<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>