using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.View
{
    class Personne
    {
        internal Domain.Personne Nouveau()
        {
            Console.WriteLine("**Ajout d'un titulaire**");

            return new Domain.Personne(DateNaiss(), Nom(), Prenom());
        }

        private string Prenom()
        {
            Console.WriteLine("Quel est son Prénom ?");
            return Console.ReadLine();
        }

        private DateTime DateNaiss()
        {
            Console.WriteLine("Quelle est sa date de naissance ? (au format jj/mm/aaaa)");
            string temp = Console.ReadLine();

            int jj, mm, aaaa;
            int.TryParse(temp.Substring(0, temp.IndexOf('/')), out jj);
            int.TryParse(temp.Substring(temp.IndexOf('/')+1, temp.LastIndexOf('/')), out mm);
            int.TryParse(temp.Substring(temp.LastIndexOf('/')+1), out aaaa);

            return new DateTime(aaaa, mm, jj);
        }

        private string Nom()
        {
            Console.WriteLine("Quel est son Nom ?");
            return Console.ReadLine();
        }
    }
}
