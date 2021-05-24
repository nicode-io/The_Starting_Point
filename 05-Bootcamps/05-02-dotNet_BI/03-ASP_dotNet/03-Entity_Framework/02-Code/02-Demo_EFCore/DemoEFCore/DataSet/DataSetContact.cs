using DemoEFCore.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoEFCore.DataSet
{
    public class DataSetContact : IEntityTypeConfiguration<Contact>
    {
        public void Configure(EntityTypeBuilder<Contact> builder)
        {
            builder.HasData(
                new Contact
                {
                    Id = 1,
                    FirstName = "Geoffroy",
                    LastName = "Adnet",
                    Email = "g.adnet@email.be"
                },
                new Contact
                {
                    Id = 2,
                    FirstName = "Sarah",
                    LastName = "Connor",
                    Email = "s.connor@skynet.com"
                },
                new Contact
                {
                    Id = 3,
                    FirstName = "Lucifer",
                    LastName = "Morningstar",
                    Email = "Hell.master69@lux.god"
                }
            );
        }
    }
}
