var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var result = false
  function verif (tree){
    if(tree.value === target ){
      result = true
    }
    else {
      for(var i=0; i<tree.children.length; i++){
       verif(tree.children[i])
      }
    }
  }
  verif(this)
  return result
};


