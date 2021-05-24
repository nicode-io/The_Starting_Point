using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace Demo.Objet
{
    class Program
    {
        static Banque banque = new Banque();

        static void Main(string[] args)
        {
            // instanciation // création d'1 objet/instance de type Personne
            Personne khun = new Personne();
            khun.Nom = "Ly";
            khun.Prenom = "Khun";
            DateTime date = new DateTime(1982, 5, 6);
            khun.DateDeNaiss = date;


            //while(true)
            //{
            //    Console.Clear();
            //    banque.Afficher();
            //    Console.WriteLine("Que voulez vous faire ?\n1.Créer un compte\n2.Consulter un compte");
            //    int choix = int.Parse(Console.ReadLine());
            //    switch (choix)
            //    {
            //        case 1:
            //            CreerCompte(khun);
            //            break;
            //        case 2:
            //            ConsulterCompte();
            //            break;
            //    }
            //}

            Courant c1 = new Courant();
            c1.Depot(1d/2);

            Courant c2 = new Courant();
            c2.Depot(1d/3);

            Console.WriteLine(c1 + c2);


        }

        private static void ConsulterCompte()
        {
            Console.WriteLine("Numero ?");
            string num = Console.ReadLine();
            //Courant c = banque[num];// utilisation de l'indexeur
            Courant c = banque.Chercher(num);
            if(c != null)
            {
                Console.WriteLine("1.Ajouter\n2.Retirer");
                int choix = int.Parse(Console.ReadLine());
                switch (choix)
                {
                    case 1:
                        Console.WriteLine("Quel montant voulez ajouter ?");
                        double m = double.Parse(Console.ReadLine());
                        c.Depot(m);
                        break;
                    case 2:
                        Console.WriteLine("Quel montant voulez retirer ?");
                        double m1 = double.Parse(Console.ReadLine());
                        c.Retrait(m1);
                        break;
                }
            }
        }

        private static void CreerCompte(Personne p)
        {
            Console.WriteLine("Entrez le numero de compte");
            string numero = Console.ReadLine();
            Console.WriteLine("Entrez la ligne de crédit");
            double ligne = double.Parse(Console.ReadLine());
            Courant c = new Courant();
            c.Numero = numero;
            c.LigneDeCredit = ligne;
            c.Titulaire = p;
            banque.Ajouter(c);
        }
    }
}
