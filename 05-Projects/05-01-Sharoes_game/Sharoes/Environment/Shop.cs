namespace Sharoes.Environment
{
	public class Shop
	{
		public void BuyHealthPotion(Character hero)
		{
			hero.Gold -= 20;
			hero.Hp += 50;
		}
	}
}