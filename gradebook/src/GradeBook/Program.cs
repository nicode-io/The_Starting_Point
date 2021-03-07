using System;

namespace GradeBook // Namespace are usefull to get class / method outisde the Global namespace, which is dangerous and can create conflicts
{
    class Program
    {
        static void Main(string[] args) // Entry point of application is method called "main" - Method's parameters are a string array called "args"
        {
            // ! var keep type of value it is assigned, it's not like in JS !
            var book = new Book("Micholas' Grade Bookclear");
            book.AddGrade(85.1);
            book.AddGrade(77.2);
            book.AddGrade(97.2);

            var stats = book.GetStatistics();

            Console.WriteLine($"The highest grade is {stats.High:N1}");
            Console.WriteLine($"The lowest grade is {stats.Low:N1}");
            Console.WriteLine($"The average grade is {stats.Average:N2}");
        }
    }
}

