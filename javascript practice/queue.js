function Queue(){
  this.head = null;
  this.tail = null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

Queue.prototype.enqueue = function(value){
    var newNode = new Node(value);

    if(!this.head) this.head = newNode;
    else this.tail.next = newNode;

    this.tail = newNode;
};

Queue.prototype.dequeue = function(){
    if(!this.head) return false;
    
    if(this.head === this.tail) this.tail = null;
    
    var value = this.head.value;
    this.head = this.head.next;
};