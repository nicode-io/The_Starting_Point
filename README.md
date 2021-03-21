C# .Net - Discovery

- [Description](#description)
- [Installation](#installation)
- [Branches](#branches)
- [Tips](#tips)
- [Going further](#going-further)
- [Collaboration](#collaboration)
- [Timeline of my reconversion](#timeline-of-my-reconversion)

---

### Description

>   Start:  07-03-2021 
>   End:    21-03-2021
>   Spent:  09h 37min

Here's a simple introduction to C# and .Net. I followed precious advices given by [Scott Allen](http://OdeToCode.com)
Main goal is to discover code structure, OOP structure, and variables definitions through a simple Grade Book project.

---

### Installation

> Step by step

-   Navigate to **src/GradeBook** directory
-   Run the following command: ```$ dotnet run```
-   To run unit tests, run the folllowing command: ```$ dotnet test```
-   You may need to build projects ```$ dotnet build```

---

### Branches

> Discover project & code evolution by module

-   feature/Class_&_Unit_Tests : After an introduction on how is the code structured in a C# project, we create some classes and we've done our first unit test.
-   feature/Reference_&_Value_Types : Learn differences between reference type and value type, how to manage the pointer or the value.
-   feature/Control_Flow_Executions : Make loops, switches, jumps. Manage error handling and exceptions throws
-   feature/Building_Types : Define properties, getters/setters, create/manage/understand delegates and methods multi-casting, manage event with delegates
-   feature/C#_OOP : Reminder of the OOP pillars, deriving from base class, chaining constructors, abstract classes, interface definition

---

### Tips

-   C# is case-sensitive language, so x =! X 
-   Using var to define variable don't work as in JS, you have to take the type of the variable in account
-   Starting point of all applications is the 'main' method in class 'Program' (created by defatult when using dotnet new ... )
-   All code must be in a class
-   Create your classes in a specific file for each, named with the name of your class
-   Create your own namespace to put in your classes to avoid using global namespace, cause this will create conflicts (like name's conflict)
-   Create unit test folder with: ```dotnet new xunit``` (example, there's other unit tester)
-   Logic code is put in the directory: projectRoot/src/ProjectName      
-   Unit tests is put in the directory: projectRoot/test/ProjectName.Tests
-   Solution file can group multiple projects of your application, create this file with: dotnet new sln
-   Add a project with: ```dotnet sln add src/ProjectName/File.csproj```
-   At the project root, after creating a solution file you can use: dotnet build, dotnet test and this will take in account all projects added to the solution file
-   It's very important to make difference between value type and reference type 
-   To know if a data type is a value type or reference type, select it and click F12. If it's a 'Struct' it's a value type, if it's a 'Class' it's a reference type (a pointer)
-   String is the only special case, it's ALWAYS a reference type but behave like a value type. Strings are immutable.
-   You can handle errors through try/catch block
-   You can chain multiple catch for differents exceptions (ex: ArgumentException, FormatException, ...)
-   You can end your try/catch block with an optionnal finnaly (so try/catch/finally). Code in finally block will be executed, no matter if an exception is thrown or not
-   Properties in a class are used to define precise access to a variable.
-   In a property you can define accessibility of getter and setter (public, private, ...) 
-   There's two type of syntax, a long and a short one. (ex: see Book.cs, properties Name and Name2)
-   Within a class, you can use the same method's name if the methods' signatures are different. 
-   Method's signature is composed of the method's name and the parameters' type, return type is not taking in account in signature
-   In a switch statement, you can create a variable and make conditionnal test on it, the value of the variable is implicit, it's the value of your swtich's parameter. (ex: Book.cs, switch(result.Average) )
-   When you define a class variable with the keyword 'readonly' you can only change the variable's value inside a class constructor or in the variable definition (soft constant value)
-   When you define a class variable with the keyword 'const' you can only change the variable's value inside the variable's
-   A const variable is written uppercase, it's a good practise and a way to know that you can't change the value outside the variable's definition even if it's a 'public const' for example
-   A const variable is implicitly static, so you can only access to it with something like: ```ClassName.CONSTVARIABLE ``` 
-   A delegate is a type that represents a method with a specific signature and return type
-   After creating a delegate, you can assign a method to a variable with the following syntax: ```DelegateName variable = method;``` !> you don't need the parentheses to call the method <! You can then call: ```variable(methodParameter);```
-   You can use delegate to call multiple methods with only one variable using: ```variable += anotherMethod``` (following example above)
-   In good practise, delegates are created in a separate file than the class (not applied to this fundamentals)
-   Events can be managed with delegates, while it's the tricky part of C# Fundamentals it's important to understand how events can be added and substracted through delegate's methods
-   In .Net, every class has a base class. Everything will derive from **Object** class
-   To inherit from another class in class, we use syntax like this: ```public class Book : NamedObject``` In this case we say that Book class is a NamedObject
-   You can access to inherited method, in the constructor of the child class with: ```public Book(string name) : base(name)``` In that way we define a parameter for a method inherited from NamedObject class 
-   To use polymorphism in C#, you can use abstract classes and, inside, abstract methods with no current implementation, ex: ```public abstract void AddGrade(double grade);``` defines a method with no implementation
-   In the inehrited class' methods you need then to use **override** to implement the abstract method, ex: ```public override void AddGrade(double grade)```
-   Another way to achieve encapsulation is **interfaces**, it looks like class' definition but **interfaces** are **pure**, not containing any implementation details
-   Interface will only going to describe the members available on a specific type
-   The convention in naming an interface is to start with a capital **I**
-   Make good use of keywords **virtual, abstract** to manage inheritance and polymorphism efficiently
-   When using File operations, generally the 'using' syntax is great to flush all after operations executed, 
    ex: ```using(var writer = File.AppendText($"{Name}.txt")) 
            {
                writer.WriteLine(grade);
            }``` under the hood, compiler create a try / catch / finally blocks

---

### Going Further

-   C# Generics 
-   Asynchronous C# 5.0
-   LINQ Fundamentals
-   C# Programming Paradigms
-   ANd many more ... 

--- 

### Collaboration

Hello, I'm [Nicolas](https://www.linkedin.com/in/nicolas-denoel/), a computer science enthusiast who is in the middle of his reconversion as a developer.

After 15 years in the commercial sector as a manager and director, I decided to put this career on hold to devote myself fully to development.

Positive spirit, with an unquenchable thirst for learning, committed and structured, I like to take up challenges and always progress by giving the best of myself.
If you have a project, no matter how big or small, don't hesitate to share it, we always have to win by doing things alongside others.

Starting 2021, after an intensive 7 month bootcamp at Becode where I was able to acquire the superpowers of a junior developer and an internship with the awesome team of [ØPP](http://opp.mx).
[ØPP](http://opp.mx) is a publisher of digital solutions (websites, applications, connected objects...) specialised in engagement techniques and gaming.

In March 2021, I decided to go further and follow a .Net developer cursus, Power BI & Sharepoint oriented. This new key feature in my profile will allow my next company to benefits of this so trendy and necessary data analysis. 

See you soon ! :heart:

### Timeline of my reconversion

[:calendar: Discover the great timeline of my adventure to become a developer. Want to write your company's name on it ? Let's meet !](https://timelines.gitkraken.com/timeline/2e12cc334eb0406b84bf7a6339e666c4?range=2020-05-26_2020-06-27)

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)
