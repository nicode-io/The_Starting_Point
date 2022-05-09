#include <cstdio>

/**
 * Printing is done before
 * function return so
 * print will be in order:
 * 3, 2, 1
 *
 * @param n
 */
void fun1(int n)
{
    if (n >0)
        printf("%d\n", n);
        fun1(n - 1);
}

/**
 * Printing is done after
 * function return so
 * print will be in order:
 * 1, 2, 3
 *
 * @param n
 */
void fun2(int n)
{
    if (n > 0)
        fun2(n - 1);
        printf("%d\n", n);
}

/**
 * Printing is done after
 * function return so
 * print will be in order:
 * 1, 2, 3
 *
 * @param n
 */
int fun3(int n)
{
    static int x = 0;

    if (n > 0)
    {
        x++;
        return fun3(n - 1) + x;
    }

    return 0;
}

/**
 * Print sum of first's
 * natural numbers
 *
 *  Note: recursive is not
 *  needed in this cause
 *  we can use formula:
 *  n(n+1) / 2
 *
 * @param n
 */
int sum(int n)
{
    if (n == 0)
        return 0;
    else
        return sum(n - 1) + n;
}

int sumNat(int n)
{
    return n * (n + 1) / 2 ;
}

/**
 * Calculate the factorial
 * with recursion
 * @param n - Number we want
 * the factorial value
 * @return
 */
int factorial(int n)
{
    if (n == 0)
    {
        return 1;
    }
    return factorial(n-1)*n;
}

/**
 * Calculate the factorial
 * with loop
 * @param n - Number we want
 * the factorial value
 * @return
 */
int factLoop(int n)
{
    int f=1;
    int i;
    for (i=1; i<=n; i++)
        f = f*i;

    return f;
}

/**
 * Return exponential of
 * two integers
 * @param m - Number to multiply
 * @param n - Time to multiply
 * @return
 */
int exponential(int m, int n)
{
    if (n == 0)
        return 1;
    return exponential(m, (n-1)) * m;
}

/**
 * Return exponential of
 * two integers (perf opti)
 * @param m - Number to multiply
 * @param n - Time to multiply
 * @return
 */
int exponentialOpti(int m, int n)
{
    if (n == 0)
        return 1;
    if (n%2 == 0)
        return exponentialOpti(m*m, n/2);
    else
        return m * exponentialOpti(m*m, (n-1)/2);
}


/**
 * Calculate result
 * of Taylor series
 * @param x
 * @param n
 * @return
 */
double e(int x, int n)
{
    static double p=1, f=1;
    double r;

    if (n == 0)
        return 1;
    r = e(x, n-1);
    p = p * x;
    f = f * n;
    return r + p / f;
}

/**
 * Resolve Taylor series
 * using iterative style
 * @param x
 * @param n
 * @return
 */
double e2(int x, int n)
{
    double s = 1; // Result
    int i;
    double num = 1; // Numerator
    double den = 1; // Denominator

    for (i=1; i <= n; i++)
    {
        num *= x;
        den *= i;
        s += num / den;
    }

    return s;
}

/**
 * Calculate result of
 * Taylor series using
 * Horner's rule (less multiplication)
 * @param x
 * @param n
 * @return
 */
double e3(int x, int n)
{
    static double s = 1;

    if (n <= 1)
    {
        return n;
    } else {
        s = 1 + x * s / n;
        return e3(x, n - 1);
    }
}

/**
 * Resolve fibonacci
 * using excessive recursion
 * @param n
 * @return
 */
int fibonacci(int n)
{
   static int s;

   if (n == 0)
       return 0;
   else if (n == 1)
       return 1;
   else
       return fibonacci(n - 2) + fibonacci(n - 1);
}

/**
 * Resolve fibonacci using
 * memoization to optimise
 * number of calls
 * @param n
 * @return
 */
int F[10];
int fiboMemo(int n)
{
    if (n <= 1)
    {
        F[n] = n;
        return n;
    } else {
        if (F[n - 2] == - 1) // If no value in array position
            F[n - 2] = fiboMemo( n - 2); // Store value (memo)
        if (F[n - 1] == - 1)
            F[n - 1] = fiboMemo( n - 1);
        return F[n - 2] + F[n - 1];
    }

}

/**
 * Resolve fibonacci
 * using iterative
 * @param n
 * @return
 */
int fibIterative(int n)
{
    int t0 = 0, t1 = 1, i, s;

    if (n <= 1)
        return n;

    for (i= 2; i <= n; i++)
    {
        s = t0 + t1;
        t0 = t1;
        t1 = s;
    }

    return s;
}

int main()
{
    int a = 5;
//    printf("Print before recursion:\n");
//    fun1(a);
//
//    printf("Print after recursion:\n");
//    fun2(a);
//
//    printf("Include static variables:\n");
//    printf("%d\n", fun3(a));
//
//    // Using recursion
//    int sumNatural = sum(7);
//    printf("%d\n", sumNatural);
//
//    // Using formula
//    int sumNatrl = sumNat(7);
//    printf("%d\n", sumNatrl);
//
//    // Factorial
//    int fact = factorial(5); // Recursion
//    printf("%d\n", fact);
//    int factL = factLoop(5); // Loop
//    printf("%d\n", factL);
//
//    // Exponential
//    printf("%d\n", exponential(2, 4));
//    printf("%d\n", exponentialOpti(5, 2));

//    // Taylor series recursive
//    printf("%lf\n", e(4, 15));
//    // Taylor series iterative
//    printf("%lf\n", e2(4, 15));
//    // Taylor series with Horner's rule
//    printf("%lf\n", e3(4, 15));


    // Fibonacci - Excessive recursion
    printf("%d\n", fibonacci(7));

    // Fibonacci - Memoize recursion
    // Init array for fiboMemo
    int i;
    for (i=0; i<10; i++)
        F[i] = -1;
    printf("%d\n", fiboMemo(7));

    // Fibonacci - Iterative
    printf("%d\n", fibIterative(7));

}