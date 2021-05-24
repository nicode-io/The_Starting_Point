using EfExo.DataSet;
using EfExo.EntitiesConfiguration;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EfExo
{

    public class DataContext : DbContext
    {
        // Database configuration
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=NICOLASDENO00FA;Integrated Security=true;Database=EfExo");
        }

        // Link builder to class configurations
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new MovieConfiguration());

             // DataSet
            modelBuilder.ApplyConfiguration(new DataSetMovie());
        }

        public DbSet<Movie> Movies {get; set;}
    }
}
