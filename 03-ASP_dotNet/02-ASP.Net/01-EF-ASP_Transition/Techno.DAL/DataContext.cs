using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Techno.DAL.Entities;
using Techno.DAL.EntityConfigs;

namespace Techno.DAL
{
    public class DataContext: DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Skill> Skills { get; set; }
        public DbSet<Section> Sections { get; set; }

        private string _defaultConnectionString = @"data source=K-PC\SQLSERVER;initial catalog=demo_asp;integrated security=true";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_defaultConnectionString);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.ApplyConfiguration(new UserConfig());
            builder.ApplyConfiguration(new ProfileConfig());
            builder.ApplyConfiguration(new SectionConfig());
            builder.ApplyConfiguration(new SkillConfig());
        }
    }
}
