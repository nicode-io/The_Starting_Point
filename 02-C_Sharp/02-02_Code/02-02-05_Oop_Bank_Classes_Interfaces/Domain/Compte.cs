using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.Domain
{
    public abstract class Compte : IBanker
    {
        private double _solde;
        public string Numero { get; set; }
        public Personne Titulaire { get; set; }
        public double Solde { get => _solde; }

        public Compte(string numero, Personne titulaire, double solde = 0)
        {
            Numero = numero;
            Titulaire = titulaire;
            _solde = solde;
        }

        public virtual void Retrait(double montant)
        {
            _solde -= montant;
        }
        public void Depot(double montant)
        {
            _solde += montant;
        }
        protected abstract double CalculInteret();
        public void AppliquerInteret()
        {
            if (Solde >= 0)
            {
                _solde += CalculInteret();
            }
            else
            {
                _solde -= CalculInteret();
            }
        }
        public static double operator +(Compte c1, Compte c2) => (c1.Solde > 0 ? c1.Solde : 0) + (c2.Solde > 0 ? c2.Solde : 0);
        public static double operator +(double solde, Compte c) => (c.Solde > 0 ? c.Solde : 0) + (solde > 0 ? solde : 0);
    }
}
