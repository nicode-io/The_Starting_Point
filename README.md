<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="">
    <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" alt="Logo" width="150" height=150">
  </a>

<h3 align="center">REACT NATIVE CURSUS</h3>

<p align="center">
    Dive into React Native
</p>
<p align="center">
    <br />
    <br />
    <a href="#mindmaps">MindMaps</a>
    ·   
    <a href="#mini-apps">Mini-Apps</a>
    ·
    <a href="#components">Components</a>
    ·
    <a href="#tips">Tips</a>
    ·
    <a href="#packages">Packages</a>
    .
    <a href="#timeline">Timeline</a>
    .
</p>

---

### MindMaps

*   React Native Summary
    +   Components
    +   Concepts
    +   Hooks
    +   Props
    +   States
    

---

### Mini-Apps

*   Basics
*   Number Guesser: choose a random number and let computer guess it according to your clues

---

### Components

####    REACT Native

*   Alert
*   Button
*   Keyboard
*   Modal
*   ScrollView
*   Text
*   TextInput
*   TouchableOpacity
*   TouchableWithoutFeedback
*   TouchableHighlight
*   TouchableNativeFeedback (android only)
*   View

####    EXPO
+   Components
    *   AppLoading
        +   Prolong the default loading until specified tasks are done, for example async tasks
        +   Takes a 'startAsync' parameter which must be a promise to be listened by the component
        +   Takes a 'onFinish' function parameter where we specify what should be executed, a state update for example
        +   Takes a 'onError' function parameter to manage promise failure
        

---

### Tips

(TO BE UPDATED)

*   Shadow properties work on iOS, Elevation works on Android
*   Flexbox is not working with **Text** component
*   Not all CSS properties works in React Native (rtfm)
*   Use spread operator to import style from basic component and add props style from custom component (see Card example in 02-NumberGuesser)
*   You can forward props (like in React) with ```<Component {...props} />``` to a child component
*   In a handler the order of multiple setState is not important as the next rendering won't occur before end of block execution
*   Use props destructuring for specify exact dependencies in useEffect
*   Fonts are loaded at project root (App.js) and are available everywhere (While dev: reload project after copying font's files)
*   Styling inheritance can be provided in two main ways:
    +   Custom ultra-basic components which is inherited by styled element
    +   Constant default-style stylesheet
*   Always use with and height for network images

---

### Packages 

*   expo
    +   @expo/vector-icons
*   expo-font
*   expo-status-bar
*   react
*   react-dom
*   react-native
*   react-native-web

---

### Timeline
> Current steps and history of my reconversion

![Timeline](https://github.com/nicode-io/nicode-io/blob/master/images/Timeline.png)
