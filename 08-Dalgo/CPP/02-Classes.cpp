//#include <iostream>
//
//using namespace std;
//
//// Defining class blueprint
//class Rectangle
//{
//private:
//    int length;
//    int breadth;
//
//public:
//    // Constructors
//    Rectangle()
//    {
//        length = 20;
//        breadth = 10;
//    }
//
//    Rectangle(int l, int b);
//
//
//    // Facilitators
//    int area() const;
//
//    int perimeter() const;
//
//
//    // Accessor / getter
//    int getLength() const
//    {
//        return length;
//    }
//
//    int getBreadth() const
//    {
//        return breadth;
//    }
//
//
//    // Setter
//    void setLength(int l)
//    {
//        length = l;
//    }
//
//    void setBreadth(int b)
//    {
//        breadth = b;
//    }
//
//    // Destructor
//    // ~Rectangle();
//};
//
//
//// Functions logic
//Rectangle::Rectangle(int l, int b)
//{
//    length = l;
//    breadth = b;
//}
//
//int Rectangle::area() const
//{
//    return length * breadth;
//}
//
//int Rectangle::perimeter() const
//{
//    return 2 * (length + breadth);
//}
//
////Rectangle::~Rectangle()
////{
////
////}
//
//int main()
//{
//    // Class instantiation
//    Rectangle r(10, 5);
//
//    cout << r.area();
//    cout << r.perimeter();
//    r.setBreadth(20);
//    r.setLength(40);
//    cout << r.getBreadth();
//    cout << r.getLength();
//
//}
//
