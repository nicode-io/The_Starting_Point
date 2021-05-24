using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.Domain
{
    public class Personne
    {
        public string Nom { get; private set; }
        public string Prenom { get; private set; }
        private DateTime DateNaiss()
        {
            Console.WriteLine("Quelle est sa date de naissance ? (au format jj/mm/aaaa)");
            string temp = Console.ReadLine();
            return ExtraireDate(temp);
        }
        private DateTime ExtraireDate(string texte)
        {
            string j, m, a;
            int posJM, posMA;
            int jj, mm, aaaa;
            posJM = texte.IndexOf('/');
            jj = 0 + posJM;
            posMA = texte.LastIndexOf('/');
            mm = posMA-1 - posJM;
            j = texte.Substring(0, jj);
            m = texte.Substring(posJM+1, mm);
            a = texte.Substring(posMA+1);
            int.TryParse(j, out jj);
            int.TryParse(m, out mm);
            int.TryParse(a, out aaaa);
            return new DateTime(aaaa, mm, jj);
        }
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
