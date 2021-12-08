//#include <printf.h>
//#include <stdlib.h>
//
//// Function declaration
//int add(int a, int b) // This line is prototype or signature
//// and params are called formal parameters
//{
//    // Following lines are declaration part
//    int c;
//    c = a + b;
//    return(c);
//}
//
//void swapByValue(int x, int y)
//{
//    int temp;
//    temp = x;
//    x = y;
//    y = temp;
//}
//
//void swapByAddress(int *x, int *y)
//{
//    int temp;
//    temp = *x;
//    *x = *y;
//    *y = temp;
//}
//
//void fun(int A[], int n)
//{
//    int i;
//    for(i = 0; i < n; i++)
//    {
//        printf("%d\n", A[i]);
//    }
//}
//
//int * returnArray(int n)
//{
//    int *P;
//    P=(int *)malloc(n*sizeof(int));
//    return(P);
//}
//
////// Structure - 4bytes on init
//struct Rectangle
//{
//    int length; // 2bytes (2bytes for an int)
//    int breadth; // 2bytes
//};
//void changeLength(struct Rectangle *p, int l)
//{
//    p->length = l;
//}
//
//int main ()
//{
//    int x, y, z;
//    // Function call
//    x = 10;
//    y = 20;
//    z = add(x ,y); // params are called actual parameters
//    printf("sum is equal to %d\n", z);
//
//    int a, b;
//    a = 10;
//    b = 20;
//
//    swapByValue(a, b); // actual params not modified
//    printf("SwapByValue: %d %d\n", a, b);
//
//    swapByAddress(&a, &b); // actual params are modified
//    printf("SwapByAddress: %d %d\n", a, b);
//
//
//    // Send array as parameters
//    int A[5]={2, 4, 6, 8, 10};
//    fun(A,5);
//
//
//    // Returns array, pointers to array
//    // in heap memory to be precise
//    int *Array;
//    Array = returnArray(5);
//
//
//    // Send structure to function - call by address
//    struct Rectangle rect = {10, 5};
//    printf("Length: %d\n", rect.length);
//    changeLength(&rect, 40);
//    printf("Length: %d\n", rect.length);
//
//
//}
//
//
