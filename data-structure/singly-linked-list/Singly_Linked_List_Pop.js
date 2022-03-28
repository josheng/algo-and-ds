class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    // pop: remove last node and set the node before last as the new tail
    pop(){
      // if no head node, return undefined
        if(!this.head) return undefined;
        // set the current node as head
        var current = this.head;
        // set the new tail as current
        // this is such that if there is no next, then the current node will be the new tail
        var newTail = current;
        // loop if there is a next node
        while(current.next){
          // update newTail to be the current
            newTail = current;
            // move current to the next node
            current = current.next;
        }
        // now we set the tail as the new tail
        this.tail = newTail;
        // cut off the reference to the old tail
        this.tail.next = null;
        // decrement the length
        this.length--;
        // if pop off everything, then have to make sure the head is null too.
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        // return the value that was removed
        return current;

    }
}


var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
