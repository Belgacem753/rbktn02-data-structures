var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  obj._size = 0;
  return obj;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._size ++;
  this[this._size] = value;
  return value;
};

stackMethods.pop = function() {
  var temp = this[this._size];
  if(this._size){
    delete this[this._size];
    this._size --;
    return temp;
  }
};

stackMethods.size = function() {
  return this._size;
};
