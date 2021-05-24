using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace exodo_console
{
    class Db
    {
        private string _conString;
        private SqlConnection _con;
        private SqlCommand _cmd;

        public string ConString => _conString;
        public SqlConnection Con => _con;
        public SqlCommand Cmd => _cmd;

        public void SetCon(string conString)
        {
            // Init database connection
            _conString = conString;
            _con = new SqlConnection(_conString);
        }

        public void SetCmd()
        {
            _cmd = _con.CreateCommand();
        }

        // Connected mode - Execute Scalar (one result)
        public void ExecScalar(string sqlQuery)
        {
            using (_cmd = _con.CreateCommand())
            {
                // Init connection and CreateCommand
                _cmd.CommandText = sqlQuery;
                _con.Open();

                // Dipslay result
                Console.WriteLine((string)_cmd.ExecuteScalar());

                // End connection
                _con.Close();
            }
        }

        // Connected mode (99%+ case) - Execute Reader (many result)
        public void ExecReader(string sqlQuery)
        {
            using(_con)
            {
                using(_cmd)
                {
                    // Init connection and CreateCommand
                    _cmd.CommandText=sqlQuery;
                    _con.Open();

                    // Init SqlDataReader
                    using(SqlDataReader reader = _cmd.ExecuteReader())
                    {
                        while(reader.Read()) // While there's new line
                        {
                            // Display result
                            Console.WriteLine($"{reader[0]} {reader[1]}");
                        }
                    }

                    // End connection
                    _con.Close();
                }
            }
        }

        // Disconnect mode (1%- case) - Sql Adapter (many result)
        public void SqlAdapt(string sqlquery)
        {
            using(_con)
            {
                using(_cmd)
                {
                    // Init Sql Adapter
                    _cmd.CommandText = sqlquery;
                    SqlDataAdapter sa = new SqlDataAdapter();
                    sa.SelectCommand = _cmd;

                    // Init Data Table
                    DataTable dt = new DataTable();

                    // Add DataTable to SqlAdapter
                    sa.Fill(dt);

                    // Loop through query results
                    if (dt.Rows.Count > 0) // If there's results
                    {
                        foreach (DataRow row in dt.Rows) // Do something for each line
                        {
                            Console.WriteLine($"{row[0]} {row[1]}");
                        }
                    }

                }
            }
        }
    }
}
