var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var obj = {};
obj._end = 0;
obj._start = 0;
_.extend(obj, queueMethods);
return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this._end ++;
  this[this._end] = value;
  return value

};

queueMethods.dequeue = function() {
 if (this._start < this._end){
  this._start++
  var tem = this[this._start]
  delete this[this._start];
  return tem;
 }
 this._end = 0
 this._start = 0
};

queueMethods.size = function() {
  return  this._end - this._start;
};
