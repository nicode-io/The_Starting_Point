using DemoEFCore.DataSet;
using DemoEFCore.Entities;
using DemoEFCore.EntitiesConfiguration;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoEFCore
{
    public class DataContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionBuilder)
        {
            optionBuilder.UseSqlServer(@"Server=(LocalDB)\MSSQLLocalDB;Database=DemoEFCoreSHBI");
            //@"Server=FORMA-VDI1712\TFTIC; Database = DemoEFCoreAzure; User Id=sa; Password=tftic@2012");
            
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //configuration
            modelBuilder.ApplyConfiguration(new ContactConfiguration());

            //dataset
            modelBuilder.ApplyConfiguration(new DataSetContact());
        }

        public DbSet<Contact> contacts { get; set; }
    }
}
