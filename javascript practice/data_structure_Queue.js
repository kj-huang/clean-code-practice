var start = new Date().getTime();

function Queue() {
    this._oldIndex = 0;
    this._newIndex = 0;
    this._storage = {};
}
 
Queue.prototype.enqueue = function(data) {
    var newIndex = this._newIndex;
    this._storage[newIndex] = data;
    this._newIndex++;
};
 
Queue.prototype.dequeue = function() {
    var newIndex = this._newIndex,
        oldIndex = this._oldIndex,
        deletedData;
 
    if (newIndex!=oldIndex) {
        deletedData = this._storage[oldIndex];
         
        delete this._storage[oldIndex];
        this._oldIndex++;
 
        return deletedData;
    }
};

var Q = new Queue();

Q.enqueue(1);
Q.enqueue(2);
Q.enqueue(3);
document.getElementById("demo").innerHTML = Q.dequeue() + document.getElementById("demo").innerHTML;
document.getElementById("demo").innerHTML =  document.getElementById("demo").innerHTML+ Q.dequeue() ;



var end = new Date().getTime();
var time = end - start;
document.getElementById("time").innerHTML = time;