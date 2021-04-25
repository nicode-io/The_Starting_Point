using System;
using System.Threading;
using Sharoes.Core;

namespace Sharoes.Environment
{
	public class Fight
	{
		private Display screen = new Display();
		public void RunFight(Character hero, Character monster)
		{
			while (hero.Hp > 0 && monster.Hp > 0)
			{
				hero.Hit(monster);
				Thread.Sleep(1000);
				monster.Hit(hero);
				Thread.Sleep(1000);
			}

			if (hero.Hp <= 0)
			{
				Console.WriteLine($"{hero.Name} died :( Game Over");	
			}
			else
			{
				hero.Gold += monster.Gold;
				screen.DisplayWinFight(monster.Name, monster.Gold, hero.Gold, hero.Hp);
			}
		}
	}
}