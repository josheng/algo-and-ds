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
    push(val){
        var newNode = new Node(val);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var poppedNode = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    // shift: remove node from the beginning of the list
    shift(){
      // similar to pop
      // return undefined if list is empty
        if(this.length === 0) return undefined;
        // save old head as a var
        var oldHead = this.head;
        // if the list only have 1 node, just sever both head and tail link
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
          // set new head to be the old head next node
            this.head = oldHead.next;
            // the new head prev should be null
            this.head.prev = null;
            // sever the old head next link
            oldHead.next = null;
        }
        // decrement
        this.length--;
        // return the shifted node
        return oldHead;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
