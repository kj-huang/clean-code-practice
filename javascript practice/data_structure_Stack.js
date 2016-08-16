var start = new Date().getTime();

function Stack() {
    this._size = 0;
    this._storage = {};
}
 
Stack.prototype.push = function(data) {
    var size = ++this._size;
    this._storage[size] = data;
};
 
Stack.prototype.pop = function() {
    var size = this._size,
        deletedData;
 
    if (size) {
        deletedData = this._storage[size];
 
        delete this._storage[size];
        this._size--;
 
        return deletedData;
    }
};

S = new Stack();

S.push(1);
S.push(2);
S.push(6);
S.push(3);
S.push(4);
S.push(5);
document.getElementById("demo").innerHTML = S.pop() + document.getElementById("demo").innerHTML;
document.getElementById("demo").innerHTML =  document.getElementById("demo").innerHTML+ S.pop() ;



var end = new Date().getTime();
var time = end - start;
document.getElementById("time").innerHTML = time;