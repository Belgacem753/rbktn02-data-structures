var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    size ++;
    storage[size] = value;
    return value;
  };

  someInstance.pop = function() {
    var temp = storage[size];
    if(size){
      delete storage[size];
      size --;
      return temp;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
