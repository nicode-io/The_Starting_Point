//#include <stdio.h>
//
//// Structure - 4bytes on init
//struct Rectangle
//{
//    int length; // 2bytes (2bytes for an int)
//    int breadth; // 2bytes
//};
//
//// Complex numbers structure - 4bytes on init
//struct Complex
//{
//    int real; // 2bytes
//    int img; // 2bytes
//};
//
//// People structure - 47bytes on init
//struct People
//{
//    int id; // 2bytes
//    char name[25]; // 25bytes (1byte for 1 char)
//    char country[20]; // 20bytes
//};
//
//// Game card structure - 6bytes on init
//struct Card
//{
//    int face; // 2bytes
//    int shape; // 2bytes
//    int color; // 2bytes
//};
//
//int main() {
//    // Create an array and declare values
//    int ar1[5] = {2, 9, 6, 8, 10};
//
//    // For loop
//    int i;
//    for (i = 0; i < 5; i++) {
//        printf("%d\n", ar1[i]);
//    }
//
//    // Initialize structure
//    struct Rectangle rect = {10, 5}; // 4bytes on memory
//    // Modify values of structure element
//    rect.length = 15;
//    rect.breadth = 10;
//    // Use calculation with structure
//    printf("Area of Rectangle is %d\n", rect.length * rect.breadth);
//
//    // Initialize multiple structures
//    struct Card deck[2] = {{0, 1, 1}, {2, 0, 0}};
//    // Print nested structures' value
//    printf("Card shape: %d\n", deck[0].shape);
//}
//
//
