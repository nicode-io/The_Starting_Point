using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using Sharoes.Environment;

namespace Sharoes
{
	public class Character
	{
		public string Name;
		public int Hp;
		public int Stamina;
		public int Strength;
		public int Magic;
		public int Gold { get; set; }
		
		public int SetStats()
		{
			List<int> results = new List<int>();
			for (var i = 0; i < 4; i++)
			{
				var dice = new Dice(6);
				var result = dice.RollDice(dice.FaceNumber);
				results.Add(result);
			}
			results.Sort();
			results.Remove(results[0]);

			int sum = 0;
			foreach (int result in results) sum += result;
			return sum;
		}

		public Character(string name, int stamina, int strength, int magic, int gold)
		{
			Name = name;
			Stamina = SetStats() * stamina / 2;
			Strength = SetStats() * strength;
			Magic = SetStats() * magic;
			Hp = Stamina * 5;
			Gold = gold;
		}
		
		public void Hit(Character character)
		{
			character.Hp -= Strength - 10;
			Console.WriteLine($"{character.Name} life is: {character.Hp}\t");
		}

		public void ResetPv()
		{
				
		}
	}
}