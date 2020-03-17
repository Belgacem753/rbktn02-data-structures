class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this._size = 0
  }
  push(value) {
    this._size ++;
    this[this._size] = value;
    return value;
  };
  pop() {
    var temp = this[this._size];
    if(this._size){
      delete this[this._size];
      this._size --;
      return temp;
    }
  };
  size() {
    return this._size;
  };

}