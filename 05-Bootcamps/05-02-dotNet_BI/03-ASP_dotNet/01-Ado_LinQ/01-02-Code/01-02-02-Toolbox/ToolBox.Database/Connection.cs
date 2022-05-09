using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ToolBox.Database
{
    /// <summary>
    /// Classe qui va simplifier la connection en ado en réimplémentant
    /// les methodes ExecuteNonQuery, ExecuteReader, ExecuteScalar
    /// </summary>
    public class Connection
    {

        private DbProviderFactory _factory;
        private string _connString;

        // injection de dépendance par constructeur
        public Connection(DbProviderFactory factory, string connString)
        {
            _factory = factory;
            _connString = connString;
        }

        public int ExecuteNonQuery(Command command)
        {
            using (DbConnection conn = CreateConnection())
            {
                using(DbCommand cmd = CreateCommand(conn, command) )
                {
                    conn.Open();
                    return cmd.ExecuteNonQuery();
                }
            }
        }

        public T ExecuteScalar<T>(Command command)
        {
            using (DbConnection conn = CreateConnection())
            {
                using (DbCommand cmd = CreateCommand(conn, command))
                {
                    conn.Open();
                    return (T)cmd.ExecuteScalar();
                }
            }
        }

        public IEnumerable<T> ExecuteReader<T>(Command command, Func<DbDataReader, T> mapper)
        {
            using (DbConnection conn = CreateConnection())
            {
                using (DbCommand cmd = CreateCommand(conn, command))
                {
                    conn.Open();
                    DbDataReader r = cmd.ExecuteReader();
                    //List<T> result = new List<T>();
                    while(r.Read())
                    {
                        // transformer DbDatareader -> T
                        T t = mapper(r);
                        //result.Add(t);
                        yield return t;
                    }
                    //return result;
                }
            }
        }

        private DbCommand CreateCommand(DbConnection conn, Command command)
        {
            DbCommand cmd = conn.CreateCommand();
            // quid ? de la query et des parametres
            cmd.CommandText = command.CommandText;
            foreach (KeyValuePair<string, object> item in command.Parameters)
            {
                DbParameter p = cmd.CreateParameter();
                p.ParameterName = item.Key;
                p.Value = item.Value ?? DBNull.Value;
                // direction ?
                cmd.Parameters.Add(p);
            }
            if(command.IsStoreProcedure)
            {
                cmd.CommandType = CommandType.StoredProcedure;
            }
            return cmd;
        }
        /// <summary>
        /// créer une connection 
        /// </summary>
        private DbConnection CreateConnection()
        {
            DbConnection c = _factory.CreateConnection();
            c.ConnectionString = _connString;
            return c;
        }
    }
}
