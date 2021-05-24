using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.Data
{
    public abstract class Compte
    {
        public abstract Domain.Compte Generator();
        public abstract Domain.Compte Generator(Domain.Personne titulaire);
        public virtual string Numero()
        {
            Random r = new Random();
            return string.Format("BE{0,2}-{1,4}-{2,4}-{3,4}", 
                r.Next(1,99), r.Next(1,9999), r.Next(1, 9999), r.Next(1, 9999));
        }
        protected static double Solde()
        {
            Random r = new Random();
            return r.NextDouble()*1000000;
        }
    }
}
