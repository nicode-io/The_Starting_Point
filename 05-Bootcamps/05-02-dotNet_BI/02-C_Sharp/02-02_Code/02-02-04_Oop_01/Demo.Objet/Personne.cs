using System;
using System.Collections.Generic;
using System.Text;

namespace Demo.Objet
{
    class Personne
    {
        private string nom;
        public string Nom
        {
            get { return nom; }
            set { nom = value; }
        }

        private string prenom;
        public string Prenom
        {
            get { return prenom; }
            set { prenom = value; }
        }

        private DateTime dateDeNaiss;
        public DateTime DateDeNaiss
        {
            get { return dateDeNaiss; }
            set { dateDeNaiss = value; }
        }
    }
}
