---
layout: post
title: Upcoming changes to story organization
---

As we mentioned in the previous blog post, we're working on some big UI/UX
improvements.  One area that we're tackling is how stories are organized
and categorized.

Right now we have categories and tags on Scrum based projects, and then we
have categories, tags, and card types on ScrumBan based projects.  It's confusing
to know when to use which of those three, and the naming of them is also
misleading.

So, we're narrowing down those three mechanisms to two.

![tags_labels.png](/images/blog/tags_labels.png)

**Labels**

Labels are pre-defined for your project and show up on your story as a colored
bar on the top of the card.  You can have as many labels as you like on each card.

This is your centrally-defined categorization mechanism and only a project 
admin can edit or create new labels.

**Tags**

Tags are defined ad-hoc whenever you type in a new one.  They are displayed
in the bottom footer of each card.  You can have as many tags as you like on each
card.

Like now, some labels are special and will be outlined in a color to bring attention to
them.  We'll be sticking with our current Blocked/Urgent tags initially, but have plans
to allow you to define your own color/tag mappings.

**Impact**

Practically, the big change here is that you can have more than one label per card, and we're 
dropping the notion of an explicit "card type" field.

Generally, we imagine people will use labels in similar ways that they have used
card types and categories in the past.  

Tags will likely be used as they are today as a general-purpose labeling and categorization
mechanism.

We will be doing some smart importing, so your current card types and categories will
start showing up as labels.  Your tags won't be touched.  So you won't lose anything in 
your project.

**Epics?**

Epics are sticking around and will become even more useful.  All projects will be able to view 
your backlog on your board and organize it by an epic view.  Likewise, the planning tool will
have that support.  Speaking of the planning tool, we'll have some more information on that in 
a new blog post soon.

Early next year, we have some big plans that will involve epics and a portfolio planning module.
