---
layout: post
---

Today, Amazon Web Services went down for several hours, taking ScrumDo down for part of that.  It was a major outage that took down a significant part of the internet including giants like Reddit, Minecraft, and Foursquare.  Unfortunately, for some of that time we were at the mercy of Amazon and unable to fix anything because the very tools we use in this sort of situation were also down.  We apologize for the inconvenience and will be working hard in the upcoming months to come up with solutions to avoid this sort of thing.

For the technically inclined, here's what happened...

Around 1:45PM EST, ScrumDo became unavailable.  We were notified and immediately began diagnosing the situation.  It turns out that the load balancer (ELB) we were using was unable to contact any of our application servers.  This is odd, since we host both our app servers and our DB servers in multiple Amazon availability zones to avoid exactly this sort of situation.

Our first plan of attack is to launch additional app servers.  While those were starting up, we began investigating the root cause of the failures.  It turned out to be a problem with the load balancer itself.  We could directly access ScrumDo using arcane internal DNS names without issue.  At this point, it would have been a simple matter to point our DNS for www.scrumdo.com directly at one of those app servers and be up and running.

Unfortunately, both the control panel and the command line API tools for changing DNS were not working.

At this point, we remembered that our beta site doesn't use a load balancer.  We tried that, and it was working fine, so we tweeted, and made an announcement on our facebook page letting our users know.  A few people successfully started using that.

Shortly after that, we were able to get the DNS for www.scrumdo.com switched over to one of our single app servers (luckily, we had spun up an oversized one earlier).  This was about an hour in, but suddenly the site was accessible to some people, and after DNS changes propagated accessible to everyone.

All was fine for a few minutes, until too many people started using it.  It turns out that Amazon was also having a problem with performance on their storage solution (EBS).  Performance was fine for a couple users, but once a few hundred people all started hitting it at once, our search server was overwhelmed, and it caused requests to be timed out, making the site unavailable to most people again.

It took us a few minutes to figure out what was going wrong at that point.  Once we did, we disabled our search server, once again restoring access for most people.  At this point, ScrumDo was working, minus search.  

In total, about an hour and a half of downtime.  We're really frustrated by this and want to do better in the future.

We'd like to thank all of our users for being patient through this.