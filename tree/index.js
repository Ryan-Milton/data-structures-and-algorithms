'use strict';

const Node = require('./modules/Node.js');
const BinaryTree= require('./modules/BinaryTree.js');
const BinarySearchTree = require('./modules/BinarySearchTree.js');

let apples = new Node('Apples');
let bananas = new Node('Bananas');
let oranges = new Node('Oranges');
let cherries = new Node('Cherries')

let tree = new BinaryTree(apples);
apples.left = bananas;
apples.right = oranges;
bananas.left = cherries;

// console.log('PRE ORDER');
// tree.preOrder()
// console.log('IN ORDER');
// tree.inOrder()
// console.log('POST ORDER');
// tree.postOrder()

let ten = new Node(10);
let twenty = new Node(20);
let five = new Node(5);
let seven = new Node(7);

let binaryTree = new BinarySearchTree();

binaryTree.add(ten);
binaryTree.add(twenty);
// console.log(binaryTree.add(ten));
