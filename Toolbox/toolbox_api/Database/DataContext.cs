using Microsoft.EntityFrameworkCore;
using toolbox_api.Models;

namespace toolbox_api.Database
{
	public class DataContext : DbContext
	{
		// Constructor
		public DataContext(DbContextOptions options) : base(options)
		{
			
		}

		public DbSet<Tool> Tools { get; set; }
		public DbSet<Category> Categories { get; set; }
		public DbSet<Language> Languages  { get; set; }
		public DbSet<Framework> Frameworks  { get; set; }
	}
}