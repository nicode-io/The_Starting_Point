using System.Collections.Generic;

namespace toolbox_api.Models
{
	public class Tool
	{
		public int ToolID { get; set; }
		public string Title { get; set; }
		public string Description { get; set; }

		public ICollection<Category> Categories { get; set; }
		public ICollection<Framework> Frameworks { get; set; }
		public ICollection<Language> Languages { get; set; }
	}
}