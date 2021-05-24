using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.Domain
{
    interface IBanker : ICustomer
    {
        /// <summary>
        /// Numéro du compte
        /// </summary>
        string Numero { get; }
        /// <summary>
        /// Personne propriétéaire du compte
        /// </summary>
        Personne Titulaire { get; }
        /// <summary>
        /// met a jour le solde en apopliquant les interets
        /// </summary>
        void AppliquerInteret();
    }
}
