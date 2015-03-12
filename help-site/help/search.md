---
layout: help
title: Searching
---

ScrumDo lets you filter or search for stories &amp; cards from several pages on the site.  This includes a search box at the top of most pages.  Here are a few examples to get you started:

`#10` - Search for story #10  
`star wars` - All stories that contains the text "star wars"  
`assigned: mhughes` - All stories that are assigned to mhughes  
`tag: bug` - All stories that are tagged with the bug tag  
`assigned: mhughes, assigned: bob, tag: bug, star wars` - All stories that are assigned to either mhughes or bob and have the bug tag, and contain the text "star wars"

# Search Criteria

**Free Text**  
Type text into the box to search for it anywhere within the story or the comments of that story.

Example: `my search`

**By number**  
You can find a story by it's number by including the hash (#) symbol.  Search for multiple story numbers by separating them with commas.

Example: `#10`
Example: `#10,#101,#35`

**By Assignee**  
You can find stories assigned to someone by typing `assigned: ` and their username. 

Example: `assigned: mhughes`

**By Status**  
Find stories of a particular status by typeing `status: ` the the status.

Example: `status: done`

**By Epic**  
Find stories in an epic number with `epic: ` and the number.

Example: `epic: 5`

**By Date**  
You can search for stories either created or modified before or after a date.

Example: `createdafter: 2012-10-01`
Finds all stories created after October, 1st, 2012

Example: `createdbefore: 2012-10-01`
Finds all stories created before October, 1st, 2012

Example: `updatedafter: 2012-10-01`
Example: `after: 2012-10-01`
Both of these finds all stories last updated after October, 1st, 2012

Example: `updatedbefore: 2012-10-01`
Example: `before: 2012-10-01`
Both of these finds all stories last updated before October, 1st, 2012

For date format, you can use yyyy-mm-dd or mm/dd/yyyy
Example: `after: 10/1/2012`

**By Category**  
Search for stories in a specific category with the category (or cat) keyword.
Example: `category: bug`
Example: `cat: bug`

**By Tag**  
Search for stories with a specific tag with the tag keyword.
Example: `tag: release_1`

**Multiple criteria**  
You can separate criteria with commas to search for more than one.  Internally, we do an "or" within the same criteria and an "and" between different criteria.

Example: `assigned: mhughes, status: done`
Searches for stories assigned to mhughes that are also done.

Example: `assigned: mhughes, assigned: jdoe`
Searches for stories assigned to mhughes or jdoe

Example: `assigned: mhughes, assigned: jdoe, status: done`
Searches for stories assigned to either mhughes or jdoe and that are also done.

Example: `assigned: mhughes, assigned: jdoe, star wars`
Searches for stories assigned to either mhughes or jdoe and are marked done and contain the text 'star wars'


# Search / Filter Widget

![searchwidget.png](/images/blog/searchwidget.png)

Clicking the cog icon on the right will open a search window that helps you build more complex searches.  It will also let you save that search criteria to be reused in the future.

Clicking the magnifying icon on the left will show a list of previously saved searches that you can pick from.

You can type your search into the text field in the middle and press enter to perform the search.