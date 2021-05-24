using System;
using System.Collections.Generic;
using System.IO;

namespace GradeBook // Namespace are usefull to get class / method outisde the Global namespace, which is dangerous and can create conflicts
{
    // Create an event delegate
    public delegate void GradeAddedDelegate(object sender, EventArgs args); // Define a model for our event delegate


    //? NamedObject class
    public class NamedObject
    {
        public NamedObject(string name)
        {
            Name = name;
        }

        public string Name
        {
            get;
            set;
        }
    }


    //? IBook interface
    /* Define an interface, its pure
    and only define members but give no 
    implementation details, naming convention
    is to start the name with a capital I */
    public interface IBook
    {
        void AddGrade(double grade);
        Statistics GetStatistics();
        string Name { get; }
        event GradeAddedDelegate GradeAdded;
    }


    //? Book class
    /* Create an abstract class to use polymorphism */
    public abstract class Book : NamedObject, IBook // We add an interface **IBook**, you can add more than one if needed
    {
        protected Book(string name) : base(name)
        {
        }

        /* Create abstracted methods that will be herited by all children,
        but for whose we can't provide an implementation here */
        public abstract event GradeAddedDelegate GradeAdded;
        public abstract void AddGrade(double grade);
        public abstract Statistics GetStatistics();
    }


    //? DiskBook class
    public class DiskBook : Book
    {
        public DiskBook(string name) : base(name)
        {
        }

        public override event GradeAddedDelegate GradeAdded;

        public override void AddGrade(double grade)
        {
            /* 'using' tell the compiler to clean things up after doing all operations in curly braces
            Compiler will create an hunderhood try/catch/finally block */
            using (var writer = File.AppendText($"{Name}.txt"))
            {
                writer.WriteLine(grade);
                if (GradeAdded != null)
                {
                    GradeAdded(this, new EventArgs());
                }
            }
        }

        public override Statistics GetStatistics()
        {
            var result = new Statistics();

            using (var reader = File.OpenText($"{Name}.txt"))
            {
                var line = reader.ReadLine();
                while (line != null)
                {
                    var number = double.Parse(line);
                    result.Add(number);
                    line = reader.ReadLine();
                }
            }

            return result;
        }
    }


    //? InMemoryBook class
    public class InMemoryBook : Book // We use inheritance, and we can say Book is a NamedObject. 
    {
        // Constructor
        // base() is used to access methods of inherited class, here we invoqued NamedObject with name as parameter
        public InMemoryBook(string name) : base(name)
        {
            category = ""; // See bottom 'readonly' category variable, the value of category can only be changed inside constructor or variable definition
                           // CATEGORY = ""; won't work, as it's defined as 'const' 
            grades = new List<double>();
            Name = name;
        }

        // Methods
        public void AddGrade(char letter)
        /* You can use the same method name in a class if the method signature is different. 
        Method signature is composed by method's name and the parameter's type */
        {
            switch (letter)
            {
                case 'A':
                    AddGrade(90);
                    break;

                case 'B':
                    AddGrade(80);
                    break;

                case 'C':
                    AddGrade(70);
                    break;

                default:
                    AddGrade(0);
                    break;
            }
        }

        /* We use override on method definition, this 
        way the inherited abstract method **AddGrade** 
        is implemented */
        public override void AddGrade(double grade)
        {
            if (grade <= 100 && grade >= 0)
            {
                grades.Add(grade);
                if (GradeAdded != null) // Check if someone is listening to event (not if it's null)
                {
                    GradeAdded(this, new EventArgs()); // Call the event member, 'this' says "I'm the sender", 'new EventArgs' creates a new event's arguments' object
                }
            }
            else
            {
                throw new ArgumentException($"Invalide argument: {nameof(grade)}"); // Throw exception and encapsulate argument value with {nameof(grade)}, a throw will crash the program
            }
        }

        public override event GradeAddedDelegate GradeAdded; // Define an event member, using override for inheritance management


        public override Statistics GetStatistics() // GetStatistics method is public and will return object Statistics (see Statistics.cs file)
        {
            var result = new Statistics();

            for (var i = 0; i < grades.Count; i++)
            {
                result.Add(grades[i]);
            }

            return result;
        }

        // Variables
        private List<double> grades; // Define a class-scope List which can be accessed through all class methods

        //* Property - The long syntax 
        // Set a properties, notice we don't have () like in a method.
        // Properties allows us to control how user can have access to private variables of the class 

        // public string Name
        // {
        //     get // Define behaviour when someone read the property
        //     {
        //         return name.ToUpper();
        //     }
        //     set // Define behaviour when someone set the property
        //     {
        //         if (!String.IsNullOrEmpty(value)) // Add an optionnal condition (example)
        //         {
        //             name = value; // value is the implilcit value of the setter
        //         }
        //     }
        // }


        //* Property - The short syntax
        /* An advantage to use a property in place of a field is that
        you can define accessibility easily, here for example the getter is public
        while the setter is private */
        // public string Name
        // {
        //     get;
        //     set;
        // }


        /* Readonly is some kind of a soft-constant in another programming language. 
        This variable value can only be changed here or in the class' constructor */
        public readonly string category = "Science";


        /* With 'const' keyword, the variable's value can only be defined here, 
        optionnal public will lead to a readonly accessibility everywhere, Uppercase is a good practise */
        public const string CATEGORY = "Geography"; //

    }
}
