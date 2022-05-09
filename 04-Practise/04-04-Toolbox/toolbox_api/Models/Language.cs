using System.Collections.Generic;

namespace toolbox_api.Models
{
	public class Language
	{
		public int LanguageID { get; set; }
		public string ShortName { get; set; }
		public string LongName { get; set; }

		public ICollection<Tool> Tools { get; set; }
		public ICollection<Framework> Frameworks { get; set; }
	}
}