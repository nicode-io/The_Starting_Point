<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/nicode-io/Advanced-CSS">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/512px-Sass_Logo_Color.svg.png" alt="Logo SASS" width="512" height="384">
  </a>

<h3 align="center">(◉ ͜ʖ◉))ﾉ彡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ADVANCED CSS-SASS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✧٩(•́⌄•́๑)</h3>

  <p align="center">
    Learn CSS/SASS superpowers including fully responsive designs, 7/1 architecture, Flexbox, Grid and many more
    <br />
    <br />
    <a href="#description">Description</a>
    ·
    <a href="#features">Features</a>
    ·
    <a href="#tips">Tips</a>
    ·
    <a href="#codepen">Codepen</a>
  </p>

---

## Description

This repository aims to encapsulate advanced CSS/SASS learning. All three projects only contains CSS and so no JS or
JQuery is used as it's not the purpose of this learning.

Repository contains three main projects:

1. Natours: project is using only "vanilla" SASS without Flexbox or Grid and so, using float design
2. Trillo: project is using vanilla SASS and Flexbox (no Grid so)
3. Nexter: project is using Grid and all SASS superpowers

---

## Features

* *features/Nexter_Project* Vanilla CSS/SCSS + Grid + Flexbox
    * Create a Grid layout
    * Make layouts more flexible than before using the superpowers of Grid and also Flexbox
    * Reduce drastically the amount of media queries needed with an optimized Grid layout
* *features/Trillo_Project* Vanilla CSS/SCSS + Flexbox
    * Use flexbox features on top of vanilla SCSS/CSS
    * Make flexible layouts using media queries and flexbox
    * Improve UI on each breakpoint, changing orientation or disposition of UI elements
    * Use CSS variables (to show alternative to SASS variables here)
    * Use SASS variables (for breakpoints definition here)
* *features/Natours_Project* Vanilla CSS/SCSS
    * Discover all vanilla css power
    * SASS with 7/1 architecture
    * Responsive design:
        * Media queries using custom manager to easily includes responsive behaviours
        * Responsive images using 3 different systems
    * Automation css building
        * Concat
        * Prefix
        * Compress

---

## Tips

### General

* 3 pillars of HTML/CSS: responsive design, maintainable and scalable code, web performance
* Responsive designs:
    * Fluid layouts
    * Media queries
    * Responsive images
    * Correct units
    * Mobile First or Desktop first
* Maintainable scale:
    * Clean code
    * Easy to understand
    * Grow
    * Reusable
    * Organise files
    * Name classes well
    * Structure HTML
* Web performance:
    * Less HTTP requests
    * Less code
    * Compress code
    * Use CSS preprocessor
    * Less images
    * Compressed images

### CSS/SASS

* How web pages are build under the hood:
    1. HTML is loaded
    2. HTML is parsed
    3. CSS is loaded
    4. CSS conflicts are resolved (cascade)
    5. DOM is created
    6. CSSOM (CSS object model) is created
    7. Render Tree
    8. Visual formatting model
    9. Final page rendering
* A CSS **RULE** = Selector + Declaration block
* A CSS **DECLARATION** = 1 property + 1 declared value
* margin: 0 auto => center element
* &:not(:last-child) {...} => target all elements but the last

### Architecture

* **Think**
    * Modular building blocks
    * Reusable, independent, similar to atomic design
* **Build**
    * BEM Block Element Modifier model to name classes
* **Architecture**
    * 7/1 pattern:
        * base: animations, base, typography, and utilities
        * abstracts: contain variables, functions, mixins, ...
        * components: a file for each reusable block
        * layouts: holds multiple components together
        * pages: specific to screens with multiple layouts and components
        * themes: css related to theming
        * vendors: css for 3rd-party libraries

--- 

## Codepen

You can find simple demo codepen for main concepts:

* [SASS](https://codepen.io/nicolasdenoel/pen/wvPXqGW)
* [FlexBox](https://codepen.io/nicolasdenoel/pen/KKyJPXM?editors=1100)
* [Grid starter](https://codepen.io/nicolasdenoel/pen/rNYXQKx)
* [Grid mini-challenge](https://codepen.io/nicolasdenoel/pen/xxPvBed)
* [Grid explicit vs implicit](https://codepen.io/nicolasdenoel/pen/RwxbVER)
* [Grid minmax auto-fill/fit concept](https://codepen.io/nicolasdenoel/pen/qBpWjRZ)

---

<a href="https://linkedin.com/in/nicolas-denoel">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/linkedin/linkedin-original.svg" alt="linkedin.com/in/nicolas-denoel" width="40" height="40" />
</a>  <a href="https://twitter.com/nicode_io">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/twitter/twitter-original.svg" alt="twitter.com/inicode_io" width="40" height="40" />
</a>  

