<p align="center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Ruppert_lfs.svg/320px-Ruppert_lfs.svg.png" alt="Logo" width="320" height="207">
</p>

<h3 align="center">Dalgo</h3>

<p align="center">

<br />
<br />
</p>
<p align="center">
    <br />
    <br />
    ·
    <a href="#description">Description</a>
    ·
    <a href="#timeline">Timeline</a>
    ·
</p>

---

#   Description

Learn algorithms and data structures through about 50 hours of classes. With a cool side effect of working in C and C++

---

#   Documentation

I write a personal documentation during this course in order to keep the maximum of knowledge accessible in an 
instant afterwards. This documentation is public and can be consulted 

[Link to documentation](https://app.gitbook.com/@nicode/s/c-c/)

---


#   Data Structures 

INDEX


1.  Physical data structure  
    1.  Array  
    2.  Linked List  
2.  Logical data structure  
    1.  Linear data structure  
        1.  Stack
        2.  Queues
    2.  Non-linear data structure
        1.  Trees
        2.  Graph
    3.  Tabular data structure
        1.  Hash table

##  1.  Physical data structure  
### 1.1 Array  
*   Fix size, static   
*   Can be created in stack an in heap  
*   Use when you know the length of the list    
### 1.2 Linked List  
*   Variable length  
*   Always created in heap with head pointer (starting pointer) in a stack  
##  2.  Logical data structure  
*   We always use physical data structure to implement logical data structure  
### 2.1 Linear data structure    
#### 2.1.1  Stack  
*   Last in first out  
#### 2.1.2  Queues  
*   First in first out  
### 2.2 Non-linear data structure  
*   Nodes and links to nodes  
#### 2.2.1  Trees  
#### 2.2.2  Graph  
### 2.3 Tabular data structure  
#### 2.3.1  Hash Table  

---

#   ADT 

##  Definition
*   A datatype is defined by:
    *   Representation of data
    *   Operation on data
*   Taking an example of an integer of 2 bytes, so 16bits:
    *   Representation:
        *   First bit is the sign bit (positive/negative)
        *   Other 15bits are the value (any number)
        *   This two parts is the representation of integer in memory
    *   Operations:
        *   +, -, *, /, %, ++, --
*   Abstract datatype
    *   Abstract means hiding internal system
    *   We can use operations without knowing internal details
    *   Related to OOP
    *   Taking an example list written on a paper sheet 8,3,9,4,6,10,12 :
        *   What I need for representing list data in a program:
            *   Space for storing element
            *   Capacity 
            *   Size 
        *   So we can use to represent our list:
            *   Array
            *   Linked List
        *   Operations:
            *   Add(x)
            *   Remove(x)
            *   Search(x)
            *   ...
    *   So data representation + operations = datatype
    *   If wde define a class for our list than it became abstract datatype as we don't know internal details
## Main List operations
* ADD: add (element) / append (element)
* ADD TO INDEX: add (index, element) / insert (indx, ele)
* REMOVE AT INDEX: remove(index)
* SET AT INDEX: set(indx, ele) / replace (idx, ele)
* INDEX: get(index)
* SEARCH: search(key) / contains(key) - Result of this operation is an index
* SORT: sort(list)
    
--- 

#   Time and space complexity
##  Time complexity
*   You can evaluate time complexity based on: 
    *   Working analysis of tasks
    *   Code, ex: 
### Array example
*   n elements - n means "some numbers of elements"
*   Time taken is n, **O(n)** is the good notation
*   A basic **for loop is, often, O(n)** complexity cause you loop during time of some numbers of elements, so n
    elements.
*   **nested for loop is O(n²)** : you loop on n elements for n elements (n*n elements) 
*   When an operation is starting at middle of a list than always divide by two on following operations, complexity 
    is **log2(n)** 
    *   Examples:  
    
    ```c 
    for (i=n); i > 1; i = i/2) ...
    ```  
    N.B: for loops are usually used for increment by one, best practise is so to use while loop for this kind of 
    operations
    ```c
    i = n 
    while(i > 1)
        ...
    i = i / 2;
    ```
    *  Counter is always divided by two.
### Linked list
*   Same as array
### Matrix
*   Operation on a columns or rows only **O(n)**
*   Operation on matrix **O(n²)**
### Binary tree
*   Time along the height of a tree **O(log n)**
*   Process all elements **O(n)**

##  Space complexity
*   Arrays -> space **n**
*   List with a pointer -> space **2n** (pointer + value)

---


#   Arrays
##  On-Fly Notes

* Simple variables : **Scalar** Array variables: **Vector**
* For an array memory is allocated contiguously, example array of 5 elements: address 200/201 (first) 202/203 
  (second), ...
* When an array is initialized without attributing values, the space for these values is considered as **garbage 
  values**
* In C language the size of an array declared at compile time, array size is so a constant value
* In C++ size of an array cen be decided at running time
* Declare an array in heap memory:
  * Declare an array (a vector variable stored in stack memory) 
    * -> int A[5];
  * Declare a pointer (a variable stored in stack memory) 
    * -> int *P;
  * Create a new array in heap memory with pointer pointing first cell's address 
    * C++ -> P = new int[5];
    * C -> P = (int *)malloc(5*sizeof(int));
  * Deallocate after using:
    * C++ -> delete[]P;
    * C -> free(p);
  * 


---

#   Timeline
>>>>>>> Essentials

> My developer timeline

![Timeline](https://github.com/nicode-io/nicode-io/blob/master/images/Timeline.png)


