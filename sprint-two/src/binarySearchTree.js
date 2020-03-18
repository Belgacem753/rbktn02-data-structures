var BinarySearchTree = function(value) {
    var binaryTree = {};
    binaryTree.value = value;
    binaryTree.left = null;
    binaryTree.right = null;
    _.extend(binaryTree, binaryTreeMethods);
    return binaryTree;
 };

var binaryTreeMethods = {};

binaryTreeMethods.insert = function (val){
  var child = BinarySearchTree(val);
  if(val < this.value && !this.left){
    this.left = child
  } else if(val > this.value && !this.right){
    this.right = child
  }else if(val < this.value && !!this.left){
    this.left.insert(val);
  } else if(val > this.value && !!this.right){
    this.right.insert(val);
  }
};

binaryTreeMethods.contains = function (target){

};

binaryTreeMethods.depthFirstLog = function (){

};






/*
 * Complexity: What is the time complexity of the above functions?
 */
