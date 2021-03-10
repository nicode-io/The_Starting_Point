using System;
using System.Collections.Generic;

namespace GradeBook // Namespace are usefull to get class / method outisde the Global namespace, which is dangerous and can create conflicts
{
    // Create an event delegate
    public delegate void GradeAddedDelegate(object sender, EventArgs args); // Define a model for our event delegate

    public class Book // public is used to gain access outside, here in the unit tests
    {
        // Constructor
        public Book(string name)
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

        public void AddGrade(double grade)
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

        public event GradeAddedDelegate GradeAdded; // Define an event member 


        public Statistics GetStatistics() // GetStatistics method is public and will return object Statistics (see Statistics.cs file)
        {
            var result = new Statistics();
            result.Average = 0.0;
            // Calculate higher, lower and average grades
            result.High = double.MinValue; // Set the variable to the minimum value a double can have
            result.Low = double.MaxValue; // Set the variable to the maximum value a double can have

            for (var i = 0; i < grades.Count; i++)
            {
                // Break or Continue Statement
                // if(grades[i] == 42.1)
                // {
                //     break;
                //     Or
                //     continue;
                // }

                result.High = Math.Max(grades[i], result.High);
                result.Low = Math.Min(grades[i], result.Low);
                result.Average += grades[i];
            }
            result.Average /= grades.Count;

            // More advanced switch statement
            switch (result.Average)
            {
                case var d when d >= 90.0: // The variable 'd' will contain result.Average value, 'when' allows to make a test 
                    result.Letter = 'A';
                    break;

                case var d when d >= 80.0:
                    result.Letter = 'B';
                    break;

                case var d when d >= 70.0:
                    result.Letter = 'C';
                    break;

                case var d when d >= 60.0:
                    result.Letter = 'D';
                    break;

                default:
                    result.Letter = 'F';
                    break;
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
        public string Name
        {
            get;
            set;
        }


        /* Readonly is some kind of a soft-constant in another programming language. 
        This variable value can only be changed here or in the class' constructor */
        public readonly string category = "Science";


        /* With 'const' keyword, the variable's value can only be defined here, 
        optionnal public will lead to a readonly accessibility everywhere, Uppercase is a good practise */
        public const string CATEGORY = "Geography"; //

    }
}