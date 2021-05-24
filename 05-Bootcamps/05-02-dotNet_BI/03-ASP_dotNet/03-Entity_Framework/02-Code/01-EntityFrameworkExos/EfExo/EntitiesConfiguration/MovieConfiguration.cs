using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EfExo.EntitiesConfiguration
{
    public class MovieConfiguration : IEntityTypeConfiguration<Movie>
    {
        public void Configure(EntityTypeBuilder<Movie> builder)
        {
            // Table Name
            builder.ToTable("Movie");

            // PK
            builder.HasKey("MovieId");

            // Auto-Increment
            builder.Property(nameof(Movie.MovieId))
                .ValueGeneratedOnAdd();

            builder.Property(nameof(Movie.Title))
                .IsRequired()
                .HasMaxLength(50);

            builder.Property(nameof(Movie.Year))
                .IsRequired();

            builder.Property(nameof(Movie.MainActor))
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(nameof(Movie.Category))
                .IsRequired()
                .HasMaxLength(100);

            builder.Property(nameof(Movie.Director))
                .IsRequired()
                .HasMaxLength(100);

            // Constraints
            builder.HasCheckConstraint("CK_Year", "Year > 1975");

            builder.HasIndex(movie => movie.Title)
                .IsUnique();

        }
    }
}
