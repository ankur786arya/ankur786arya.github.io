---
layout: post
title: Handling bugs in Scrum
---

I was talking with a company that is one of ScrumDo's largest users the other day.  They have a complex bug tracking and verification system that integrates test plan development, bug tracking, and tracking field issues.  They are highly invested in that system, and are also highly invested in Scrum for new development.  There are a dozen or so teams each working on different projects.  They were trying to figure out how to handle bugs within their scrum process.  After talking it through with them, it seemed there were three main modes that different teams were working in.

### Labor bound bug fixing 
Some projects have a list of bugs that the product owner knows that they want to get fixed for a particular release.  There may also have a set of features that should be implemented for that release.  Since those two requirements are conflicting, it makes a lot of sense to track them the same way.  In these cases, I would create stories for bugs, size them, and then prioritize them against new feature development.

Pros:

* Full visibility into bugs being fixed
* Prioritize bugs vs. new feature development

Cons:

* More overhead to track the information in bug reports and user stories.

To help reduce that overhead, it probably makes a lot of sense to group bugs in functional areas.  Imagine your had three bugs:

* Log in page doesn't have a max character limit
* Passwords are case insensitive instead of case sensitive
* After logging in you're not directed to the proper page

Those three bugs could be represented in a single user story that reads something like "As a user, I expect the login page to function correctly" and then have the three bug numbers listed in the detail of that story as examples of where it differs.   This helps engineers, since they're in the same area of the code to fix do the work, and it helps QA engineers since it's one feature to test instead of three bugs to regress.

Sizing bugs can be tricky.  By grouping the bugs like this, it can help.  Think of what it would take to implement the feature anew, and then reduce it by a factor representing how wrong the overall feature currently is.   If the login feature as a whole is 20 points, and these bugs represent a deviation of about 20% from the desired functionality, you know there's about 4 points of work.  If you're using the standard fibonacci sequence, round up to 5 points.

### Time bound bug fixing 
Any sufficiently large product probably has a long list of minor bugs that need fixing.  Sometimes, a product owner will decide "I want the team to spend a flat 20% of the time fixing bugs".  That makes the work time-bound instead of labor-bound.  Presumably, the other 80% of the time will be spent working through a normal scrum process.  In these cases, it probably doesn't make sense to create stories, size them, etc.  Track that work purely in your defect-tracking system, and track only the new work through your scrum process.

In this scenario, the bug fixing is essentially a constant tax on your velocity.  You can use your backlog to track new feature work, and your velocity is only useful to predict when that work will be completed.

Pros:  

* Very low overhead
* No duplication of information

Cons:

* Limited visibility into what will get fixed and when
* No ability to prioritize bugs vs. new features (besides adjusting the percentage of time spent on either)

Even in a scenario like this, from time to time a major bug might come up that absolutely has to be fixed before a release.  In those cases, it's appropriate to create a story to fix it since it does not fit the time-bound bug fixing model.  


### New Features 
For brand new features, there shouldn't be a whole lot of bug reports in an external system.  Stories shouldn't be marked done until they've both been tested and the bugs have been fixed.  For the small trickle of bugs that don't get handled within an iteration, I'd mostly handle those within the scrum process as new stories.  For teams that find this difficult, it may point to a disconnect between the engineering and QA teams.  

### ScrumDo 

Clearly, this was a general scrum question, and not a ScrumDo specific question.  These solutions work whether you're using ScrumDo, some other system, a spreadsheet, or cards on a wall.  It's important for teams to find a solution that work for them.

Over time, we plan on supporting integrations with several popular bug tracking systems to reduce the pain in duplicating bugs into stories.  We're actively looking at a few such as HP Quality Center, Bugzilla, and Trac.  
[Let us know](http://support.scrumdo.com/discussions/suggestions/43-what-third-party-integrations-would-you-like-to-see) what other systems you'd like to see supported.
