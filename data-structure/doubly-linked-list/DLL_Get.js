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
    shift(){
        if(this.length === 0) return undefined;
        var oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    // get: access a node at the "index" location
    get(index){
      // return null if index is less then 0 and greater or equal to length
        if(index < 0 || index >= this.length) return null;
        var count, current;
        // if index is closer to the first half, start from head
        if(index <= this.length/2){
          // starting from head, so set count to be 0 an save head as current
            count = 0;
            current = this.head;
            // loop while count is not index
            while(count !== index){
              // loop to the next node
                current = current.next;
                // increment the count
                count++;
            }
        } else {
          // start from tail
          // set count to be from the back
            count = this.length - 1;
            // set current to be tail since it is from the back
            current = this.tail;
            // loop while count is not index
            while(count !== index){
              // travel backwards via prev and save the node
                current = current.prev;
                // decrement the count
                count--;
            }
        }
        // return the found node.
        return current;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
