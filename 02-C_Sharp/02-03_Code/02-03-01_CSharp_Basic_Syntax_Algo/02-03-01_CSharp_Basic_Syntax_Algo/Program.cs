using System;
using System.Collections.Generic;
using System.Linq;

namespace Introduction
{
    class Introduction
    {
        static void Main(string[] args)
        {
            //? Syntax

            #region Basics

            //? Variable definition (member variable)
            // const int x = 4;
            // int a = 42;
            // int b = 43;
            // int? c = null; // Le ? correspond au raccourci pour Nullable 

            //? String Interpolation
            // Console.WriteLine(
            // $"La variable A est égale à {a}, la varible B est égale à {b}, la varible C {c} est Null, X est constant et vaut {x}");

            //? Unescape character of a string
            // Console.WriteLine("\"");

            //? Unescape all characters of the string
            // Console.WriteLine(@"c:\desktop");

            //? Clear console000038686933 
            // Console.Clear();

            //? Coalesce
            // string name = null;
            // Console.WriteLine(name ?? "No name inside"); // Replace value if null 

            //? Null safe operator
            // string nullSafe = null;
            // If value of nullSafe is null, then operation is aborted
            // Console.WriteLine(nullSafe.ToUpper() ?? "No name inside");

            #endregion

            #region Arrays

            //? Arrays Creation (fix size)
            //? One dimension array
            // string[] array = new string[100]; // Explicit array size = 100
            // int[] arrayTwo = { 1, 2, 42 }; // implicit array size = 3
            // int[] arrayThree = new int[] {1, 2, 42}; // Another way
            //? Multi dimension array (matrix)
            // int[,] matrixOne = new int[,] {{1, 2}, {3, 4}, {5, 6}};
            // string[,,] matrixTwo = new string[3, 5, 5];
            //? Array of arrays 
            // int[][] arrayOfArray = new int[3][];
            // arrayOfArray[0] = new int[3];
            // arrayOfArray[1] = new int[4];

            //? Array operations
            // Console.WriteLine(array.Length);
            // Console.WriteLine(matrixOne[2, 0]);
            // Console.WriteLine(matrixTwo.GetLength(1));
            // Console.WriteLine(arrayOfArray.Length);

            #endregion

            #region ArrayLists

            //? Lists Creation (dynamic size)
            // ArrayList list = new ArrayList();
            // ArrayList listClone = (ArrayList)list.Clone(); // Return an clone object

            //? List operations
            // list.Add(42); // Add element (integer)
            // list.Add("Hello"); // Add element (string)
            // list.AddRange(new ArrayList {1, 2, 3}); // Add multiple elements
            // list.Remove(42); // Remove first element like
            // list.RemoveAt(0); // Remove at index

            #endregion

            #region Hashtable

            //? Hashtable Creation: key(unique), value pair
            // Hashtable htable = new Hashtable();

            //? Hashtable Operations
            // htable.Add("key", "value");
            // htable.Add(true, "power");
            // Console.WriteLine(htable["key"]);
            // Console.WriteLine(htable[true]);

            #endregion

            #region Queue

            //? Queue Creation - FIFO First In First Out
            // Queue q = new Queue();
            // q.Enqueue(13);
            // q.Enqueue("power");
            // q.Enqueue(true);

            //? Queue operations
            // Console.WriteLine(q.Dequeue()); // Remove first entry

            #endregion

            #region Lists

            //? Lists Creation - Typed content
            // List<string> list = new List<string>();

            //? List Operations
            // list.Add("power");
            // list.Add("is");
            // list.Add("inside");
            // list.Add("you");
            // list.Remove("inside");
            // list.RemoveAt(1);
            // Console.WriteLine(list.Count);
            // Console.WriteLine(list.Count()); // Need a library

            #endregion

            #region Methods_Execution

            //? Methods execution
            // Method();
            // BoxingUnboxing();
            // ExoConversionUn();
            // ExoConversionTwo();
            // ExoEvenOddr();
            // ExoDivModulo();
            // BbanCheck();
            // Fibonacci();
            // Console.WriteLine(FibonacciRecursive(46));
            // Console.WriteLine(TribonacciRecursive(36));
            // Factorial();
            // PrimeNumberRefactored();
            // MultiplicationTable();
            // ExoListOne();
            ExoListTwo();

            #endregion
        }


        //? Methods

        #region Type_conversion

        private static void ExoConversionUn()
        {
            Console.WriteLine("Input a number");
            string userAnswerOne = Console.ReadLine();
            Console.WriteLine("Input a second number");
            string userAnswerTwo = Console.ReadLine();
            int a = int.Parse(userAnswerOne ?? string.Empty);
            int b = int.Parse(userAnswerTwo ?? string.Empty);
            Console.WriteLine("Sum of your numbers is equal to: {0}", a + b);
        }

        private static void ExoConversionTwo()
        {
            Console.WriteLine("Input a number");
            string userAnswerOne = Console.ReadLine();
            Console.WriteLine("Input a second number");
            string userAnswerTwo = Console.ReadLine();
            int.TryParse(userAnswerOne, out int a);
            int.TryParse(userAnswerTwo, out int b);
            Console.WriteLine("Sum of your numbers is equal to: {0}", a + b);
        }

        #endregion

        #region Even_Odd

        private static void ExoPairImpair()
        {
            Console.WriteLine("Entrer un nombre");
            int.TryParse(Console.ReadLine(), out int number);
            if (number / 2 + number / 2 == number)
            {
                Console.WriteLine("Even");
            }
            else
            {
                Console.WriteLine("Odd");
            }

            // Or
            Console.WriteLine(number % 2 == 0 ? "even" : "odd");
        }

        #endregion

        #region Boxing_Unboxing

        private static void BoxingUnboxing()
        {
            int i = 5;
            object o = i; // Boxing, implicit conversion
            int j = (int)o; // Unboxing, explicit conversion
            Console.WriteLine("{0}, {1}", o, j);
        }

        #endregion

        #region Division_Modulo

        private static void ExoDivModulo()
        {
            // Get first number
            Console.WriteLine("Insert an entire number");
            int.TryParse(Console.ReadLine(), out int a);

            //Get second number
            Console.WriteLine("Insert an entire number");
            int.TryParse(Console.ReadLine(), out int b);

            // Do calculation
            if (b == 0)
            {
                // Display error
                Console.WriteLine("Can't divide by 0");
            }
            else
            {
                int entireDivision = a / b;
                int modulo = a % b;
                float division = (float)a / b;
                // Display result
                Console.WriteLine(
                    $"Entire division is: {entireDivision}, modulo is: {modulo}, division result is: {division}");
            }
        }

        #endregion

        #region BBAN_Check

        private static void BbanCheck()
        {
            // Get bank account
            Console.WriteLine("Insert 12 digits of your bank account");
            string bankAccountNumber = Console.ReadLine();

            // Do calculation and display result
            if (bankAccountNumber == null || bankAccountNumber.Length != 12)
            {
                Console.WriteLine("Bank account number format incorrect KO");
            }
            else
            {
                long.TryParse(bankAccountNumber.Substring(0, 10), out long left);
                long.TryParse(bankAccountNumber.Substring(10, 2), out long right);

                if (left % 97 == right || left % 97 + 97 == right)
                {
                    Console.WriteLine("Bank account number is valid OK");
                }
                else
                {
                    Console.WriteLine("Bank account number invalid KO");
                }
            }
        }

        #endregion

        #region Fibonacci_Tribonnaci

        private static void Fibonacci()
        {
            // Variable definition
            int firstNumber = 0, secondNumber = 1;

            // User input number of element
            Console.Write("How long do you want your Fibonacci's serie: ");
            int numberOfElements = int.Parse(Console.ReadLine() ?? string.Empty);

            // Do calculation
            if (numberOfElements < 2)
            {
                Console.Write("Please enter a number greater than 1");
            }
            else
            {
                // Print first and second number
                Console.Write(firstNumber + " " + secondNumber + " ");

                // Starts the loop from 2 because 0 and 1 are already printed
                for (int i = 2; i < numberOfElements; i++)
                {
                    var nextNumber = firstNumber + secondNumber;
                    Console.Write(nextNumber + " ");
                    firstNumber = secondNumber;
                    secondNumber = nextNumber;
                }
            }
        }

        private static int FibonacciRecursive(int x)
        {
            if (x == 1 || x == 2)
            {
                return 1;
            }

            return FibonacciRecursive(x - 1) + FibonacciRecursive(x - 2);
        }

        private static int TribonacciRecursive(int x)
        {
            if (x == 0 || x == 1 || x == 2)
            {
                return x;
            }
            else
            {
                return TribonacciRecursive(x - 1) + TribonacciRecursive(x - 2) + TribonacciRecursive(x - 3);
            }
        }

        #endregion

        #region Factorial

        private static void Factorial()
        {
            // Get user input and convert it in integer
            Console.WriteLine("Please enter a whole number: ");
            int.TryParse(Console.ReadLine(), out int input);

            // Do calculation
            int result = 1;
            for (int i = 1; i <= input; i++)
            {
                result *= i;
            }

            // Display result
            Console.WriteLine(result);
        }

        #endregion

        #region Prime_Numbers

        private static void PrimeNumberRefactored()
        {
            // Get user input and convert value
            Console.WriteLine("How many prime numbers do you want ? ");
            int.TryParse(Console.ReadLine(), out var primeToDisplay);

            // Create an list for prime numbers
            int nbToTest = 2;
            List<int> primeFounded = new List<int>();
            primeFounded.Add(2);

            // Loop to find prime and store them to avoid useless tests
            while (primeFounded.Count < primeToDisplay)
            {
                bool isPrime = true;
                for (int i = 0; primeFounded[i] <= Math.Sqrt(nbToTest) && isPrime; i++)
                {
                    if (nbToTest % primeFounded[i] == 0)
                    {
                        isPrime = false;
                    }
                }

                if (isPrime)
                {
                    primeFounded.Add(nbToTest);
                    Console.WriteLine(nbToTest);
                }

                nbToTest++;
            }
        }

        #endregion

        #region Multiplication_Table

        private static void MultiplicationTable()
        {
            for (int i = 1; i <= 5; i++)
            {
                for (int j = 1; j <= 20; j++)
                {
                    Console.Write(i * j + "\t");
                }

                Console.Write("\n");
            }
        }

        #endregion

        #region Average_of_User_inputs

        private static void ExoListOne()
        {
            // Create List
            List<int> numbers = new List<int>();

            // Ask user for whole numbers and add to list
            Console.WriteLine("Enter a whole number");
            string input = Console.ReadLine();

            // Check if number is int
            while (int.TryParse(input, out int a))
            {
                // Add 
                numbers.Add(a);
                Console.WriteLine("Enter a whole number");
                input = Console.ReadLine();
            }

            // Average with manual calculation
            float sum = 0;
            foreach (int number in numbers)
            {
                sum += number;
            }

            Console.WriteLine(sum / numbers.Count);

            // Average with build-in functions (best practice)
            Console.WriteLine(numbers.Average());
        }

        #endregion

        #region Bubble_Sort

        private static void ExoListTwo()
        {
            // Ask user for whole numbers and add to list
            // If user enter a non-whole number (string, float, ..) stop asking 
            // Sort list in ascending 

            // Create List
            List<int> numbers = new List<int>();

            // Ask user for whole numbers and add to list
            Console.WriteLine("Enter a whole number");
            string input = Console.ReadLine();

            // Check if number is int
            while (int.TryParse(input, out int a))
            {
                // Add 
                numbers.Add(a);
                Console.WriteLine("Enter a whole number");
                input = Console.ReadLine();
            }

            // Loop
            for (int i = 0; i < numbers.Count - 1; i++)
            {
                // Execute for each element from right to left
                for (int j = numbers.Count - 1; j > i; j--)
                {
                    // Check if others elements are greater
                    if (numbers[j] < numbers[j - 1])
                    {
                        // If so current element goes left
                        int x = numbers[j];
                        numbers[j] = numbers[j - 1];
                        numbers[j - 1] = x;
                    }
                }
            }

            // Display results in console
            foreach (int number in numbers)
            {
                Console.Write("{0} ", number);
            }
        }

        #endregion
    }
}