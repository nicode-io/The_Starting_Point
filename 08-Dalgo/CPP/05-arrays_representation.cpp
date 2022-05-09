#include <cstdio>

// Arrays Initialisation - C & C++
int A[5]; // A ? ? ? ? ? - Garbage values
int B[5] = {2, 4, 6, 8, 10}; // A 2 4 6 8 10
int C[5] = {2, 4}; // A 2 4 0 0 0
int D[5] = {0}; // A 0 0 0 0 0
int E[] = {2, 4, 6, 8, 10, 12}; // A 2 4 6 8 10 12


int main()
{
// Access Arrays Elements
    printf("%d", A[0]); // Most used way with index
    printf("%d", 2[A]); // Another way with index
    printf("%d", *(A+2)); // Access with pointer
    // For Loop
    int i;
    for(i=0; i < 5; i++) {
        printf("%d \n", &A[i]); // print addresses
    }
}