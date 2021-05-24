using EfExo.EntitiesConfiguration;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EfExo.DataSet
{
    public class DataSetMovie : IEntityTypeConfiguration<Movie>
    {
        public void Configure(EntityTypeBuilder<Movie> builder)
        {
            builder.HasData(
                new Movie
                {
                    MovieId = 1,
                    Title = "Star Wars : Un nouvel espoir",
                    Year = 1977,
                    MainActor = "Mark Hammil",
                    Category = "Science-Fiction",
                    Director = "Georges Lucas"
                },
                new Movie
                {
                    MovieId = 2,
                    Title = "Star Wars : L'empire contre-attaque",
                    Year = 1980,
                    MainActor = "Mark Hammil",
                    Category = "Science-Fiction",
                    Director = "Georges Lucas"
                },
                new Movie
                {
                    MovieId = 3,
                    Title = "Star Wars : Le retour du Jedi",
                    Year = 1983,
                    MainActor = "Mark Hammil",
                    Category = "Science-Fiction",
                    Director = "Georges Lucas"
                },
                new Movie
                {
                    MovieId = 4,
                    Title = "Hooligans",
                    Year = 2005,
                    MainActor = "Charlie Hunnam",
                    Category = "Société",
                    Director = "Lexi Alexander"
                },
                new Movie
                {
                    MovieId = 5,
                    Title = "LOTR - La communauté de l'anneau",
                    Year = 2001,
                    MainActor = "Elijah Wood",
                    Category = "Heroic-Fantasy",
                    Director = "Peter Jackson"
                },
                new Movie
                {
                    MovieId = 6,
                    Title = "LOTR - Les deux tours",
                    Year = 2002,
                    MainActor = "Elijah Wood",
                    Category = "Heroic-Fantasy",
                    Director = "Peter Jackson"
                },
                new Movie
                {
                    MovieId = 7,
                    Title = "LOTR - Le retour du roi",
                    Year = 2003,
                    MainActor = "Elijah Wood",
                    Category = "Heroic-Fantasy",
                    Director = "Peter Jackson"
                }
             );
        }
    }
}
