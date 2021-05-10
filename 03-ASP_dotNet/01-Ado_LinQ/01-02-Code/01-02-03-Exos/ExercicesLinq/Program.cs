using LinqDataContext;
using System;
using System.Collections.Generic;
using System.Linq;

namespace ExercicesLinq
{
    class Program
    {
        static void Main()
        {
            DataContext dc = new();

            Exo2_1(dc);
            Exo2_2(dc);
            Exo2_3(dc);
            Exo3_1(dc);
            Exo3_2(dc);
            Exo3_3(dc);
            Exo3_4(dc);
            Exo3_5(dc);
            Exo3_6(dc);
            Exo3_7(dc);
            Exo4_1(dc);
            Exo4_2(dc);
            Exo4_3(dc);
            Exo4_4(dc);
            Exo4_5(dc);
            Exo5_1(dc);
            Exo5_2(dc);
            Exo5_3(dc);
            Exo5_4(dc);
            Exo5_5(dc);
            Exo5_6(dc);
            Exo5_7(dc);
            Exo5_8(dc);
            Exo5_9(dc);
            Exo5_10(dc);
            Exo5_11(dc);

            Console.ReadLine();
        }

         static void Exo2_1(DataContext dc)
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

        static void Exo2_2(DataContext dc)
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

        static void Exo2_3(DataContext dc)
        {
            IEnumerable<string> result = dc.Students
                .Select(s => $"{s.Student_ID} {s.First_Name} {s.BirthDate} {s.Login} {s.Section_ID} {s.Course_ID}");

            foreach(var line in result)
            {
                Console.WriteLine("2.3 " + line);
            }
        }

         static void Exo3_1(DataContext dc)
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

        static void Exo3_2(DataContext dc)
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

        static void Exo3_3(DataContext dc)
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

        static void Exo3_4(DataContext dc)
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

        static void Exo3_5(DataContext dc)
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

        static void Exo3_6(DataContext dc)
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

        static void Exo3_7(DataContext dc)
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

        static void Exo4_1(DataContext dc)
        {
            Console.WriteLine(dc.Students.Average(st => st.Year_Result));
        }
        static void Exo4_2(DataContext dc)
        {
            Console.WriteLine(dc.Students.Max(st => st.Year_Result));
        }
        static void Exo4_3(DataContext dc)
        {
            Console.WriteLine(dc.Students.Sum(st => st.Year_Result));
        }
        static void Exo4_4(DataContext dc)
        {
            Console.WriteLine(dc.Students.Min(st => st.Year_Result));
        }
        static void Exo4_5(DataContext dc)
        {
            foreach(Student c in dc.Students.Where(st => st.Year_Result % 2 == 1))
            {
                Console.WriteLine($"{c.First_Name} {c.Last_Name} {c.Year_Result}");
            }
        }

        public static void Exo5_1(DataContext dc)
        {
            var result = dc.Students.GroupBy(st => st.Section_ID).Select(gst => new { gst.Key, Max_Result = gst.Max(st => st.Year_Result) });

            foreach (var r in result)
            {
                Console.WriteLine("5.1 " + r);
            }
        }

        public static void Exo5_2(DataContext dc)
        {
            var result = dc.Students
                .Where(st => st.Section_ID.ToString().StartsWith("10"))
                .GroupBy(st => st.Section_ID)
                .Select(gst => new { gst.Key, AVGResult = gst.Average(st => st.Year_Result) });

            foreach (var r in result)
            {
                Console.WriteLine("5.2 " + r);
            }
        }

        public static void Exo5_3(DataContext dc)
        {
            var result = dc.Students
                .Where(st => st.BirthDate.Year >= 1970 && st.BirthDate.Year <= 1985)
                .GroupBy(st => st.BirthDate.Month)
                .Select(gst => new { AVGResult = gst.Average(st => st.Year_Result), Brithmonth = gst.Key });

            foreach (var r in result)
            {
                Console.WriteLine("5.3 " + r);
            }
        }

        public static void Exo5_4(DataContext dc)
        {
            var result = dc.Students
                .GroupBy(st => st.Section_ID)
                .Where(gst => gst.Count() > 3)
                .Select(gst => new { SectionID = gst.Key, AVGresult = gst.Average(st => st.Year_Result) });

            foreach (var r in result)
            {
                Console.WriteLine("5.4 " + r);
            }
        }

        public static void Exo5_5(DataContext dc)
        {
            var result = dc.Professors.Join(dc.Sections,
                                            p => p.Section_ID,
                                            s => s.Section_ID,
                                            (p, s) => new { p.Professor_ID, p.Professor_Name, s.Section_Name })
                                      .Join(dc.Courses,
                                            j => j.Professor_ID, c => c.Professor_ID, (j, c) => new { j.Professor_Name, j.Section_Name, c.Course_Name });

            foreach (var r in result)
            {
                Console.WriteLine("5.5 " + r);
            }
        }

        public static void Exo5_6(DataContext dc)
        {
            var result = dc.Sections.Join(dc.Students,
                                          s => s.Delegate_ID,
                                          st => st.Student_ID,
                                          (s, st) => new { s.Section_ID, s.Section_Name, st.Last_Name }).OrderByDescending(s => s.Section_ID);

            foreach (var r in result)
            {
                Console.WriteLine("5.6 " + r);
            }
        }

        public static void Exo5_7(DataContext dc)
        {
            var result = dc.Sections.GroupJoin(dc.Professors,
                                          s => s.Section_ID,
                                          p => p.Section_ID,
                                          (s, listProfs) => new { s.Section_ID, s.Section_Name, profs = listProfs.Select(p => p.Professor_Name) });

            foreach (var r in result)
            {
                Console.WriteLine(r.Section_ID + " " + r.Section_Name);
                foreach (string name in r.profs)
                {
                    Console.WriteLine("5.7 " + name);
                }
            }
        }

        public static void Exo5_8(DataContext dc)
        {
            var result = dc.Sections.GroupJoin(dc.Professors,
                                          s => s.Section_ID,
                                          p => p.Section_ID,
                                          (s, listProfs) => new { s.Section_ID, s.Section_Name, profs = listProfs.Select(p => p.Professor_Name) })
                                          .Where(join => join.profs.Any());

            foreach (var r in result)
            {
                Console.WriteLine(r.Section_ID + " " + r.Section_Name);
                foreach (string name in r.profs)
                {
                    Console.WriteLine("5.8 " + name);
                }
            }
        }

        public static void Exo5_9(DataContext dc)
        {
            var result = dc.Students.Join(dc.Grades, s => true, g => true, (s, grade) => new { Student = s, Grade = grade })
                                    .Where(j => j.Student.Year_Result >= 12 && j.Student.Year_Result >= j.Grade.Lower_Bound && j.Student.Year_Result <= j.Grade.Upper_Bound)
                                    .Select(j => new { j.Student.Last_Name, j.Student.Year_Result, Grade = j.Grade.GradeName })
                                    .OrderBy(st => st.Grade);

            foreach (var r in result)
            {
                Console.WriteLine("5.9 " + r.Last_Name + " - " + r.Year_Result + " - " + r.Grade);
            }
        }

        public static void Exo5_10(DataContext dc)
        {
            var result = dc.Professors.GroupJoin(dc.Courses, p => p.Professor_ID, c => c.Professor_ID, (p, listCourses) => new { Professor = p, Courses = listCourses })
                                      .SelectMany(lc => lc.Courses.DefaultIfEmpty(), (pf, c) => new { Professor = pf, Course = c })
                                      .GroupJoin(dc.Sections, p => p.Professor.Professor.Section_ID, s => s.Section_ID, (pf, s) => (pf.Professor, pf.Course, Sections: s))
                                      .SelectMany(liste => liste.Sections.DefaultIfEmpty(), (listeFinal, s) => new { listeFinal.Professor, listeFinal.Course, Section = s })
                                      .Select(profCoursSection => new
                                      {
                                          profCoursSection.Professor.Professor.Professor_Name,
                                          profCoursSection.Section?.Section_Name,
                                          Courses_Name = profCoursSection.Course?.Course_Name,
                                          Courses_Ects = profCoursSection.Course != null ? (float?)profCoursSection.Course.Course_Ects : null
                                      })
                                      .OrderByDescending(pCS => pCS.Courses_Ects)
                                      .Select(pCS => new
                                      {
                                          pCS.Professor_Name,
                                          Section_Name = pCS.Section_Name ?? "null",
                                          Courses_Name = pCS.Courses_Name ?? "null",
                                          Courses_Ects = pCS.Courses_Ects != null ? pCS.Courses_Ects.ToString() : "null"
                                      });

            foreach (var r in result)
            {
                Console.WriteLine("5.10 " + r.Professor_Name + " - " + r.Section_Name + " - " + r.Courses_Name + " - " + r.Courses_Ects);
            }

        }

        public static void Exo5_11(DataContext dc)
        {
            var result = dc.Professors.GroupJoin(dc.Courses, p => p.Professor_ID, c => c.Professor_ID, (p, listCourses) => new {
                p.Professor_ID,
                ects = listCourses.Any() ? (float?)listCourses.Sum(e => e.Course_Ects) : null
            })
                                      .OrderByDescending(c => c.ects);

            foreach (var r in result)
            {
                Console.WriteLine("5.11 " + r.Professor_ID + " " + r.ects);
            }
        }
    }
}
