var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var temp = Node (value);
    if (!this.head){
      this.head = temp;
      this.tail = temp;
    } else {
      this.tail.next = temp;
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    var rem = this.head

    if (this.head){
      this.head = rem.next
      return rem.value;
    }
    else if (!this.head.next){
      this.head = null;
      this.tail = null;
      return rem.value;
    }
  };

  list.contains = function(target) {
    var con = this.head
    while (con){
      if (target !== con.value){
        con = con.next
      } else if (target === con.value)
      return true;

    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
