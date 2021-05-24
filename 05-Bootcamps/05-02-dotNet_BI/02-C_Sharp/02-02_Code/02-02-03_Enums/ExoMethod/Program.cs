using System;

namespace ExoMethod
{
    class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");
            //Celcius c = new Celcius();
            //c.temperature = 6;
            //Console.WriteLine($"{c.Conversion().temperature}°F");

            //Fahrenheit f = new Fahrenheit();
            //f.temperature = 72;
            //Console.WriteLine($"{f.Conversion().temperature}°C");

            EquationSecondDegre eq = new EquationSecondDegre();
            eq.A = 1;
            eq.B = -2;
            eq.C = 1;

            if(eq.Resoudre(out double? X1, out double? X2))
            {
                Console.WriteLine(string.Format("La solution de {0}x²+{1}x+{2} est : X1 : {3} || X2 : {4}.", eq.A, eq.B, eq.C, X1, (X2 == null) ? "null" : X2.ToString()));
            }
            else
            {
                Console.WriteLine($"Pas de solution pour {eq.A}x²+{eq.B}+ {eq.C}");
            }




            Console.ReadLine();


            
        }
    }

    public struct Celcius
    {
        public double temperature;

        public Fahrenheit Conversion()
        {
            Fahrenheit result = new Fahrenheit();
            result.temperature = (temperature * (9.0/5.0))+32;
            return result;
        }
    }

    public struct Fahrenheit
    {
        public double temperature;

        public Celcius Conversion()
        {
            Celcius result = new Celcius();
            result.temperature = (temperature - 32) * 5.0 / 9.0;
            return result;
        }
    }

    public struct EquationSecondDegre
    {
        public double A;
        public double B;
        public double C;

        public bool Resoudre(out double? X1, out Nullable<double> X2)
        {
            X1 = null;
            X2 = null;
            double delta = (B * B) - (4 * A * C);

            if (delta < 0)
            {
                return false;
            }
            else if (delta == 0)
            {
                X1 = -B / (2 * A);
            }
            else
            {
                X1 = (-B - Math.Sqrt(delta)) / (2 * A);
                X2 = (-B - Math.Sqrt(delta)) / (2 * A);
            }
            return true;
        }
    }
}
