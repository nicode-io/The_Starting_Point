using System;
using System.Collections.Generic;

namespace GradeBook // Namespace are usefull to get class / method outisde the Global namespace, which is dangerous and can create conflicts
{
    public class Book // public is used to gain access outside, here in the unit tests
    {
        // Constructor
        public Book(string name)
        {
            grades = new List<double>();
            Name = name;
        }

        // Methods
        public void AddGrade(double grade)
        {
            grades.Add(grade);
        }

        public Statistics GetStatistics() // GetStatistics method is public and will return object Statistics (see Statistics.cs file)
        {
            var result = new Statistics();
            result.Average = 0.0;
            // Calculate higher, lower and average grades
            result.High = double.MinValue; // Set the variable to the minimum value a double can have
            result.Low = double.MaxValue; // Set the variable to the maximum value a double can have

            foreach (var grade in grades)
            {
                result.High = Math.Max(grade, result.High);
                result.Low = Math.Min(grade, result.Low);
                result.Average += grade;
            }

            result.Average /= grades.Count;

            return result;
        }

        // Variables
        private List<double> grades; // Define a class-scope List which can be accessed through all class methods
        public string Name;
    }
}