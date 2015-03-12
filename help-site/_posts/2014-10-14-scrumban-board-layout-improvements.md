---
layout: post
title: Scrumban Board Layout Improvements
---

The first big change you'll notice is that by default, your board will now resize 
vertically on it's own.  No more scrolling cells that make it hard 
to see everything at once.  If you liked the scroll bars, there's
now an option on the edit board screen to switch back.  Picking a compact 
list-view for cells that tend to have a lot of cards becomes a lot more 
important.

We've also revamped how dragging stories works to make it much more natural.  
This includes things like selecting several stories by holding down shift and 
then dragging the group around and better hit-detection of cells so you can
drop a card far below the others and still have it correctly register.

A full list of improvements follows:

<ul>
    <li>The lead time histogram can now be filtered by date.</li>
    <li>The CFD can now be filtered by date.</li>
    <li>
        Cells on the Kanban board now vertically resize by default instead of getting scroll bars.
    </li>
    <li>
        Multiselect on the kanban board has been improved.
        <ul>
            <li>Use shift or ctrl &amp; click on cards to intiate multi select.</li>
            <li>Single click with no key on an unselected card to deselect all.</li>
            <li>Use the toolbar options to apply actions to groups of cards.</li>
            <li>You can now drag groups of cards around the board.</li>
        </ul>
    </li>
    <li>Drag &amp; Drop on the Kanban board has been improved.
        <ul>
            <li>You can now drag cards to any spot within a cell to drop them in that cell.</li>
            <li>It is now easier to drag cards to the backlog.</li>
            <li>Dragging now works on iOS devices.</li>
        </ul>
    </li>
    <li>Standard markdown image tags now work within the detail of a card.  Example:<br>
        <pre>![Mascot](https://d11uy15xvlvge3.cloudfront.net/static/v95/scrumdo/images/org-picker-images/artwork.jpg)</pre>
        Note: If you use these image tags, we will no longer be able to
              auto-link URL's in the fields where they exist because the syntax
              gets ambiguous.  In that case, you can still use markdown links.
    </li>
    <li>Several performance improvements related to live updates of your board have been implemented.</li>
</ul>