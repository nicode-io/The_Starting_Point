using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.Domain
{
    public class Personne
    {
        public string Nom { get; private set; }
        public string Prenom { get; private set; }
        public DateTime DateNaiss { get; private set; }
        public int Age
        {
            get
            {
                return DateTime.Now.Year - DateNaiss.Year //on prend le nombre d'année différente
                    - (DateTime.Now.Month < DateNaiss.Month ? 1 : //on enlève 1 an si l'annif n'a pas eu lieu cette année
                    DateTime.Now.Day < DateNaiss.Day ? 1 : 0);
            }
        }
        public Personne(DateTime ddn, string nom = "Doe", string prenom = "John")
        {
            Nom = nom;
            Prenom = prenom;
            DateNaiss = ddn;
        }

        private static bool Idem(Personne p1, Personne p2)
        {
            return p1.Nom == p2.Nom && p1.Prenom == p2.Prenom && p1.DateNaiss == p2.DateNaiss;
        }
        public override bool Equals(object obj)
        {
            return Idem(this, (Personne) obj);
        }

        public override string ToString()
        {
            return Prenom + " " + Nom + " né le "+ DateNaiss.Day+"/"+DateNaiss.Month+"/"+DateNaiss.Year+" ("+Age+" ans)\n";
        }
    }
}
