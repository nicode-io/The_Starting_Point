using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.Data
{
    class Courant : Compte
    {
        public override Domain.Compte Generator()
            => new Domain.Courant(Numero(), Personne.Generator(), Solde());
        public override Domain.Compte Generator(Domain.Personne titulaire)
            => new Domain.Courant(Numero(), titulaire, Solde());
        public override string Numero()
        {
            Random r = new Random();
            return string.Format("BE{0,2}-{1,4}-{2,4}-{3,4}",
                r.Next(1, 99), r.Next(5001, 9999), r.Next(1, 9999), r.Next(1, 9999));
        }
    }
}
