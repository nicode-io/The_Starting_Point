using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoManyToMany
{
    class Casting
    {
        public int Id { get; set; }
        public Actor Actor { get; set; }
        public Movie Movie { get; set; }
    }
}
