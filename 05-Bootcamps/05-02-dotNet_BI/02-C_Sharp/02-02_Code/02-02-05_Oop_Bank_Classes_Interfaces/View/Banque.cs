using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.View
{
    internal class Banque 
    {
        internal string Nom()
        {
            Console.WriteLine("quel est le nom de votre banque ?");
            string nom = Console.ReadLine();
            return nom;
        }

        
    }
}
