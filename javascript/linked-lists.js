//a linked list is a data structure that gives a sequence of nodes that points to the next one
// - it is a chain of nodes
// - value: the data stored in that node
// - next: the reference or pointer towards the next node (usually null)

//linked lists stores data anywhere but is connected by pointers
// - arrays store items next to each other in memory
// - arrays are great for caring about indexes
// - linked lists are great when you care about insertion / removal

//js doesnt have pointers but you can build one through references which behave the same way

//there are multiple ways to create linked lists:
// - this is classic OOP style constructor + class
// - useful for scalability, predictability, reusability
// - you CAN make linked lists in other ways => object literals, array pairs, factory functions etc.

class Node {
  //here we define class called Node
  // - node represents one link in the linked list
  constructor(value) {
    //here we are getting the data given to us (could be anything) and storing it inside our node
    this.value = value;
    //this (reference to object being created) assigns the input value as value
    this.next = null;
    //this (reference to object being created) assigns null to our pointer (next)
    // - next will eventually point to next node in the chain
  }
}

const node = new Node(10);
//here we have our new node instance with value of 10

class LinkedList {
  //here we define class LinkedList which is our manager for our chain of nodes
  // - it positions our nodes and how to manipulate them
  constructor() {
    this.head = null;
    //this in reference to our new object being created sets head to null
    //head is our first node in our list
    // - this is a list with no nodes
  }

  append(value) {
    //here we add an instance method to our LinkedList class
    // - this will add a new value to the end of the list
    // - append (means to add one)
    const newNode = new Node(value);
    //this creates our new node when append(value) is called
    //newNode will look like {value, next: null}
    // - creates new node but does not add it to linked list

    if (!this.head) {
      this.head = newNode;
      return;
      //this if statement checks condition:
      //if list is empty => set head to new node
    }

    let current = this.head;
    //creates variable current at the first node (heads)
    while (current.next) {
      current = current.next;
      //loop condition:
      //while there is a next node => move current node forward one node at a time
      //end state:
      //when current.next is null and current is on last node of the list
    }

    current.next = newNode;
    //attaches new node at the end of the list
  }
}
