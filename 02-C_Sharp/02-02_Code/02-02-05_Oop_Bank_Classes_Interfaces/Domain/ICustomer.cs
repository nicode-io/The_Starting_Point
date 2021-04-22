using System;
using System.Collections.Generic;
using System.Text;

namespace GestBanque.Domain
{
    interface ICustomer
    {
        /// <summary>
        /// solde acteul du compte
        /// </summary>
        double Solde { get; }
        /// <summary>
        /// enlève le montant passé en paramêtre au solde
        /// </summary>
        /// <param name="montant">nombre toujours positif</param>
        void Retrait(double montant);
        /// <summary>
        /// ajoute le montant su solde
        /// </summary>
        /// <param name="montant">nombre toujours positif</param>
        void Depot(double montant);
    }
}
