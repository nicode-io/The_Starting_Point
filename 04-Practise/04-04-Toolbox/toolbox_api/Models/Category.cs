using System.Collections.Generic;

namespace toolbox_api.Models
{
	public class Category
	{
			public int CategoryID { get; set; }
			public string Name { get; set; }

			public ICollection<Tool> Tools { get; set; }
			public ICollection<Framework> Frameworks { get; set; }
	}
}