// node class, should contain the value and pointer to the next node
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// sinngly linked list class
class SinglyLinkedList{
  // no need to take in variable
    constructor(){
      // define the head, tail and length of the list
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // push: insert value into the list
    push(val){
      // we create a new node and store the value
        var newNode = new Node(val);
        // if the head is empty, set the head as the new node, and set the tail as the new node too
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
          // set the current tail node to point towards the new node
            this.tail.next = newNode;
          // the new node becomes the new tail
            this.tail = newNode;
        }
        // increment the length of the list
        this.length++;
        // return the linked list
        return this;
    }
}

var list = new SinglyLinkedList()
// list.push("HELLO")
// list.push("GOODBYE")
