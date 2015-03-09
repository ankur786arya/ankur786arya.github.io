---
layout: default
title: ScrumDo - Availability and Security
---


# ScrumDo Availability and Security
----

We know your project is extremely important to you and your business, and we're very protective of it.  We strive for 100% availability and 100% security.  While neither is ever possible, we take all reasonable efforts to provide this to our customers.  

### Data center

We host all of our infrastructure in Amazon's cloud services.  We utilize multiple availability zones to assure that a fault in one physical location will not bring down the site.  All critical infrastructure has at least two redundant nodes.  

We regularly test taking down individual nodes to make sure the service remains resilient.

### Historical Record

While not a guarantee of future performance, ScrumDo has experienced high levels of availability in the past.  Here are some stats as measured by an external third party.

* 2013 - 99.998% Uptime
* 2012 - 99.9% Uptime

These stats include all unplanned service interruptions.  We have had less than 3 hours of planned downtime per year, all of which was late night (US Time zone) on weekends.

### Backups and Disaster Recovery

There are two primary types of customer data that we take great pains in preserving.  The first are all attachments uploaded to your project.  These files are stored in Amazon's S3 service which is designed to provide 99.999999999% durability.  This includes storing your files in multiple redundant data centers.

The second set of customer data is our database with all customer projects, stories, tasks, etc. in it.  We maintain a rolling 30 day backup which allows us to restore data from any point in time during that window.  We also make regular backups to Amazon S3 (see above).

Our backups are secured by Amazon's access control mechanisms.  

At no point are physical unencrypted backups in transit.


  
  

# Security
----

We take all appropriate industry standard security practices such as:

* System installation using a hardened and patched OS
* Dedicated firewall and encrypted access to help block unauthorized system access
* Intrusion detection systems to provide an additional layer of protection against unauthorized system access
* Only ever store hashed passwords

### SSL

All paid accounts may access all of ScrumDo over HTTPS/SSL.  You should automatically be redirected to the secure version, if you are not at any time feel free to replace the http with https in the URL.

### Physical Security

As mentioned, we are hosted in Amazon's cloud services.  A detailed description of their physical security can be found in the [AWS Security Whitepaper](http://media.amazonwebservices.com/pdf/AWS_Security_Whitepaper.pdf)

### Intrusion Detection & Remediation

We utilize both host based instruction detection systems and an external monitoring service to look for anything out of the ordinary.

We have mechanisms in place that can completely rebuild one of our application servers from scratch in mere minutes.  In the event of a suspected intrusion, we have a plan in place that allows us to isolate the compromised server and deploy a new one quickly.  

To date, we have never had to do this for security reasons.  However, we regularly use this same mechanism to deploy updates with 0 downtime.

### Change Management

Being a web based product developed in house brings several unique challenges in regards to security.  We take several significant precautions to help assure that we maintain a secure environment.

* Every line of code is reviewed for security by one of the company founders before going into production.
* Developers, whether contractors or employees, only have access to scrambled, anonymized customer databases.
* Only two people in the company (the founders) have full access to customer data.

### Credit Card Security

No ScrumDo staff has access to your credit card information.  It is all stored and vaulted by a third party, fully PCI compliant payment processor ([Pin Payments](https://pin.net.au/)).



# Company Info 
----

ScrumDo LLC has been around since late **2010**.  Currently, we have over **45,000** registered users and over **1000** companies actively using ScrumDo to manage their projects.  

ScrumDo LLC is self funded and profitable.  We plan on being around for the long term.




