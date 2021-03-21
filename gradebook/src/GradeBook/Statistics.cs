using System;

namespace GradeBook
{
    //? Statistics class
    public class Statistics
    {
        public double Average
        {
            get
            {
                return Sum / Count;
            }
        }
        public double High;
        public double Low;
        public char Letter
        {
            get
            {
                switch (Average)
                {
                    case var d when d >= 90.0: // The variable 'd' will contain result.Average value, 'when' allows to make a test 
                        return 'A';

                    case var d when d >= 80.0:
                        return 'B';

                    case var d when d >= 70.0:
                        return 'C';

                    case var d when d >= 60.0:
                        return 'D';

                    default:
                        return 'F';
                }
            }
        }
        public double Sum;
        public int Count;

        public void Add(double number)
        {
            Sum += number;
            Count += 1;
            High = Math.Max(number, High);
            Low = Math.Min(number, Low);
        }

        public Statistics()
        {
            // Calculate higher, lower, sum, count and average grades
            Count = 0;
            Sum = 0.0;
            High = double.MinValue; // Init the variable's value to the minimum value a double can have
            Low = double.MaxValue; // Init the variable's value to the maximum value a double can have
        }
    }
}