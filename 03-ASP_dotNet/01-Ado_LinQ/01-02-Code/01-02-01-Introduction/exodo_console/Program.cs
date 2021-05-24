using System;
using System.Data;
using System.Data.SqlClient;

namespace exodo_console
{
    class Program
    {
        static void Main(string[] args)
        {
            // Init new database object
            Db db = new Db();
            db.SetCon(@"Data Source=NICOLASDENO00FA;Initial Catalog=Exodo;Integrated Security=True;Connect Timeout=60;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            db.SetCmd();

            // Connected mode - Execute Scalar (one result)
            db.ExecScalar("SELECT FirstName FROM Student WHERE ID=1");

            // Connected mode (99%+ case) - Execute Reader (many result)
            db.ExecReader("SELECT FirstName as Prenom, LastName as Nom FROM Student");

            // Disconnect mode (1%- case) - Sql Adapter (many result)
            Db db2 = new Db();
            db2.SetCon(@"Data Source=NICOLASDENO00FA;Initial Catalog=Exodo;Integrated Security=True;Connect Timeout=60;Encrypt=False;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False");
            db2.SetCmd();
            db2.SqlAdapt("SELECT FirstName as Prenom, LastName as Nom FROM Student");
           
        }
    }
}
