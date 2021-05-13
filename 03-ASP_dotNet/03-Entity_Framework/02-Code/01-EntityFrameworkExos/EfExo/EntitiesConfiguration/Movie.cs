using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EfExo.EntitiesConfiguration
{
    public class Movie
    {
        public int MovieId { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string MainActor { get; set; }
        public string Category { get; set; }
        public string Director { get; set; }
    }
}
