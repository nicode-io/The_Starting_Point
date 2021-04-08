using System;

namespace CSharp_Structure
{
    class Structures
    {
        static void Main(string[] args)
        {
            #region Structure_Instanciation

            //? Structure instanciation
            // Localisation Bruxelles;
            // Bruxelles.Latitude.Degre = 50;
            // Bruxelles.Latitude.Minutes = 51;
            // Bruxelles.Latitude.Seconds = 1;
            // Bruxelles.Longitude.Direction = "nord";
            // // ... 
            // Bruxelles.Altitude = 20;

            #endregion


            #region Exo_Structure_Two_Execution

            Exo_Structure_Two();

            #endregion
        }

        #region Exo_Structure_Two_Method

        static void Exo_Structure_Two()
        {
            Point?[,] points = new Point?[5, 5];
            for (int i = 0;
                i < points.GetLength(0);
                i++)
            {
                points[i, i] = new Point { X = i + 1, Y = i + 1 };
            }

            for (int y = 0; y < points.GetLength(0); y++)
            {
                for (int x = 0; x < points.GetLength(1); x++)
                {
                    Console.Write(points[y, x] is Point p ? p.toString() : "       ");
                }

                Console.Write("\n");
            }
        }

        #endregion

        #region Structure definition

        // public struct AngularMeasurement
        // {
        //     public int Degre, Minutes, Seconds;
        //     public string Direction;
        // }
        //
        // public struct Localisation
        // {
        //     public AngularMeasurement Longitude, Latitude;
        //     public int Altitude;
        // }

        // public struct Celsius
        // {
        //     public double Temperature;
        // }
        //
        // public struct Fahrenheit
        // {
        //     public double Temperature;
        // }

        #endregion

        #region Exo_Structure_Two_Creation

        public struct Point
        {
            public int X;
            public int Y;

            public string toString()
            {
                return $"X:{X}-Y:{Y}";
            }
        }

        #endregion
    }
}