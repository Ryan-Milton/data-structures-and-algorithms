'use strict';

const Node = require('./Node.js');

class BinarySearchTree{
  constructor() {
    this.root = null;
  }
  
  add(data) {
    const node = this.root;
    if(node === null) {
      this.root = new Node(data);
      console.log(this.root);
      return;
    } else {
      function searchTree(node) {
        if(data < node.value) {
          if(node.left === null) {
            node.left = new Node(data)
            console.log(node.left);
            return;
          } else if(node.left !== null) {
            return searchTree(node.left);
          } else if(data > node.data) {
            if(node.right === null) {
              node.right = new Node(data)
              console.log(node.right);
              return;
            } else if(node.right !== null) {
              return searchTree(node.right);
            }
          } else {
            return null;
          }
        }
        searchTree(node);
      }
    }
  }
  
  search(value) {
    let searchValue = value.toLowerCase();
  }
  
}

module.exports = BinarySearchTree;