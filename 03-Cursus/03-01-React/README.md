<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/nicode-io/ReactCursus">
    <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" alt="Logo" width="250" height=250">
  </a>

<h3 align="center">REACT CURSUS</h3>

  <p align="center">
    Learning path
    <br />
    <a href="#description">Description</a>
    ·
    <a href="#packages">Packages</a>
    ·
    <a href="#branches">Branches</a>
    ·
    <a href="#achievements">Achievements</a>
  </p>


---

### Description


This project aims to study REACT and everything related to it: hooks, events, routing, context, redux, requests.


---

### Packages
> NPM packages used in the project

-   react
-   react-dom
-   react-scripts
-   styled-components

---

### Branches
> Discover project & code evolution by subject

---

### Tips

####    Components
-   Dumb, stateless or presentational components are not managing states inside
-   Smart, stateful component,on the other hand, manage states

####    Events
-   Events work with on... jsx element followed by a function - ex: onClick{MyFunction} (note function pointer not execution) - This function is created above the JSX code in an anonymous function stored in a const (my way to work) - Good practise in naming this function is clickHandler, eventHandler, etc.

####    State
-   State concept: React generates at launch every function and jsx in all components and after all functions/components execution it creates a virtual DOM and don't do this operation again. To modify this behaviour you need **State** that will tell React "A change occurs, refresh the component(s) which changed" it's at this point that React can't re-render a fresh virtual DOM updated. **No state => No dynamic page** (even if you update a variable in your code )
-   95% of time useState hook must be called in the root of component function (not inside another function)
-   useState is always an array with a value, and an update function, syntax: ```const [myVariable, setMyVariable] = useState(props.myVariable)``` then a call of function for React to reevaluate component and redraw updated component.
-   A state is linked to only one component event if same component is rendered multiple time (for a list for example)
-   For multiple state in the same component you can use object value in useState and spread operator on updating state.
-   Whenever you update state that depend on previous you should not use object update with spread operator, but an update of state with previous state in params ```setSomething((prevState) => {});``` (good practise)

####    Lifting the state up
-   **Lifting the state up** is the tech'planation about move data up or down with props to allow another component to use them
-   use custom event on parent component to gather props from child, syntax: ```<ParentComponent onCustomEvent={customHandler} />``` then add props in child component and call the parent function.

####    Conditional statement
-   Use of **if** or **for** statement is forbidden in JSX, but you can use ternary expression
-   It's possible to trick JSX to display conditional content with ```myCheck === 0 && <my>JSX<code>``` if first part is true second part will be executed and so displayed
-   For total different render for a component, using if .. return JSX 1 else return JSX 2 works great (avoid using partial rendering for a clean code)

####    Dynamic CSS styling - 3 way to achieve
-   Find examples in **src/components/UI/Button/Button.js**
-   Inline styling
    -   Use the double curly braces to set CSS style, so you call an object attribute for styling, syntax: ```style={{height: myVariable}}``` ! Replace **-** in properties like background-color with camelCase, so backgroundColor ```{{backgroundColor: myVariable}}``` (if you really want to use **-** you need to place properties into single quotes)
    -   Use template string to dynamically set CSS, syntax ```<div className={`basic-class ${checkValue ? 'cssClassBad' : 'cssClassGood'}`}>```, this adds dynamic class (checkValue need to be defined in logic off course)
    -   You can chain template string front to others in the same element
-   Styled-components package:
    -   Use **tag function** for declaration, syntax ```const MyComponent = styled.htmlElement`parameters in template string` ```
    -   Inside template string is the css without call to a class, if you need hover, active, etc you use **&:focus** for example.
    -   Props can be passed to styled components and then used in the css to make ternary check etc
    -   Media queries can be placed into template string, syntax : ``` @media (min-width: 768px) { }```
-   CSS Modules:
    -   Import with syntax: ```import styles from './Button.module.css'; // styles is a chosen name, can be everything else```
    -   Rename your css file with .module, syntax ```Component.module.css```
    -   You can then call in component dynamic class object, syntax ```className={style.Component}``` (if you choose to name your import styles)

####    Debug


---

### Achievements
> What I learn with this project


TO BE UPDATED
