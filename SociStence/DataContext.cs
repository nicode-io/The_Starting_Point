using Microsoft.EntityFrameworkCore;
using SociOmain;

namespace SociStence
{
	public class DataContext : DbContext
	{
		public DataContext(DbContextOptions options) : base(options)
		{
			
		}

		public DbSet<Activity> Activities { get; set; }
	}
}