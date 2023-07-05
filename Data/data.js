var inOrderTraversal = function (root) {
  const res = [];
  function iter(node) {
    if (node != null) {
      iter(node.left);
      res.push(node.val);
      iter(node.right);
    }
  }
  iter(root);
  return res;
};
