function LinkList (){
	this.value = 0;
	this.next = {};
}

var first = new LinkList();
first.value = 3;


var middle = new LinkList();
middle.value = 5;

first.next = middle;

var last = new LinkList();
last.value = 7;

middle.next = last;

PrintLine(first);


function PrintLine(node){
	while(node != null){
		console.log(node.value)
		node = node.next;
	}
}