using System;

namespace DemoEnum
{
    class Program
    {
        public enum TypeCarburant { essence = 2 , diesel = 4 , lpg = 8 }
        static void Main(string[] args)
        {
            TypeCarburant Carburant = TypeCarburant.essence;

            Console.WriteLine(Carburant.ToString());
            Console.WriteLine((int)Carburant);

            foreach(string s in Enum.GetNames(typeof(TypeCarburant)))
            {
                Console.WriteLine(s);
            }

            string gaz = "lpg";

            TypeCarburant tc = (TypeCarburant)Enum.Parse(typeof(TypeCarburant), gaz);
            Console.WriteLine(tc.ToString());
            Console.WriteLine((int)tc);

            TypeCarburant x = TypeCarburant.diesel;
            Console.WriteLine(x);

            Console.ReadLine();
        }
    }
}
