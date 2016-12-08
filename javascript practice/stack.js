function Stack(){
	this.head = null;
}

function Node(value, next){
  this.value = value;
  this.next = next;
}

Stack.prototype.push = function(value){
  var newNode = new Node(value,this.head);

  this.head = newNode;
};

Stack.prototype.pop = function(){
  if(!this.head)
    return null;
  
  var value = this.head.value;
  this.head = this.head.next;
  
  return value;
};