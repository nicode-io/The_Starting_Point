using LinqDataContext;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ExercicesLinq
{
    class Program
    {
        static void Main(string[] args)
        {
            DataContext dc = new DataContext();

            exo2_1(dc);
            exo2_2(dc);
            exo2_3(dc);
            exo3_1(dc);
            exo3_2(dc);
            exo3_3(dc);
            exo3_4(dc);
            exo3_5(dc);
            exo3_6(dc);
            exo3_7(dc);

            Console.ReadLine();
        }

         public static void exo2_1(DataContext dc)
         {
                var result = dc.Students.Select(s => new {
                        s.Last_Name, 
                        s.First_Name, s.Login, 
                        s.Year_Result 
                    }
                );
                
                foreach(var line in result)
                {
                    Console.WriteLine("2.1" + line);
                }
         }

        public static void exo2_2(DataContext dc)
         {
                var result = dc.Students.Select(s => new {
                        lastName=s.Last_Name + " " + s.First_Name, 
                        s.Student_ID, 
                        s.BirthDate
                    }
                );
                
                foreach(var line in result)
                {
                    Console.WriteLine("2.2" + line);
                }
         }

        public static void exo2_3(DataContext dc)
        {
            IEnumerable<string> result = dc.Students
                .Select(s => $"{s.Student_ID} {s.First_Name} {s.BirthDate} {s.Login} {s.Section_ID} {s.Course_ID}");

            foreach(var line in result)
            {
                Console.WriteLine("2.3 " + line);
            }
        }

         public static void exo3_1(DataContext dc)
        {
            var result = dc.Students
                .Where(s => s.BirthDate.Year < 1955)
                .Select(s => new
            {
                s.Last_Name, s.Year_Result, Status = s.Year_Result >= 12 ? "OK" : "KO"
            });

            foreach(var line in result)
            {
                Console.WriteLine("3.1" + line);
            }
        }

        public static void exo3_2(DataContext dc)
        {
            var result = dc.Students
                .Where(s => s.BirthDate.Year >= 1955 && s.BirthDate.Year <= 1965)
                .Select(s => new
                {
                    s.Last_Name, s.Year_Result, 
                    Category = s.Year_Result > 10 ? "Superior" : s.Year_Result < 10 ? "Inferior" : "Neutral"
                });

            foreach(var line in result)
            {
                Console.WriteLine("3.2" + line);
            }
        }

        public static void exo3_3(DataContext dc)
        {
            var result = dc.Students
                .Where(s => s.Last_Name.EndsWith("r"))
                .Select(s => new
                {
                    s.Last_Name,
                    s.Section_ID
                });
            
            foreach(var line in result)
            {
                Console.WriteLine("3.3" + line);
            }
        }

        public static void exo3_4(DataContext dc)
        {
            var result = dc.Students
                .OrderByDescending(s => s.Year_Result)
                .Where(s => s.Year_Result >= 3)
                .Select(s => new
                {
                    s.Last_Name, s.Year_Result
                });
            
            foreach(var line in result)
            {
                Console.WriteLine("3.4" + line);
            }
        }

        public static void exo3_5(DataContext dc)
        {
            var result = dc.Students
                .OrderBy(s => s.Last_Name)
                .Where(s => s.Section_ID==1010)
                .Select(s => new
                {
                    Nom = s.Last_Name + " " + s.First_Name,
                    s.Year_Result
                });

            foreach(var line in result)
            {
                Console.WriteLine("3.5" + line);
            }
        }

        public static void exo3_6(DataContext dc)
        {
            var result = dc.Students
                .Where(s => (s.Section_ID == 1020 || s.Section_ID == 1020) 
                && (s.Year_Result < 12 || s.Year_Result >18))
                .Select(s => new
                {
                    s.Last_Name,
                    s.Section_ID,
                    s.Year_Result
                })
                .OrderBy(s => s.Last_Name)
                .OrderBy(s => s.Section_ID);

            foreach(var line in result)
            {
                Console.WriteLine("3.6" + line);
            }
        }

        public static void exo3_7(DataContext dc)
        {
            var result = dc.Students
                .Where(s => s.Section_ID.ToString().StartsWith("13")
                && s.Year_Result*5 <=60)
                .Select(s => new {
                    s.Last_Name,
                    s.Section_ID,
                    Result_100 = s.Year_Result * 5
                  })
                .OrderByDescending(s => s.Result_100);

            foreach(var line in result)
            {
                Console.WriteLine("3.7" + line);
            }
        }
    }
}
