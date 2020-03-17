var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0 ;
  var end = 0

  // Implement the methods below

  someInstance.enqueue = function(value) {
    end ++;
    storage[end] = value;
    return value

  };

  someInstance.dequeue = function() {
   if (start < end){
    start++
    var tem = storage [start]
    delete storage [start];
    return tem;
   }
   end = 0
   start = 0
  };

  someInstance.size = function() {
    return  end - start;
  };

  return someInstance;
};
