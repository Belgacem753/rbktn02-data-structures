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
  }else if(val < this.value && this.left){
    this.left.insert(val);
  } else if(val > this.value && this.right){
    this.right.insert(val);
  }
};

binaryTreeMethods.contains = function (target){
if (target === this.value){
  return true;

} else if (target !== this.value) {
  if (target < this.value && this.left ){
    return this.left.contains(target);
  }else if (target > this.value && this.right){
    return this.right.contains(target)
  }
}
return false
};

binaryTreeMethods.depthFirstLog = function (callBack){
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};






/*
 * Complexity: What is the time complexity of the above functions?
 */
