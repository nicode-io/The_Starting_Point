using System;

namespace GradeBook // Namespace are usefull to get class / method outisde the Global namespace, which is dangerous and can create conflicts
{
    class Program
    {
        static void Main(string[] args) // Entry point of application is method called "main" - Method's parameters are a string array called "args"
        {
            //* var keep type of value it is assigned, it's not like in JS !
            var book = new Book("Micholas' Grade Bookclear");

            while (true)
            {
                Console.WriteLine("Enter a grade (0-100) or press \"q\" to quit");
                var input = Console.ReadLine(); //* Ask user for an input

                if (input == "q")
                {
                    break;
                }

                //* Try / Catch (/ Finally) statement
                try
                {
                    var grade = double.Parse(input); //* Parse the string into a double
                    book.AddGrade(grade);
                }
                catch (ArgumentException ex) // Use Argument Exception type variable
                {
                    Console.WriteLine(ex.Message); // Send exception message to the console
                    // throw; Use it to throw error to elsewhere, if not catched program crash
                }
                catch (FormatException ex) // Use Format exception type variable, as I know that I manage this excepetion
                {
                    Console.WriteLine(ex.Message); // Send exception message to the console
                }
                finally
                {
                    Console.WriteLine("**"); // ... This code will be executed anytime a user enter the try/catch block, even if everything works fine. This can be usefull for closing a database connection, close a file, ... 
                }
            }

            var stats = book.GetStatistics();

            book.Name = "";
            // book.Name2 = ""; Cannot be accessed because the setter is set to private


            Console.WriteLine($"For the book named {book.Name}");
            Console.WriteLine($"The highest grade is {stats.High:N1}");
            Console.WriteLine($"The lowest grade is {stats.Low:N1}");
            Console.WriteLine($"The average grade is {stats.Average:N2}");
            Console.WriteLine($"The letter grade is {stats.Letter}");
        }
    }
}

