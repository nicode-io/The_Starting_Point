//#include <stdio.h>
//#include <stdlib.h> // Needed for malloc
//
//
//struct Rectangle
//{
//    int length;
//    int breadth;
//};
//
//int main() {
//
//    // Pointer in stack frame
//    // Variable - int 2bytes
//    int a = 10;
//    // Pointer 2bytes
//    int *p;
//    // Init pointer address to a
//    p = &a;
//    // Call pointer value
//    printf("%d\n", *p);
//
//
//    // Pointer in heap memory
//    // Pointer
//    int *p2;
//    // Heap memory allocation and link to pointer
//    p2=(int *)malloc(5 * sizeof(int));
//    // C++: p = new int[5];
//
//    // Assign value in pointer
//    p2[0] = 20;
//    // Call pointer value
//    printf("%d\n", p2[0]);
//
//
//    // Pointer to a structure
//    struct Rectangle r ={10, 5};
//    // Create pointer
//    struct Rectangle *p3 = &r;// 2bytes (whatever the pointer points, always the size of an int)
//    // Attribute value to pointer's target
//    (*p3).length = 10;
//    p3->breadth = 25;
//
//
//    // Dynamic object
//    struct Rectangle *p4;
//    // Assign heap memory and link to pointer
//    p4=(struct Rectangle *)malloc(sizeof(struct Rectangle));
//    // Assign pointer's target some values
//    p4->length = 42;
//    p4->breadth = 42;
//    printf("%d\n", p4->length);
//
//
//};
