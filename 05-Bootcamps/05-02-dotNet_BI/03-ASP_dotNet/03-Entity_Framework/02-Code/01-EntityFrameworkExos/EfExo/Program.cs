using EfExo.EntitiesConfiguration;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace EfExo
{
    public class Program
    {
        static void Main(string[]args)
        {
            // Dsiplay all Movies
            using (DataContext EF = new())
            {
                foreach (Movie c in EF.Movies)
                {
                    Console.WriteLine($"Title {c.Title}");
                }
            }

            // Create Movie
            using (DataContext EF = new())
            {
                EF.Movies.Add(
                    new Movie
                    {
                        Title = "Pacific Rim",
                        Year = 2013,
                        MainActor = "Charlie Hunnam",
                        Category = "Action",
                        Director ="Guillermo Del Toro"
                    }
                );
                try
                {
                    EF.SaveChanges();
                }
                catch (DbUpdateException dbue)
                {
                    Console.WriteLine(dbue.Message);
                }
            }


            // Select ... Where
            using (DataContext EF = new())
            {
                foreach(Movie Movie in EF.Movies.Where(c => c.Year < 2001))
                {
                    Console.WriteLine($"Title {Movie.Title}");
                }
            }

            // Update Movie
            using (DataContext EF = new())
            {
                foreach(Movie m in EF.Movies.Where(movie => movie.Title.Contains("Star Wars")))
                {
                    m.MainActor = "Harrisson Ford";
                }
                try
                {
                    EF.SaveChanges();
                }
                catch (DbUpdateException dbue)
                {
                    Console.WriteLine(dbue.Message);
                }
            }

            // Delete Movie
            //using (DataContext EF = new())
            //{
            //    Movie Movie = EF.Movies.Where(c => c.Director.Contains( "Charlie Hunnam")).FirstOrDefault();

            //    try
            //    {
            //        EF.Remove(Movie);
            //        EF.SaveChanges();
            //    }
            //    catch (DbUpdateException dbue)
            //    {
            //        Console.WriteLine(dbue.Message);
            //    }
            //}

            // Display Movies
            using (DataContext EF = new())
            {
                // Dsiplay all Movies
                foreach (Movie c in EF.Movies)
                {
                    Console.WriteLine($"Title: {c.Title} Main Actor: {c.MainActor} ");
                }
            }
            using (DataContext EF = new DataContext())
            {
                List<Movie> ml = EF.Movies.Where(m => m.MainActor.Equals("Charlie Hunnam")).ToList();
                try
                {
                    foreach (Movie m in ml)
                    {
                        EF.Remove(m);
                    }
                    
                    EF.SaveChanges();
                }
                catch (DbUpdateException dbue)
                {
                    Console.WriteLine(dbue.Message);
                }
            }
        }
    }
}
