[![wakatime](https://wakatime.com/badge/github/nicode-io/ReactNative_Cursus.svg)](https://wakatime.com/badge/github/nicode-io/ReactNative_Cursus)

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
    +   DONE: 
        *   Number guessing input
        *   Number guessing logic
        *   Rounds display
        *   Custom layout / fonts / buttons
        *   Dynamic styling (partial)
    +   TODO
        *   Dynamic styling (full)
            +   Landscape responsiveness
            +   SmallScreen responsiveness
    +   IDEAS
        *   Multiplayer guessing game
        *   Scoring / Gamification
        *   Design improvement
    
---

### Components & API

####    REACT Native

*   Alert
*   Button
*   Dimensions (api)
    +   Width
    +   Height
    +   FontScale
    +   Scale
*   FlatList (best perf)
*   Keyboard (api)
*   KeyboardAvoidingView
*   Modal
*   Platform (api)
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
    *   ScreenOrientation (api)
        +   ```lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)``` useful to lock an app at a certain point (ex=: on game start)
        +  (TODO) rtfm for other methods
        +   Not replacing **Dimensions** but can be useful in some cases 
        

---

### Tips

(TO BE UPDATED)

####    Global
*   Use props destructuring for specify exact dependencies in useEffect
*   In a handler the order of multiple setState is not important as the next rendering won't occur before end of block execution
*   You can forward props (like in React) with ```<Component {...props} />``` to a child component
    
####    Styling 
*   Shadow properties work on iOS, Elevation works on Android
*   Not all CSS properties works in React Native (rtfm)
*   Use spread operator to import style from basic component and add props style from custom component (see Card example in 02-NumberGuesser)
*   Fonts are loaded at project root (App.js) and are available everywhere (While dev: reload project after copying font's files)
*   Styling inheritance can be provided in two main ways:
    +   Custom ultra-basic components which is inherited by styled element
    +   Constant default-style stylesheet
*   Always use with and height for network images
    
####    Responsiveness
*   flex: 1 takes all spaces possible while flexGrow: 1 have a different behaviour (see doc)
*   Dimension object
    +   Allow to get user's screen value
    +   Only runs once in our app lifecycle, so orientation modification should be handled through states and listeners wrapped in useEffect
    +   Can be use anywhere where JS runs
    +   Can use conditions ```marginTop: Dimensions.get('window').height > 600 ? 20 : 10``` or if statement block to render totally different JSX if needed
    +   Can be used to give a styles value according to result ```let listContainerStyle = styles.listContainer; listContainerStyle = styles.listContainerBig;```
    +   Can be used to dynamically change image and font size too
*   Orientation (landscape and portrait) can be set in **app.json** in Expo projects
    +   Values: 'landscape', 'portrait', 'default' (rotating)
*   KeyboardAvoidingView: 
    +   'behaviour' parameter as 'position' (works best on iOS, 'padding' (worked best on Android), 'height' values
    +   'keyboardVerticalOffset' is another params (rtfm)
*   **Button** is the only-one build-in component that is **platform distinct** in React Native

####    Platform
*   Use **Platform** to set your style according to running OS
*   Good practise is to merge styles in separate styles and then call with Platform.select())
    +   Syntax: ```View style={{...styles.container, ...Platform.select({ios: styles.containerIOS, android: styles.headerAndroid```
*   Platform in 'if' statement is also used a lot
    +   Syntax ```let ButtonComponent = TouchableOpacity;```
    ```if (Platform.OS === 'android' && Platform.Version >= 21) {```
    ```ButtonComponent = TouchableNativeFeedback;```
    ```}``` then call **<ButtonComponent>, and it will fit according to OS
*   You can use complete different files to avoid overwhelming sometimes your code with if statement 
    +   To do that simply name your two files: **MyComponent.ios.js** and **MyComponent.android.js** and React Native will automatically load the OS-related file when your code is calling **MyComponent** 
    +   Beware of file import naming cause IDE will sometimes add OS extension ;)
    
### Navigation

*   Top-level component in **createStackNavigator** receive a special **navigation** props with many functions (rtfm)
    +   The first go-to function is **navigate()**
*   **Push** is useful to navigate inside the same components but with many links (like a file tree f.e), push always navigate to the link even if it pointed to current screen
*   To navigate back to previous screen : ```navigation.pop()``` (stack only) or ```navigation.goBack()``` (global)
    +   To navigate to top of the stack: ```navigation.popToTop()```
*   Replace stack by a new one on link (f.e: after login you won't have a back to login screen but new stack): ```navigation.replace()```
*   You can pass a **params** parameter to **navigate()** and passed any key/value pari you want to send props, or any other data
    +   Grab then that values in your other component with ```const paramValue = props.navigation.getParam('paramName');``` (paramName is off course the key set before'
    +   You can grab value in header using a function (ref in next point)
*   Configure header 
    +   Inside component: using (outside main component function) call to ```Component.navigationOptions = ... ``` where you can use **object** or a **function** to modify header (see 03-ProductsDemo) 
    +   In navigator (good DRY practise) : add a **navigationOptions** to your navigation declaration, after **screen** must-have parameter, **navigationOptions** stay the same object you can configure
        +   DRY navigator: use the second parameter of **createStackNavigator** object (first is routeConfigMap) to declare, inside this object, a global **defaultNavigationOptions** object which takes same parameters as **navigationOptions**
        +   defaultNavigationOptions is overridden by component header styling BUT **navigationOptions inside navigator overrides all the rest**
*   React-native-screens: for now just remember to call ```enableScreens()``` in root (app.js) after installing packages, it enhances performance, for more => RTFM

### Filters
*   ou can configure filters layout with **<Switch />** component

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
*   react-native-screens
*   @react-navigation/native
---

### Timeline
> Current steps and history of my reconversion

![Timeline](https://github.com/nicode-io/nicode-io/blob/master/images/Timeline.png)
