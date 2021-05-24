using System;
using System.Collections.Generic;
using System.Text;

namespace Demo.Objet
{
    class Courant
    {
        private string numero;
        public string Numero
        {
            get { return numero; }
            set { numero = value; }
        }

        private double solde;
        public double Solde
        {
            get { return solde; }
            private set { solde = value; }
        }

        private double ligneDeCredit;
        public double LigneDeCredit
        {
            get { return ligneDeCredit; }
            set 
            { 
                if(value >= 0)
                {
                    ligneDeCredit = value; 
                }
            }
        }

        private Personne titulaire;
        public Personne Titulaire
        {
            get { return titulaire; }
            set { titulaire = value; }
        }

        public void Retrait(double montant)
        {
            Solde -= montant;
        }

        public void Depot(double montant)
        {
            Solde += montant;
        }

        public static double operator +(Courant c1, Courant c2)
        {
            return (c1.Solde < 0 ? 0 : c1.solde) + (c2.Solde < 0 ? 0 : c2.solde);
        }

        public static double operator +(double val, Courant c2)
        {
            return val + (c2.Solde < 0 ? 0 : c2.solde);
        }
    }
}
