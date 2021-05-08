using System.Collections.Generic;

namespace toolbox_api.Models
{
	public class Framework
	{
		public int FrameworkID { get; set; }
		public string Name { get; set; }
		public string Description { get; set; }
		public int LanguageID { get; set; }

		public ICollection<Tool> Tools { get; set; }
		public ICollection<Category> Categories { get; set; }
	}
}