var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value)
    if(!this.tail){
      this.head = newNode
      this.tail = newNode
    }
    else {
      this.tail.next = newNode
      this.tail = newNode
    }
  };

  list.removeHead = function() {
    if (this.head){
      var remNode = this.head
      this.head = remNode.next;
      return remNode.value;
    }
  };

  list.contains = function(target) {
    while (this.head){
      if(target === this.head.value){
        return true
      }
      this.head = this.head.next;
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