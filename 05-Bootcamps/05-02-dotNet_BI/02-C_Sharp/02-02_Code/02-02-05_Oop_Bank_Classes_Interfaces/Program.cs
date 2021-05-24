using System;

namespace GestBanque
{
    class Program
    {
        private static View.Banque vBanque;
        private static Domain.Banque dBanque;
        static void Main(string[] args)
        {
            vBanque = new View.Banque();
            dBanque = new Domain.Banque(vBanque.Nom());

            bool fin = false;
            do {
                fin = Menu();
            } while (fin);

            /*GenererPersonnes(15);
            GenererComptes(5, 10);
            GenererBanque();*/
        }
        private static bool Menu()
        {
            Console.WriteLine("Que voulez-vous faire ?");
            int i = 1;
            Console.WriteLine(i++ + ". Afficher les informations de la banque.");
            Console.WriteLine(i++ + ". Ajouter un nouveau compte et un nouveau titulaire");
            Console.WriteLine(i++ + ". Afficher tous les titulaires");
            Console.WriteLine(i++ + ". Afficher tous les comptes");
            Console.WriteLine("x. Quitter l'application");

            string choix = Console.ReadLine();

            switch (choix)
            {
                case "1":
                    dBanque.ToString();
                    break;
                case "2":
                    AjouterCompteEtTitulaire();
                    break;
                case "x":
                case "X":
                    return true;
            }
            return false;
        }

        private static void AjouterCompteEtTitulaire()
        {
            View.Compte vCompte = new View.Compte();
            View.Personne vPersonne = new View.Personne();
            
            
            Domain.Personne titulaire = vPersonne.Nouveau();
            double soldeDepart;
            
            Type typeCompte;

            string numero;
            Domain.Compte compte;
            do {
                typeCompte = vCompte.TypeCompte();
                numero = dBanque.NumeroGenerer(typeCompte);
                vCompte.Numero(numero);
                soldeDepart = vCompte.SoldeDepart();

                if (typeCompte == typeof(Domain.Courant))
                {
                    double credit = vCompte.LigneDeCredit();
                    compte = new Domain.Courant(numero, titulaire, soldeDepart, credit); 
                }
                else if(typeCompte == typeof(Domain.Epargne))
                {
                    compte = new Domain.Epargne(numero, titulaire, soldeDepart);
                }
            } while (typeCompte == typeof(Domain.Compte));
        }

        private static void GenererBanque()
        {
            Console.Clear();
            Console.WriteLine("Ma banque");

            Domain.Banque b = Data.Banque.Generator();
            Console.WriteLine(b.ToString());

            Console.ReadLine();
        }

        private static void GenererPersonnes(int nb)
        {
            Console.Clear();
            Console.WriteLine("{0} personnes générées", nb);

            Domain.Personne p;
            for(int i=0; i<nb; i++)
            {
                p = Data.Personne.Generator();
                Console.WriteLine(p.ToString());
            }

            Console.ReadLine();
        }
        private static void GenererComptes(int nbCourant, int nbEpargne)
        {
            Console.Clear();
            Console.WriteLine("{0} comptes courant et {1} comptes épargnes générés", nbCourant, nbEpargne);

            Domain.Compte c;
            for (int i = 0; i < nbCourant; i++)
            {
                c = (new Data.Courant()).Generator();
                Console.WriteLine(c.ToString());
            }
            for (int i = 0; i < nbEpargne; i++)
            {
                c = (new Data.Epargne()).Generator();
                Console.WriteLine(c.ToString());
            }

            Console.ReadLine();
        }
    }
}
