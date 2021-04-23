using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.Domain
{
    public class Courant : Compte
    {
        private double _ligneDeCredit;
        public double LigneDeCredit 
        { 
            get => _ligneDeCredit;
            private set
            {
                if (value < 0) { _ligneDeCredit = 0; }
                else { _ligneDeCredit = value; }
            }
        }

        public Courant(string numero, Personne titulaire, double ligneDeCredit) : base(numero, titulaire, ligneDeCredit)
        {
            Numero = numero;
            Titulaire = titulaire;
            LigneDeCredit = ligneDeCredit;
        }

        public Courant(string numero, Personne titulaire, double solde = 0, double ligneDeCredit=0)
            : base(numero, titulaire, solde)
        {
            LigneDeCredit = ligneDeCredit;
        }

        protected override double CalculInteret()
        {
            double taux = 0;
            if (Solde >= 0)
            {
                taux = 3;
            }
            else
            {
                taux = 9.75;
            }
            return Solde * taux;
        }
        public override string ToString()
        {
            return "Le compte courant " + Numero + " avec un solde de " + Solde 
                + "\n\tet une ligne de crédit de "+LigneDeCredit
                + "\n\tappartient à " + Titulaire.ToString()+"\n";
        }
    }
}
