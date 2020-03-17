class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  this._end = 0;
  this._start = 0;
  }
  enqueue (value) {
    this._end ++;
    this[this._end] = value;
    return value

  };

  dequeue () {
   if (this._start < this._end){
    this._start++
    var tem = this[this._start]
    delete this[this._start];
    return tem;
   }
    this._end = 0
    this._start = 0
  };

  size() {
    return  this._end - this._start;
  };


}
