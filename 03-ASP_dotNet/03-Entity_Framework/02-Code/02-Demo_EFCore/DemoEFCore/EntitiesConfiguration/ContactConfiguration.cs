using DemoEFCore.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoEFCore.EntitiesConfiguration
{
    public class ContactConfiguration : IEntityTypeConfiguration<Contact>
    {
        public void Configure(EntityTypeBuilder<Contact> builder)
        {
            //le nom de ma table
            builder.ToTable("Contact");

            //pk
            builder.HasKey("Id");

            //auto-incrémentation
            builder.Property(nameof(Contact.Id))
                   .ValueGeneratedOnAdd();

            builder.Property(nameof(Contact.LastName))
                   .IsRequired()
                   .HasMaxLength(50);

            builder.Property(nameof(Contact.FirstName))
                   .IsRequired()
                   .HasMaxLength(50);

            builder.Property(nameof(Contact.Email))
                   .IsRequired()
                   .HasMaxLength(100);

            //contrainte de vérification et d'unicité
            builder.HasCheckConstraint("CK_Email", "Email LIKE '__%@__%.%'")
                   //Je met un index et la contrainte d'unicité
                   .HasIndex(c => c.Email)
                   .IsUnique();


        }
    }
}
