class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // push: add a node at the end of the list
    push(val){
      // create a new node and set the value
        var newNode = new Node(val);
        // if empty list, set new node as head and tail
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
          // set new node to be the next node of tail
            this.tail.next = newNode;
            // set a link to the previous node
            newNode.prev = this.tail;
            // set the new tail to be the new node
            this.tail = newNode;
        }
        // increment
        this.length++;
        // return the list
        return this;
    }
}
