
namespace Sharoes
{
	public class Monster : Character
	{
		public Monster(string name, int stamina, int strength, int magic, int gold) : base(name, stamina, strength, magic, gold)
		{
			
		}

		public int Gold { get; set; }
		

		public int LootGold()
		{
			return 20;
		}
	}
}