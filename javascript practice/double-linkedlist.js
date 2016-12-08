function LinkedList(){
	this.head = null;
	this.tail = null;
}

function Node(value,next,prevoius){
	this.value = value;
	this.next = next;
	this.previous = prevoius;
}

LinkedList.prototype.addToHead = function(value){
	var newNode = new Node(value, this.head, null);
	if(this.head)
		this.head.prevoius = newNode;
	else
		this.tail = newNode;
	
	this.head = newNode;
};

LinkedList.prototype.addToTail = function(value){
  var newNode = new Node(value,  null, this.tail);
  if(this.tail)
    this.tail.next = newNode;
  else
		this.head = newNode;
	
	this.tail = newNode;
};

LinkedList.prototype.removeHead = function(){
	if(!this.head)
		return null;
	
	var value = this.head.value;
	this.head = this.head.next;
	
	if(this.head) 
	  this.head.prevoius = null;
	 else //mean that no any item in list
	  this.tail = null;
	  
	return value;
};

LinkedList.prototype.removeTail = function(){
	if(!this.tail)
		return null;
	
	var value = this.tail.value;
	this.tail = this.tail.prevoius;
	
	if(this.tail) 
	  this.tail.next = null;
	 else //mean that no any item in list
	  this.head = null;
	  
	return value;
};

LinkedList.prototype.search = function(searchValue){
  var currentNode = this.head; // set start point
    
  while(currentNode){
    if(currentNode.value === searchValue)
      return currentNode.value;
    currentNode = currentNode.next;
  }
  
  return null;
};

LinkedList.prototype.indexOf = function(value){
  var currentNode = this.head; // set start point
  var index = 0,
      indexs = [];  
  while(currentNode){
    if(currentNode.value === value)
      indexs.push(index);
      
    currentNode = currentNode.next;
    index++;
  }
  
  return indexs;
};