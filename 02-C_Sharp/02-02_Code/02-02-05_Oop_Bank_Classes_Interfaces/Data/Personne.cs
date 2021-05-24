using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.Data
{
    class Personne
    {
        public static Domain.Personne Generator() 
            => new Domain.Personne(Date(), Mot.Generator(3), Mot.Generator(2));

        private static DateTime Date()
        {
            Random r = new Random();
            return new DateTime(r.Next(1950, DateTime.Now.Year), r.Next(1, 12), r.Next(1,28));//version très simple
        }

    }
}
