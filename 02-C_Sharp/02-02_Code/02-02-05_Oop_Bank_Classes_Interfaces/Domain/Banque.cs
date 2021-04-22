using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.Domain
{
    public class Banque
    {
        private List<Compte> _comptes;
        public string Nom { get; set; }

        public Banque(string nom)
        {
            _comptes = new List<Compte>();
            Nom = nom;
        }
        public void Ajouter(Compte compte)
        {
            if(!_comptes.Exists(x => x.Numero == compte.Numero))
            {
                _comptes.Add(compte);
            }
        }
        public Compte Chercher(string numero) => _comptes.Find(x => x.Numero == numero);
        public List<Compte> Chercher(Personne titulaire) => _comptes.FindAll(x => x.Titulaire.Equals(titulaire));
        public void Supprimer(Compte compte)
        {
            _comptes.Remove(compte);
        }
        public double AvoirDesComptes(Personne titulaire)
        {
            double result = 0;
            foreach (Compte c in Chercher(titulaire))
            {
                result += c;
            }
            return result;
        }

        public string NumeroGenerer(Type typeCompte)
        {
            string numero="";
            do {
                if (typeof(Courant) == typeCompte)
                {
                    numero = (new Data.Courant()).Numero();
                }
                else if (typeof(Epargne) == typeCompte)
                {
                    numero = (new Data.Epargne()).Numero();
                }
                
            } while (_comptes.Exists(x => x.Numero == numero));
            return numero;
        }
        public override string ToString()
        {
            string result = "La banque "+Nom+" contient les comptes suivant\n";
            foreach (Compte c in _comptes)
            {
                result += c.ToString();
            }
            return result+"\n";
        }
    }
}
