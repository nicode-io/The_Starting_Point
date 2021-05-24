using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.Domain
{
    public class Epargne : Compte
    {
        public DateTime DateDernierRetrait { get; private set; }
        public Epargne(string numero, Personne titulaire, double solde = 0) 
            : base(numero, titulaire, solde)
        {
            DateDernierRetrait = DateTime.Now;
        }

        public override void Retrait(double montant)
        {
            base.Retrait(montant);
            DateDernierRetrait = DateTime.Now;
        }

        protected override double CalculInteret()
        {
            return Solde * 4.5;
        }
        public override string ToString()
        {
            return "Le compte épargne " + Numero + " avec un solde de " + Solde 
                + "\n\tdont le dernier retrait à eu lieu le "+DateDernierRetrait.ToString()
                + "\n\tappartient à " + Titulaire.ToString()+"\n";
        }
    }
}
