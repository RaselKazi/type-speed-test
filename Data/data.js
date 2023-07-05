var buildTree = function (preOrder, inOrder) {
  const n = preOrder.length;
  if (n <= 0) return null;

  const root = new TreeNode(preOrder[0]);
  const i = preOrder.indexOf(preOrder[0]);
  root.left = buildTree(preOrder.slice(1, i + 1), preOrder.slice(0, i));
  root.right = buildTree(preOrder.slice(i + 1, n), preOrder.slice(i + 1, n));
  return root;
};
