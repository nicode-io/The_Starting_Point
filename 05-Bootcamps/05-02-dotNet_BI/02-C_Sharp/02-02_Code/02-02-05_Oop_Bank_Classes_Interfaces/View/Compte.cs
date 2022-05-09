using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.View
{
    class Compte
    {
        public Type TypeCompte()
        {
            Console.WriteLine("Quel type de compte souhaitez-vous ouvrir?");
            Console.WriteLine("a. un compte courant");
            Console.WriteLine("b. un compte épargne");

            string choix = Console.ReadLine();
            switch (choix)
            {
                case "a":
                case "A":
                    return typeof(Domain.Courant) ;
                case "b":
                case "B":
                    return typeof(Domain.Epargne);
            }
            return typeof(Domain.Compte);
        }
        public void Numero(string numero)
        {
            Console.WriteLine("Le numéro de compte attribué est le {0}", numero);
        }

        internal double SoldeDepart()
        {
            Console.WriteLine("Quel montant déposez-vous maintenant ?");
            double result;
            double.TryParse(Console.ReadLine(), out result);
            if (result < 0) 
            { 
                Console.WriteLine("Le montant ne peut pas être négatif dés le départ.");
                result = 0;
            }
            return result;
        }

        internal double LigneDeCredit()
        {
            Console.WriteLine("Quel est le montant de crédit autorisé ?");
            double result;
            double.TryParse(Console.ReadLine(), out result);
            if (result < 0)
            {
                Console.WriteLine("Le montant ne peut pas être négatif.");
                result = 0;
            }
            return result;
        }
    }
}
