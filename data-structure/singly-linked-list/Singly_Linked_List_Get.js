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
    shift(){
        if(!this.head) return undefined;
        var currentHead = this.head;
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    // get: retrive the node at the "index" given
    get(index){
      // return null if index is less then 0 or more then the length of the list
        if(index < 0 || index >= this.length) return null;
        // init a counter
        var counter = 0;
        // set current as the head, starting as 0
        var current = this.head;
        // if counter is not index
        while(counter !== index){
          // move to the next node
            current = current.next;
            // increment counter
            counter++;
        }
        // if counter === indexm return the node found
        return current;
    }
}

var list = new SinglyLinkedList()

list.push("HELLO")
list.push("GOODBYE")
list.push("!")
list.push("<3")
list.push(":)")
