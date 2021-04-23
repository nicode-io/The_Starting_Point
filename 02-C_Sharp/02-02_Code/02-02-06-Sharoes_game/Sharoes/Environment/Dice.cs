using System;

namespace Sharoes.Environment
{
	public class Dice
	{
		public int FaceNumber { get; private set; }
		
		public Dice(int faceNumber)
		{
			FaceNumber = faceNumber;
		}

		public int RollDice(int diceFaceNumber)
		{
			Random roll = new Random();
			int result  = roll.Next(1,  diceFaceNumber + 1);
			return result;
		}
	}
}