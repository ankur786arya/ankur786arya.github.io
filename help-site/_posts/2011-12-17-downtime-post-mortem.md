---
layout: post
---


Today, we had our first bit of unscheduled downtime starting around 1:30pm EST.  For about 10 minutes the site was unavailable, and for about another 10 after that it was slower than usual while our search index rebuilt.

The cause is a little bit of a mystery.  We use Amazon Web Services for our hosting.  As part of that, they host our dns server.  For some reason, the DNS server stopped responding to our web server (but only to our web server).  That meant the web server couldn't find our database server and things devolved from there.

Our S.O.P is to run a script which rebuilds our web server from scratch and launches a new instance and then start investigating the problem.  So I did that.  About the time I found that DNS issue, the new server was up and running and it didn't have the DNS problem.  So I pushed the button that switched it over to our live production site and we were back in business.

Luckily, all the notification systems worked like they should have.  Within minutes my phone was chirping, my inbox was notified and a couple minutes after that I was getting a call from my colleague Ajay.  While any downtime is a bad thing, I feel relieved to know the systems we put in place all worked.

Now, I've got some investigation to figure out why that DNS server stopped responding, and figure out a backup in case that happens again in the future.

Sorry if you were trying to get some work done during that time, we try not to let this sort of thing happen.

-Marc