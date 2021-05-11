
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


---

### Branches
> Discover project & code evolution by subject

---

### Tips
    ####    Events
-   Events work with on... jsx element followed by a function - ex: onClick{MyFunction} (note function pointer not execution) - This function is created above the JSX code in an anonymous function stored in a const (my way to work) - Good practise in naming this function is clickHandler, eventHandler, etc.
    ####    State
-   State concept: React generates at launch every function and jsx in all components and after all functions/components execution it creates a virtual DOM and don't do this operation again. To modify this behaviour you need **State** that will tell React "A change occurs, refresh the component(s) which changed" it's at this point that React can't re-render a fresh virtual DOM updated. **No state => No dynamic page** (even if you update a variable in your code )
-   95% of time useState hook must be called in the root of component function (not inside another function)
-   useState is always an array with a value, and an update function, syntax: ```const [myVariable, setMyVariable] = useState(props.myVariable)``` then a call of function for React to reevalute component and redraw updated component.
-   A state is linked to only one component event if same component is rendered multiple time (for a list for example)
-   For multiple state in the same component you can use object value in useState and spread operator on updating state.
-   Whenever you update state that depend on previous you should not use object update with spread operator, but an update of state with previous state in params ```setSomething((prevState) => {});``` (good practise) 

    ####    Lifting the state up
-   **Lifting the state up** is the tech'planation about move data up or down with props to allow another component to use them 
-   use custom event on parent component to gather props from child, syntax: ```<ParentComponent onCustomEvent={customHandler} />``` then add props in child component and call the parent function.

---

### Achievements
> What I learn with this project


- ...

---

<a href="https://linkedin.com/in/nicolas-denoel">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/linkedin/linkedin-original.svg" alt="linkedin.com/in/nicolas-denoel" width="40" height="40" />
</a>  <a href="https://twitter.com/nicode_io">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/twitter/twitter-original.svg" alt="twitter.com/inicode_io" width="40" height="40" />
</a>  
