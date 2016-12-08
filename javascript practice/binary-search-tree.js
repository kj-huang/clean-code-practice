function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BST.prototype.insert = function(value){
  if(value <= this.value){
    if(!this.left)
      this.left = new BST(value);
    else
      this.left.insert(value);
  }
  else{
    if(!this.right)
      this.right = new BST(value);
    else
      this.right.insert(value);
  }
};

BST.prototype.contain = function(value){
  if(value === this.value){
    return true;
  }
  else if(value > this.value){
    if(!this.right)
      return false;
    else
      return this.right.contain(value);
  }
  else if(value < this.value){
    if(!this.left)
      return false;
    else
      return this.left.contain(value);
  }
  
};

BST.prototype.depthFirstTraversal = function(iteratorFunc,order){
  if(order === 'pre-order') iteratorFunc(this.value);
  if(this.left)
    this.left.depthFirstTraversal(iteratorFunc,order);
  if(order === 'in-order') iteratorFunc(this.value);
  if(this.right)
    this.right.depthFirstTraversal(iteratorFunc,order);
  if(order === 'post-order') iteratorFunc(this.value);
};

BST.prototype.breadthFirstTraversal = function(iteratorFunc){
  var queue = [this];
  
  while(queue.length){
    var treeNode = queue.shift();
    iteratorFunc(treeNode);
    if(treeNode.left) queue.push(treeNode.left);
    if(treeNode.right) queue.push(treeNode.right);
  }
};


BST.prototype.getMinVal = function(iteratorFunc){
  var queue = [this];
  
  var min = this.value;
  while(queue.length){
    var treeNode = queue.shift();
    if(treeNode.value < min)
      min = treeNode.value;
    if(treeNode.left) queue.push(treeNode.left);
    if(treeNode.right) queue.push(treeNode.right);
  }
  return min;
  
  /*  teacher's answer
  if(this.left) return this.left.getMinVal();
  else  return this.value;
  */
  
  
};

BST.prototype.getMaxVal = function(){
   var queue = [this];
  
  var max = this.value;
  while(queue.length){
    var treeNode = queue.shift();
    if(treeNode.value > max)
      max = treeNode.value;
    if(treeNode.left) queue.push(treeNode.left);
    if(treeNode.right) queue.push(treeNode.right);
  }
  
  return max;
  
  /*  teacher's answer
  if(this.right) return this.right.getMinVal();
  else  return this.value;
  */
};