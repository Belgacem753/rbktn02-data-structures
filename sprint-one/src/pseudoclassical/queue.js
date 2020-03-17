var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._end = 0;
  this._start = 0;

  };



  Queue.prototype.enqueue = function(value) {
    this._end ++;
    this[this._end] = value;
    return value

  };

  Queue.prototype.dequeue = function() {
   if (this._start < this._end){
    this._start++
    var tem = this[this._start]
    delete this[this._start];
    return tem;
   }
    this._end = 0
    this._start = 0
  };

  Queue.prototype.size = function() {
    return  this._end - this._start;
  };




