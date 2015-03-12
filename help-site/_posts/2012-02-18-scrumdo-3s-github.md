---
layout: post
title: ScrumDo &lt;3's GitHub
---

![](http://scrumdo-cdn.s3.amazonaws.com/manual_uploads/GitHubSlide.jpeg)

Here at ScrumDo headquarters, we rely on [GitHub](http://www.github.com/) for a whole bunch of things.  About a year ago, we rolled out our Github Issues extra that helps sync your issues with your stories.  Unfortunately, the way we made that extra had some fundamental problems.  Among those problems, two stuck out... It relied on polling GitHub for changes, and it had a confusing authentication mechanism.

Over the past two weeks, we've been hard at work improving how we integrate with GitHub.

The first big change is that you can now sign up and authenticate to ScrumDo using your GitHub login.  So for any GitHub users out there, you don't have to worry about creating a new ScrumDo account and remembering your login details.

![](http://scrumdo-cdn.s3.amazonaws.com/manual_uploads/gh_signin.png)

The other big change we're pleased to announce is a brand new GitHub extra.  You can find it on the extras page of your project (paid plans only).  

![](http://scrumdo-cdn.s3.amazonaws.com/manual_uploads/gh_integration.png)

Again, you can use your GitHub login so there's no confusing API token to find.  Just click the big "authenticate" button to be taken to GitHub for authorization.  

Tip: You can use a ScrumDo specific account on GitHub so automatic updates aren't confused with manual updates from people.  Just log out of GitHub, create that account, and grant it access to your projects.  Make sure you're logged in as that user before authenticating the extra from ScrumDo.

![](http://scrumdo-cdn.s3.amazonaws.com/manual_uploads/gh_login.png)

You'll get a chance to add one or more repositories to your ScrumDo project.  

![](http://scrumdo-cdn.s3.amazonaws.com/manual_uploads/repo-3.png)

After that's done, your GitHub issues should sync within a few minutes to ScrumDo into your Story Queue.  If you chose to upload stories, then you'll see all of your stories appear in your GitHub issues list (careful with that option if you have a lot of stories!)

We also set up a couple of GitHub service hooks for you to automatically sync some status updates from GitHub to ScrumDo.  

After this is set up, there are a few special commands you can put into your commit messages to update ScrumDo.  The first one is in the form of "Story #1".  When you do this, the story with that number will get a link to this commit letting you track what work has been done for what stories.  Example commit message:

* Implemented the server side of Story #32

That commit will then show up in your iteration view in your scrum log, as a tag on the story, and in the story quick view.

![](http://scrumdo-cdn.s3.amazonaws.com/manual_uploads/scrumlog.png)

![](http://scrumdo-cdn.s3.amazonaws.com/manual_uploads/gh_commit_story.png)

![](http://scrumdo-cdn.s3.amazonaws.com/manual_uploads/quickview-1.png)

You can also change the status of a story from a commit message.  To do that, add the words todo, doing, reviewing, or done to the above command.

* Story #210 todo
* Story #210 doing
* Story #210 reviewing
* Story #210 done

Examples:

* Implemented the server side of Story #32 doing
* Story #210 done - the user can now sort their tasks.

You can reference multiple stories from the same commit.  Example:

* Implemented new css styles for story #210 and story #50

If you were using the old GitHub issues extra, you'll see both plugins on your extras page.  If you enable the new GitHub Integration plugin, you'll be prompted to upgrade the old one, so don't disable it beforehand!

In the future, we plan on making similar integrations for other version control systems / sites.

