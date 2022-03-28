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
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    // shift: remove the head node and set the next node as the new head
    shift(){
      // return undefined if list is empty
        if(!this.head) return undefined;
        // set current (old) head
        var currentHead = this.head;
        // set new head as next
        this.head = currentHead.next;
        // decrement the length
        this.length--;
        // cut off the tail reference if node is shifted till empty
        if(this.length === 0){
            this.tail = null;
        }
        // return the value of current/old head
        return currentHead;
    }
}


var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("!")
