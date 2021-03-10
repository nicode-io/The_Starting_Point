C# .Net - Discovery

- [Description](#description)
- [Installation](#installation)
- [Branches](#branches)
- [Tips](#tips)
- [Collaboration](#collaboration)
- [Timeline of my reconversion](#timeline-of-my-reconversion)

---

### Description

> Start 07-03-2021

Here's a simple introduction to C# and .Net. I followed precious advices given by [Scott Allen](http://OdeToCode.com)
Main goal is to discover code structure, OOP structure, and variables definitions through a simple Grade Book project.

---

### Installation

> Step by step

-   Navigate to **src/GradeBook** directory
-   Run the following command: ```$ dotnet run```

---

### Branches

> Discover project & code evolution by subject

-   feature/Class_&_Unit_Tests : After an introduction on how is the code structured in a C# project, we create some classes and we've done our first unit test.
-   feature/Reference_&_Value_Types : 

---

### Tips

-   Using var to define variable don't work as in JS, you have to take the type of the variable in account
-   Starting point of all applications is the 'main' method in class 'Program' (created by defatult when using dotnet new ... )
-   All code must be in a class
-   Create your classes in a specific file for each, named with the name of your class
-   Create your own namespace to put in your classes to avoid using global namespace, cause this will create conflicts (like name's conflict)
-   Create unit test folder with: dotnet new xunit (example, there's other unit tester)
-   Logic code is put in the directory: projectRoot/src/ProjectName      
-   Unit tests is put in the directory: projectRoot/test/ProjectName.Tests
-   Solution file can group multiple projects of your application, create this file with: dotnet new sln
-   Add a project with: dotnet sln add src/ProjectName/File.csproj
-   At the project root, after creating a solution file you can use: dotnet build, dotnet test and this will take in account all projects added to the solution file
-   It's very important to make difference between value type and reference type 
-   To know if a data type is a value type or reference type, select it and click F12. If it's a 'Struct' it's a value type, if it's a 'Class' it's a reference type (a pointer)
-   String is the only special case, it's ALWAYS a reference type but behave like a value type. Strings are immutable.


---