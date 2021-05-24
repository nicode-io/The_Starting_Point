using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.Data
{
    public class Banque
    {
        public static Domain.Banque Generator()
        {
            Domain.Banque b = new Domain.Banque(Mot.Generator(5));
            Courant c = new Courant();
            Epargne e = new Epargne();

            Domain.Personne p = Personne.Generator();
            b.Ajouter(c.Generator(p));
            b.Ajouter(c.Generator(p));
            b.Ajouter(e.Generator(p));

            p = Personne.Generator();
            b.Ajouter(c.Generator(p));
            b.Ajouter(c.Generator(p));
            b.Ajouter(e.Generator(p));
            b.Ajouter(e.Generator(p));

            return b;
        }
    }
}
