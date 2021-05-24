using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Techno.DAL.Entities;

namespace Techno.DAL.EntityConfigs
{
    class ProfileConfig : IEntityTypeConfiguration<Profile>
    {
        public void Configure(EntityTypeBuilder<Profile> builder)
        {
            builder.ToTable(nameof(Profile));

            builder.HasKey(p => p.Id);

            builder.HasOne(p => p.User)
                .WithOne(u => u.Profile)
                .HasForeignKey<Profile>("UserId");

            builder.HasOne(p => p.Section)
                .WithMany(s => s.Profiles);

            builder.HasMany(p => p.Skills)
                .WithMany(s => s.Profiles);

            builder.Property(p => p.ImageMimeType)
                .HasMaxLength(50);

            builder.Property(p => p.Linkedin)
                .HasMaxLength(255);

            builder.Property(p => p.Hobbies)
                .HasMaxLength(255);
        }
    }
}
