'use strict';

const Node = require('./modules/Node.js');
const BinaryTree= require('./modules/BinaryTree.js');
const BinarySearchTree = require('./modules/BinarySearchTree.js');

let apples = new Node('Apples');
let bananas = new Node('Bananas');
let oranges = new Node('Oranges');
let cherries = new Node('Cherries');

let tree = new BinaryTree(apples);
apples.left = bananas;
apples.right = oranges;
bananas.left = cherries;

console.log('PRE ORDER');
tree.preOrder();
console.log('IN ORDER');
tree.inOrder();
console.log('POST ORDER');
tree.postOrder();

let binaryTree = new BinarySearchTree();

binaryTree.add(10);
binaryTree.add(5);
binaryTree.add(20);
binaryTree.add(7);
console.log(binaryTree);
console.log(binaryTree.root.left);
binaryTree.search(20);
// console.log(binaryTree.add(ten));
