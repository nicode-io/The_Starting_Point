<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/nicode-io/DockerCursus">
    <img src="https://github.com/devicons/devicon/blob/master/icons/materialui/materialui-original.svg" alt="Logo" width="250" height=250">
  </a>

<h3 align="center">MATERIAL UI CURSUS</h3>

<p align="center">
    Create beautiful UI in React 
    </br>
</p>
<p align="center">
    <br />
    <br />
    <a href="#description">Description</a>
    ·
    <a href="#packages">Packages</a>
    ·
    <a href="#components">Components</a>
    ·
    <a href="#concepts">Concepts</a>
    ·
    <a href="#tips">Tips</a>
</p>

---

## Description

<p>
Learn more about Material  UI library for React. It allows you to define beautiful UI, use a react-oriented design framework with all you need: components, flex, grid and many more.
</p>
<p>

</p>
<p>

</p>
<br/>

---

## Packages

@fontsource/roboto
@material-ui/core
@material-ui/icons
@material-ui/style
react
react-dom
react-router
react-router-dom
react-scripts

---

##  Components

-   AppBar
-   ElevationScroll
-   Toolbar

---

##  Concepts

*   Material UI use JSS, a Javascript CSS which syntax looks almost like CSS :
    +   use camelCase in replacement of dash separated - ex: border-radius(css) => borderRadius(jss)
    +   string need to be put within single quotes
*   Two place to style: a global one and a specific one:
    +   Global style through custom theme
    +   Specific style with inline-styling, which is functions using JSS
*   Inline styling works with three elements:
    +   ```const useStyles = makeStyles(theme => ({ paramName: value })``` is a function define before the component and so, outside the JSX rendering code,
        *   You can use the spread operator to import global params from theme.
    +   ```const classes = useStyles();``` inside your component to link useStyle hook to a variable.
    +   ```<div className={classes.paramName}/>``` insert params calling into JSX/JSS
*   Responsive behaviours are managed by folllowings:
    +   **Breakpoints** which are defined in our **Theme** properties
    +   through **Drawers**

---

##  Tips

*   Beware that @material-ui/core/styles and @material-ui/styles are two different packages
*   All theming customization props are located in the [Default Theme Object](https://material-ui.com/customization/default-theme/)
    +   Colors in **Palette** section
    +   Fonts in **Typography** section
        *   Font size in Material UI use REM and is base on the **fontSize** attribute in this section
*   Theming manage light and dark mode with a complete default configuration
*   Menus are build on top of MAterial UI so to style it you muse use ```classes={{paper: classes.claasName}}```
---

<a href="https://linkedin.com/in/nicolas-denoel">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/linkedin/linkedin-original.svg" alt="linkedin.com/in/nicolas-denoel" width="40" height="40" />
</a>  <a href="https://twitter.com/nicode_io">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/twitter/twitter-original.svg" alt="twitter.com/inicode_io" width="40" height="40" />
</a>  
