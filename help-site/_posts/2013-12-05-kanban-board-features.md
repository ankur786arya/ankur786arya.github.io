---
layout: post
title: Kanban Board Features
---

We're currently running a beta program with a few select companies to help refine our new Continuous Flow project features.  I'm writing this post today to tell you about some of the things you'll be able to look forward to when these are released to everyone.

# Cards

With the introduction of Continuous Flow projects, ScrumDo is using the term "Card" instead of "Story".  A card is a representation of a unit of work.  In Flow projects, you can set up custom card types under your project admin options.  Some common types include:

* User Stories
* Bugs
* Features


# Cells

Cells are where you place cards. They have a header with a label, and a body to place cards.

Your cell can have limits places on it, such as the number of cards, or the amount of points allowed.  These limits are displayed in the header of the cell.  These are often called WIP Limits, which stands for Work In Progress Limits.

One of the features we're really proud of is that cells can be configured to have several card styles.  When cards are dropped into a cell, the card automatically picks up the style.  This lets you use really compact styles for things like your input queue that might have a lot of cards, or a more expanded style for cells representing work being done so you can see all the details.

Here is an example of the 5 different types of styles we'll have at launch.  They all have 2 cards in them which are identical across all the styles.

![Cell Types](/help/kanban/images/cell_types.png)


## Headers

You can create 1-unit high cells that will have no body.  These are useful to apply a header across multiple cells.  When you create a header, you can associate it with one or more cells to apply WIP limits to.

![Header Examples](/help/kanban/images/header_examples.png)

----

# Workflows

Workflows are used to define the steps of work a unit of work must go through.  ScrumDo uses Workflows to define the reports that can be run against your project.

A workflow is made up of a series of workflow steps.

Each step is associated with one or more cells on your board.

Since more than once cell can be associated with a step, and not all cells need to be accounted for, this gives you the ability to filter and summarize your reports.  For instance, you might set up a workflow for each class of service on your board, and a separate workflow that cuts across them all for an overall summary view.


