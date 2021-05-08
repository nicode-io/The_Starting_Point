﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using toolbox_api.Database;

namespace toolbox_api.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.5");

            modelBuilder.Entity("CategoryFramework", b =>
                {
                    b.Property<int>("CategoriesCategoryID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("FrameworksFrameworkID")
                        .HasColumnType("INTEGER");

                    b.HasKey("CategoriesCategoryID", "FrameworksFrameworkID");

                    b.HasIndex("FrameworksFrameworkID");

                    b.ToTable("CategoryFramework");
                });

            modelBuilder.Entity("CategoryTool", b =>
                {
                    b.Property<int>("CategoriesCategoryID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ToolsToolID")
                        .HasColumnType("INTEGER");

                    b.HasKey("CategoriesCategoryID", "ToolsToolID");

                    b.HasIndex("ToolsToolID");

                    b.ToTable("CategoryTool");
                });

            modelBuilder.Entity("FrameworkTool", b =>
                {
                    b.Property<int>("FrameworksFrameworkID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ToolsToolID")
                        .HasColumnType("INTEGER");

                    b.HasKey("FrameworksFrameworkID", "ToolsToolID");

                    b.HasIndex("ToolsToolID");

                    b.ToTable("FrameworkTool");
                });

            modelBuilder.Entity("LanguageTool", b =>
                {
                    b.Property<int>("LanguagesLanguageID")
                        .HasColumnType("INTEGER");

                    b.Property<int>("ToolsToolID")
                        .HasColumnType("INTEGER");

                    b.HasKey("LanguagesLanguageID", "ToolsToolID");

                    b.HasIndex("ToolsToolID");

                    b.ToTable("LanguageTool");
                });

            modelBuilder.Entity("toolbox_api.Models.Category", b =>
                {
                    b.Property<int>("CategoryID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("CategoryID");

                    b.ToTable("Categories");
                });

            modelBuilder.Entity("toolbox_api.Models.Framework", b =>
                {
                    b.Property<int>("FrameworkID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<int>("LanguageID")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Name")
                        .HasColumnType("TEXT");

                    b.HasKey("FrameworkID");

                    b.HasIndex("LanguageID");

                    b.ToTable("Framework");
                });

            modelBuilder.Entity("toolbox_api.Models.Language", b =>
                {
                    b.Property<int>("LanguageID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("LongName")
                        .HasColumnType("TEXT");

                    b.Property<string>("ShortName")
                        .HasColumnType("TEXT");

                    b.HasKey("LanguageID");

                    b.ToTable("Languages");
                });

            modelBuilder.Entity("toolbox_api.Models.Tool", b =>
                {
                    b.Property<int>("ToolID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<string>("Title")
                        .HasColumnType("TEXT");

                    b.HasKey("ToolID");

                    b.ToTable("Tools");
                });

            modelBuilder.Entity("CategoryFramework", b =>
                {
                    b.HasOne("toolbox_api.Models.Category", null)
                        .WithMany()
                        .HasForeignKey("CategoriesCategoryID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("toolbox_api.Models.Framework", null)
                        .WithMany()
                        .HasForeignKey("FrameworksFrameworkID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("CategoryTool", b =>
                {
                    b.HasOne("toolbox_api.Models.Category", null)
                        .WithMany()
                        .HasForeignKey("CategoriesCategoryID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("toolbox_api.Models.Tool", null)
                        .WithMany()
                        .HasForeignKey("ToolsToolID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("FrameworkTool", b =>
                {
                    b.HasOne("toolbox_api.Models.Framework", null)
                        .WithMany()
                        .HasForeignKey("FrameworksFrameworkID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("toolbox_api.Models.Tool", null)
                        .WithMany()
                        .HasForeignKey("ToolsToolID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("LanguageTool", b =>
                {
                    b.HasOne("toolbox_api.Models.Language", null)
                        .WithMany()
                        .HasForeignKey("LanguagesLanguageID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("toolbox_api.Models.Tool", null)
                        .WithMany()
                        .HasForeignKey("ToolsToolID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("toolbox_api.Models.Framework", b =>
                {
                    b.HasOne("toolbox_api.Models.Language", null)
                        .WithMany("Frameworks")
                        .HasForeignKey("LanguageID")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("toolbox_api.Models.Language", b =>
                {
                    b.Navigation("Frameworks");
                });
#pragma warning restore 612, 618
        }
    }
}
