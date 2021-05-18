using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Techno.DAL.Entities
{
    public class Profile
    {
        public int Id { get; set; }
        public byte[] ImageFile { get; set; }
        public string ImageMimeType { get; set; }
        public string Description { get; set; }
        public string Linkedin { get; set; }
        public string Hobbies { get; set; }
        public string Studies { get; set; }
        public string ProfessionalExp { get; set; }
        public bool Published { get; set; }

        public virtual User User { get; set; }
        public virtual Section Section { get; set; }
        public virtual IEnumerable<Skill> Skills { get; set; }
    }
}
