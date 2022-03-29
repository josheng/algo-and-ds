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
    // pop: remove node from end of list
    pop(){
      // return undefined if list is empty
        if(!this.head) return undefined;
        // save the old tail as popped node
        var poppedNode = this.tail;
        // if list only have 1 node, just set head and tail to null
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else {
          // set current tail to reference old tail previous node
            this.tail = poppedNode.prev;
            // sever the link between new tail to old tail
            this.tail.next = null;
            // the prev link from old tail too
            poppedNode.prev = null;
        }
        // decrement
        this.length--;
        // return the popped node
        return poppedNode;
    }
}
