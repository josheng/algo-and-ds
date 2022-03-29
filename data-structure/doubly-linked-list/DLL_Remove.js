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
    get(index){
        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
    }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode != null){
            foundNode.val = val;
            return true;
        }
        return false;
    }
    // insert: add new node to the index position
    insert(index, val){
      // if index is less then 0 or greather then length, return false
        if(index < 0 || index > this.length) return false;
        // if index is 0, just use unshift to add to beginner
        // !! get it to return true instead of the new list
        if(index === 0) return !!this.unshift(val);
        // similarly, if index is at the end then just use push
        if(index === this.length) return !!this.push(val);

        // init a new node
        var newNode = new Node(val);
        // find the node before the index position
        var beforeNode = this.get(index-1);
        // set the following node as a variable
        var afterNode = beforeNode.next;

        // set the node before index to now reference the new node
        // then get the new node to refernce the node before
        beforeNode.next = newNode, newNode.prev = beforeNode;
        // set the new node next to reference the node after index position
        // reference back to new node as well
        newNode.next = afterNode, afterNode.prev = newNode;
        // increment
        this.length++;
        // return true if ok
        return true;
      }
      // remove: delete the node from its index position
      remove(index){
        // index less then zero or greater then or equal to length, return undefined
        if(index < 0 || index >= this.length) return undefined;
        // if 0, just use shift
        if(index === 0) return this.shift();
        // if last item, just pop
        if(index === this.length -1) return this.pop();

        //retrieve the removed node using get
        var removedNode = this.get(index);
        // set beforenode to be the previous node of removed node
        var beforeNode = removedNode.prev;
        // set afternode to be the next node of removed node
        var afterNode = removedNode.next;
        // reference the next node to afternode instead
        beforeNode.next = afterNode;
        // same for afternode, reference to beforenode
        afterNode.prev = beforeNode;
        // sever the links
        removedNode.next = null;
        removedNode.prev = null;

        // decrement
        this.length--;
        // return the removed node
        return removedNode;
    }
}

var list = new DoublyLinkedList()
list.push("Harry")
list.push("Ron")
list.push("Hermione")
