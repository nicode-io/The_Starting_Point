<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/nicode-io/Hello_React_ATDD">
    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fleanpub.com%2Fsite_images1%2Fmastering-tdd-with-react%2Fimages----atdd-cycle.png&f=1&nofb=1" alt="Logo SASS" width="256" height="256">
  </a>

<h3 align="center">(◉ ͜ʖ◉))ﾉ彡&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hello React ATDD&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;✧٩(•́⌄•́๑)</h3>

  <p align="center">
    Discover ATDD, acceptance test driven development in the context of a React application
    <br />
    <br />
    <a href="#description">Description</a>
    ·
    <a href="#features">Features</a>
    ·
    <a href="#tips">Tips</a>
  </p>

---

## Description

In this learning project, we'll discover how to set our mind to a test driven development, red to green way, to build
more robust code.

After an introduction, we must practise to make the good test, focus must be made on testing user functionalities more
than implementation itself.

The tests won't insure a good code, we obviously need to follow good development rules such as SOLID, INVEST and many
more.

---

## Features

* *features/f001-Introduction*
  * Introduction to Jest basics
    * Matchers
    * Custom matchers
    * Mocking using jest.fn
* *features/f002-TDD_101*
  * Main objectives: 
    * Learn to split big task into relatively smaller ones and complete each one with a set of passing tests
    * Learn some refactoring techniques

---

## Tips

### General
* Writing test can usually be made with **3 steps**: 
  * Memo: "Steps to put an elephant in the fridge": 
    * Open the fridge 
    * Put the elephant in
    * Close the fridge
  1. Do the preparation work:
     * Set up the database
     * Initialize object to be tested
     * Loading some fixture data 
     * ...
  2. Invoke the method or function to be tested, usually assign the result to some variable
  3. Do some assertions to see whether the result is as expected or not
* Use **Given-When-Then** to arrange a test
  * Also called as **3As** format: 
    * **Arrange**/**Given**:
      * describe all the preparation, including setting up dependencies
    * **Act**/**When**:
      * Trigger action or change the state of a subject to be tested, usually a function call with prepared parameters
    * **Assert**/**Then**:
      * Examine the result to see if it matches the expected result in some way
* **Triangulation** is a way to implement TDD, we start from a failing test then a code with juste enough to make it pass, then write another test to drive changes from another angle. This way to do lead to a more and more generic code that accepts all tested scenarios. Even if it feels too much simple it's the foundation of TDD: split our code into small parts, then assemble all this little parts to get a robust and complete feature 
* 

### Jest

#### Main Matchers

* EQUALITY: **toEqual** and **toBe**
* OPPOSITE: **.not** ex: .not.toBe
* EXACT MATCH: **.toMatch()** ex: .toMatch(/\w+/)
* NUMBERS COMPARE:
  * **.toBeGreaterThan()**, **toBeGreaterThanOrEqual()**
  * **.toBeLessThan()**, **toBeLessThanOrEqual()**
* ARRAYS:
  * **.toContain**, strict check using *===* ex: .toContain(users[0])
  * **toContainEqual**, check value not memory address ex: .toContainEqual('Nicode')
* EXISTENCE: **.toBeDefined()**, **.not.toBeDefined()**
* Use **beforeEach()** and **afterEach()** inside a *describe* to avoid repeating ourselves in *it* tests
  *Use **beforeAll()** and **afterAll** if you want to repeat an operation on all test cases

### Expect

* Expect helpers:
  * **expect.stringContaining**
  * **expect.arrayContaining**
  * **expect.objectContaining**
* Use **expect.extend({...})** to create custom extension in our tests (see expect-extend.test.js file in 01-jest-intro
  directory)
  * This allows us to create matcher more human-readable like **toHaveName**, **toBelongToDepartment**

### jest.fn Mocking

* Allow us to create a spy for a function
* Allow us for mocking API call (see jest-fn-mocking.js/.test.js file in 01-jest-intro directory)

### Babel

* Install
  * ```$ yarn add -D babel-jest babel-core regenerator-runtime @babel/present-env```
  * Create a **.babelrc** file and add
    ```js 
    {
      "presets": [
        "@babel/preset-env"
      ]
    }
    ``` 
  * We can now use ES6 features like **import/export**

---

<a href="https://linkedin.com/in/nicolas-denoel">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/linkedin/linkedin-original.svg" alt="linkedin.com/in/nicolas-denoel" width="40" height="40" />
</a>  <a href="https://twitter.com/nicode_io">
  <img align="center" src="https://github.com/devicons/devicon/blob/master/icons/twitter/twitter-original.svg" alt="twitter.com/inicode_io" width="40" height="40" />
</a>  
