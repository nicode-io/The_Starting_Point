using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToolBox.Database
{
    /// <summary>
    /// Classe qui contient toutes les infos nécessaires à l'éxécution de la commande SQL
    /// </summary>
    public class Command
    {
        public string CommandText { get; }

        public Dictionary<string, object> Parameters { get; }

        public bool IsStoreProcedure { get; }

        public Command(string commandText, bool isStoreProcedure)
        {
            CommandText = commandText;
            IsStoreProcedure = isStoreProcedure;
            Parameters = new Dictionary<string, object>();
        }

        public void AddParameter(string parameterName, object value)
        {
            Parameters.Add(parameterName, value);
        }
    }
}
