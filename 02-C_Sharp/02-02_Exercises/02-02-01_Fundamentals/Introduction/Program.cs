using System;
using System.Collections.Generic;
using System.Reflection.Emit;

namespace Introduction
{
    class Test
    {
        static void Main(string[] args)
        {
            // Variable definition (member variable)
            const int x = 4;
            int a = 42;
            int b = 43;
            int? c = null; // Le ? correspond au raccourci pour Nullable 

            // String Interpolation
            Console.WriteLine(
                $"La variable A est égale à {a}, la varible B est égale à {b}, la varible C {c} est Null, X est constant et vaut {x}");

            // Unescape character of a string
            Console.WriteLine("\"");

            // Unescape all characters of the string
            Console.WriteLine(@"c:\desktop");

            // Clear console000038686933 
            Console.Clear();

            // Coalesce
            string name = null;
            Console.WriteLine(name ?? "No name inside"); // Replace value if null 

            // Null safe operator
            string nullSafe = null;
            // If value of nullSafe is null, then operation is aborted
            Console.WriteLine(nullSafe.ToUpper() ?? "No name inside");

            // Method execution
            // Method();
            // BoxingUnboxing();
            // ExoConversionUn();
            // ExoConversionTwo();
            // ExoPairImpair();
            // ExoDivModulo();
            // BbanCheck();
            // Fibonacci();
            // Console.WriteLine(FibonacciRecursive(11));
            // Factorial();
            // PrimeNumberRefactored();
            // MultiplicationTable();

        }


        // Method definition
        private static void Method()
        {
            Console.WriteLine("Method executed");
        }

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

        private static void BoxingUnboxing()
        {
            int i = 5;
            object o = i; // Boxing, implicit conversion
            int j = (int) o; // Unboxing, explicit conversion
            Console.WriteLine("{0}, {1}", o, j);
        }

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
                float division = (float) a / b;
                // Display result
                Console.WriteLine(
                    $"Entire division is: {entireDivision}, modulo is: {modulo}, division result is: {division}");
            }
        }

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

        private static void ExoListOne()
        {
            // Créer une liste d'entier et demander à l'utilisateur d'entrer
            // des nombres entre 1-100 (autant qu'il veut)
        //     List<int> lotto = new List<int>();
        //
        //     Console.WriteLine("Enter a whole number, between 1 - 100");
        //     lotto.Add(TryParse(Console.ReadLine());
        //
        //     void AddUserNumber()
        //     {
        //         lotto.Add();
        //     }
        }
    }
}

