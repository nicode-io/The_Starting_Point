using System;
using Sharoes.Environment;

namespace Sharoes.Core
{
	public class Game
	{
		public void RunGame()
		{
			Display screen = new Display();
			Shop shop = new Shop();

			var nicolBolas = new Hero("NicolBolas", 3, 2, 1, 50);
			nicolBolas.SetStats();

			while (nicolBolas.Hp >= 0)
			{
				screen.DiplayStats(nicolBolas.Hp, nicolBolas.Gold);
				screen.DisplayMenu();

				var playerChoice = int.Parse(Console.ReadLine() ?? string.Empty);
				switch (playerChoice)
				{
					case 1:
						Console.Clear();
						screen.DisplayFight();
						var batman = new Monster("BAT", 1, 2, 1, 20);
						batman.SetStats();
						var fight = new Fight();
						fight.RunFight(nicolBolas, batman);
						break;
					case 2:
						screen.ConsoleDisplay(ConsoleColor.White, ConsoleColor.Blue,
							" You buy an health potion, health is restored ! ");
						shop.BuyHealthPotion(nicolBolas);
						Console.ResetColor();
						break;
					case 3:
						//TODO: Monster BOSSFIGHT 
						Console.WriteLine("Boss Fight");
						break;
				}
			}
		}
	}
}