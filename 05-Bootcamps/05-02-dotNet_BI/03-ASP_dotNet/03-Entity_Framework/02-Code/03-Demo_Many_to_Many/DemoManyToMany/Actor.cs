using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DemoManyToMany
{
    class Actor
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public IEnumerable<Casting> Castings { get; set; }
    }
}
