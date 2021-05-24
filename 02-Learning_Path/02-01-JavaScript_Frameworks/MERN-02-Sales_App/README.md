# (◉ ͜ʖ◉))ﾉ彡 SALES APP ✧٩(•́⌄•́๑)
>   Create a quick sales app with MEAN stack



###  Index

-   [Project Description](#project-description)
-   [NPM Packages](#npm-packages)
-   [Release Notes](#release-notes)
-   [Create backend structure](#create-backend-structure)
-   [Understand exports / inheritance](#understand-exports-/-inheritance)
-   [Collaboration](#collaboration)
-   [Timeline](#timeline)

---

### Project Description
> Start 10-10-2020

This project aime to upgrade MERN/MEAN knowledge, how back & front can communicate with each other.
This project isn't focused on the framework used but more on global way to create MERN/MEAN applications.

---

### NPM packages
>   Packages that are used in this project

*   Body-parser
*   Express
*   Jsonwebtoken
*   Mongoose
*   Mongoose-unique-validator
*   Nodemon

---

### Release Notes

####    v-0.5
>   Add upload user file using Multer

*   Install Multer package
*   Add 'multer-config' to 'middleware/'
*   Rewrite stuff controllers and routes

####    v-0.4
>   Authentication system   

*   Add followings:
    *   **user.js** to models folder
    *   **user.js** to controllers folder
    *   **user.js** to routes folder
*   Create **auth.js** in the middleware folder 
*   Add authentication system to our auth middleware
*   Apply a middleware to specific routes
*   Add README sections:
    *   Create backend structure
    *   Understand exports / inheritance

####    v-0.3
>   Create another app

*   Create another app skeleton
*   Add CRUD operations 

####    v-0.2
>   CRUD operations

*   Set up database and Mongoose
*   Create a schema model in 'backend/models.thing.js'
*   Implement CRUD for items to sale 

####    v-0.1 
>   Communication between back & front

*   Init tools:
    *   Node.JS
    *   Angular 
    *   Express
    *   Nodemon
    *   Body-parser  
*   Send data to front end through request (app.use())
*   Receive data from front end through request (app.post())
*   Manage back-end server connection
*   Handle connection errors / request errors

---

###    Create backend structure
>   Have a good start with good project tree

*   **backend/**
    *   **controllers/**
        *   component_one.js
        *   component_two.js
        *   ...
    *   **middleware/**
        *   midl_one.js
        *   midl_two.js
        *   ...
    *   **models/**
        *   component_one.js
        *   component_two.js
        *   ...
    *   node_modules/
        *   ...
    *   **routes/**
        *   component_one.js
        *   component_two.js
        *   ...
    *   **.gitignore**
    *   **app.js**
    *   package.json
    *   package-lock.json
    *   **server.js**

---
   
###    Understand exports / inheritance
>   Backtrack your app path

*   **SERVER.JS**
    *   Inherits **APP.JS**
    *   Set up server connection
    *   Require : 
        *   **http** to import http package
        *   **app** to import **APP.JS** file
        
*   **APP.JS**
    *   Inherits **ROUTES/**
    *   Set up : 
        *   *Express* application
        *   *MongoDB* database connection
        *   Headers to prevent *CORS*
        *   Body request parsing
    *   Require:
        *   **express** to create application
        *   **mongoose** to create database connection
        *   **body-parser** to parse the requests
        *   Variables to import **routes/** files
        
*   **ROUTES/**
    *   Inherits **CONTROLLERS/**
    *   Set up relation between url path and controller to use
    *   Require : 
        *   **express** to make router component available
        *   **router** which is an easy way to configure routing
        *   Variables to import **controllers/** files 
        
*   **CONTROLLERS/**
    *   Inherits **MODELS/**
    *   Execute functions based on models and triggered by routes
    *   Require :
        *   Variables to import **models/** files
        
*   **MODELS/**
    *   Does not inherit from previous folders/files
    *   Create schemas for database
    *   Require : 
        *   **mongoose** to create models and schemas
 

---

### **BeCode** Intensive Bootcamp     
This project took place in my learning path in BeCode (see below) to full stack web developer.
In seven months you have a wonderful luck to become a great web developer. Inclusion and share spirit is your daily feeling !  
Give maximum to get maximum :rocket:

### COLLABORATION

Hello, I'm [Nicolas](https://www.linkedin.com/in/nicolas-denoel/), a computer science enthusiast who is in the middle of his reconversion as a developer. After 15 years in the commercial sector as a manager and director, I decided to put this career on hold to devote myself fully to development.  
After an intensive 7 month bootcamp at Becode where I was able to acquire the superpowers of a junior developer, I am now constantly exploring the challenges that the various companies and associations active in the field can offer me.  
Positive spirit, with an unquenchable thirst for learning, committed and structured, I like to take up challenges and always progress by giving the best of myself. 
If you have a project, no matter how big or small, don't hesitate to share it, we always have to win by doing things alongside others.  

See you soon!  

### TIMELINE
[:calendar: Discover the great timeline of my adventure to become a developer. Want to write your company's name on it ? Let's meet !](https://timelines.gitkraken.com/timeline/2e12cc334eb0406b84bf7a6339e666c4?range=2020-05-26_2020-06-27)  

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)






