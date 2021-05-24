using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using ToolBox.Database;
using ToolBox.Test.Models;

namespace ToolBox.Test
{
    class Program
    {
        static Connection connection
            = new Connection(
                SqlClientFactory.Instance,
                @"Data Source=NICOLASDENO00FA;Initial Catalog=Exodo;Integrated Security=True;Connect Timeout=60;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");

        static void Main(string[] args)
        {

            IEnumerable<Student> students = GetStudents();
            foreach (Student s in students)
            {
                Console.WriteLine($"{s.Id}. {s.LastName} {s.FirstName}");
            }

            //InsertSection(new Section 
            //{ 
            //    Id = 1111,
            //    SectionName = "Informatique" 
            //});
        }

        static IEnumerable<Student> GetStudents()
        {
            Command cmd = new Command("SELECT * FROM [Student]", false);
            return connection.ExecuteReader(cmd, reader => new Student
            {
                Id = (int)reader["Id"],
                LastName = (string)reader["LastName"],
                FirstName = (string)reader["FirstName"],
                YearResult = (int)reader["YearResult"]
            });
        }

        static void InsertSection(Section s)
        {
            Command cmd = new Command("INSERT INTO [Section] VALUES (@p1,@p2)", false);
            cmd.AddParameter("p1", s.Id);
            cmd.AddParameter("p2", s.SectionName);
            connection.ExecuteNonQuery(cmd);
        }

        // TODO
        static Student GetStudentById(int id)
        {
            throw new NotImplementedException();
        }

        static void InsertStudent(Student s)
        {
            throw new NotImplementedException();
        }

        static void DeleteStudent(int id)
        {
            throw new NotImplementedException();
        }

        static void UpdateStudent(Student s, int id)
        {
            throw new NotImplementedException();
        }

        // idem pour section
    }
}
