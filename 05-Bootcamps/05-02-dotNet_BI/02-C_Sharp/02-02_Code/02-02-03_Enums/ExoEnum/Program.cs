using System;

namespace ExoEnum
{
    class Program
    {
        public enum Couleurs { Coeur, Pique, Carreau, Treffle};
        public enum Valeurs { 
            Deux = 2,
            Trois = 3,
            Quatre = 4,
            Cinq = 5,
            Six = 6,
            Sept = 7,
            Huit = 8,
            Neuf = 9,
            Dix = 10,
            Valet = 11,
            Dame = 12,
            Roi = 13,
            As = 14                           
        };

        public struct Carte
        {
            public Couleurs couleur;
            public Valeurs valeur;
        }

        static void Main(string[] args)
        {
            Carte[] deck = new Carte[52];

            int i = 0;
            foreach(Couleurs c in Enum.GetValues(typeof(Couleurs)))
            {
                foreach(Valeurs v in Enum.GetValues(typeof(Valeurs)))
                {
                    deck[i].couleur = c;
                    deck[i].valeur = v;
                    i++;
                }
            }

            Console.BackgroundColor = ConsoleColor.White;
            Console.Clear();
            foreach(Carte carte in deck)
            {
                switch (carte.couleur)
                {
                    case Couleurs.Carreau:
                    case Couleurs.Coeur:
                        Console.ForegroundColor = ConsoleColor.Red;
                        break;
                    case Couleurs.Pique:
                    case Couleurs.Treffle:
                        Console.ForegroundColor = ConsoleColor.Black;
                        break;
                }
                Console.WriteLine($"{carte.couleur.ToString()}\t{carte.valeur.ToString()}");
            }
            Console.ResetColor();
        }
    }
}
