using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;

namespace Demo.Objet
{
    class Banque
    {
        private Dictionary<string, Courant> comptes = new Dictionary<string, Courant>();

        private string nom;
        public string Nom
        {
            get { return nom; }
            set { nom = value; }
        }

        public Courant this[string numero]
        {
            get { return Chercher(numero); }
        }

        public void Ajouter(Courant c)
        {
            if(!comptes.ContainsKey(c.Numero))
            {
                comptes.Add(c.Numero, c);
            }
        }

        public void Supprimer(string numero)
        {
            comptes.Remove(numero);
        }

        public Courant Chercher(string numero)
        {
            Courant result;
            comptes.TryGetValue(numero, out result);
            return result;
        }

        public double AvoirsDesComptes(Personne p)
        {
            double somme = 0;
            foreach (Courant item in comptes.Values)
            {
                if(item.Titulaire == p)
                {
                    somme += item;
                }
            }
            return somme;
        }

        public void Afficher()
        {
            foreach (Courant item in comptes.Values)
            {
                Console.WriteLine($"Numero:{item.Numero}\tSolde:{item.Solde}\tLigne:{item.LigneDeCredit}");
            }
        }
    }
}
