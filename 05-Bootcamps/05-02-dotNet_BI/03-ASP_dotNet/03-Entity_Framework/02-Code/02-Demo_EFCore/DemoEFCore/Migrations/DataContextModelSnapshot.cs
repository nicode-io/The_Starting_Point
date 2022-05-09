﻿// <auto-generated />
using DemoEFCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace DemoEFCore.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.6")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DemoEFCore.Entities.Contact", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.HasKey("Id");

                    b.HasIndex("Email")
                        .IsUnique();

                    b.ToTable("Contact");

                    b.HasCheckConstraint("CK_Email", "Email LIKE '__%@__%.%'");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Email = "g.adnet@email.be",
                            FirstName = "Geoffroy",
                            LastName = "Adnet"
                        },
                        new
                        {
                            Id = 2,
                            Email = "s.connor@skynet.com",
                            FirstName = "Sarah",
                            LastName = "Connor"
                        },
                        new
                        {
                            Id = 3,
                            Email = "Hell.master69@lux.god",
                            FirstName = "Lucifer",
                            LastName = "Morningstar"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
