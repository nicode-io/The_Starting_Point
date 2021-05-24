using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.Data
{
    internal class Mot
    {
        public static string Generator(int nbSyllabes)
        {
            string[] syllabes = new string[] {
                "jes", "sic", "a", "du", "pon",
                "i", "sa", "bel", "skou",
                "ni", "co", "las", "de", "no", "el",
                "mau", "de", "pe", "rot",
                "tho", "mas", "vie", "ce", "li",
                "ro", "gei", "ro", "mam", "bu", "ku",
                "ar", "nold", "ba", "di", "ban", "ga",
                "co", "ren", "tin", "de", "block",
            };
            string result = "";
            for (int i = 0; i < nbSyllabes; i++)
            {
                Random r = new Random();
                int nb = r.Next(0, syllabes.Length);
                result += syllabes[nb];
            }
            return result;
        }
    }
}
