using System;
using System.Threading;

namespace Sharoes.Core
{
	public class Display
	{
		public void ConsoleDisplay(ConsoleColor foregroundColor, ConsoleColor backgroundColor, string message)
		{
			Console.ForegroundColor = foregroundColor;
			Console.BackgroundColor = backgroundColor;
			Console.WriteLine(message);
		}

		public void DisplayMenu()
		{
			ConsoleDisplay(ConsoleColor.DarkRed, ConsoleColor.Black,
				"" + @" _   _  _____ ______  _____  _____  _____ " + "\n" +
				@"| | | ||  ___|| ___ \|  _  ||  ___|/  ___|" + "\n" +
				@"| |_| || |__  | |_/ /| | | || |__  \ `--. " + "\n" +
				@"|  _  ||  __| |    / | | | ||  __|  `--. \" + "\n" +
				@"| | | || |___ | |\ \ \ \_/ /| |___ /\__/ /" + "\n" +
				@"\_| |_/\____/ \_| \_| \___/ \____/ \____/ " + "\n" +
				@"                                          " + "\n" +
				@"     (--)-----------------------------(--)" + "\n" +
				@"    (--)    What's your choice ?     (--)" + "\n" +
				@"   (--)     Enter the cave [1]      (--)" + "\n" +
				@"  (--)      Find a shop    [2]     (--)" + "\n" +
				@" (--)       ShardZilla     [3]    (--)" + "\n" +
				@"(--)-----------------------------(--)" + "\n");
		}

		public void DisplayFight()
		{
			ConsoleDisplay(ConsoleColor.Black, ConsoleColor.DarkRed,
				"" + @"  _    _    _    _    _    " + "\n" +
				@" / \  / \  / \  / \  / \   " + "\n" +
				@"( F )( I )( G )( H )( T )  " + "\n" +
				@" \_/  \_/  \_/  \_/  \_/   ");
			Console.ResetColor();
			Thread.Sleep(1000);
		}

		public void DisplayWinFight(string monsterName, int monsterGold, int heroGold, int heroHp)
		{
			Console.Clear();
			ConsoleDisplay(ConsoleColor.DarkGreen, ConsoleColor.Black,
				"" + @"  _    _    _    _    _     _    _    _      " + "\n" +
				@" / \  / \  / \  / \  / \   / \  / \  / \     " + "\n" +
				@"( F )( I )( G )( H )( T ) ( W )( I )( N )    " + "\n" +
				@" \_/  \_/  \_/  \_/  \_/   \_/  \_/  \_/     " + "\n" +
				$"    (--)---------------------------------(--)" + "\n" + 
				$"   (--)   YOU KILLED {monsterName} !                   " + "\n" +
				$"  (--)   You earn {monsterGold} golds       " + "\n" +
				$" (--) Your have {heroGold} golds  " + "\n" +
				$"(--)--------------------------------(--)");
			Thread.Sleep(2000);
			Console.Clear();
		}

		public void DiplayStats(int heroHp, int heroGold)
		{
			Console.Clear();
			ConsoleDisplay(ConsoleColor.DarkBlue, ConsoleColor.Black,
				$"(-----( HP {heroHp} )----( GOLD {heroGold} )----------)");
		}
	}
}