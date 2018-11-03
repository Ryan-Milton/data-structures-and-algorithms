/* eslint-disable no-inner-declarations */
'use strict';

const Node = require('./Node.js');

class BinarySearchTree{
  constructor() {
    this.root = null;
  }
  
  add(data) {
    const node = this.root;
    if(!node) {
      this.root = new Node(data);
      return;
    } else {
      function searchTree(node) {
        if(data < node.value) {
          if(!node.left) {
            node.left = new Node(data);
            return;
          } else if(node.left) {
            return searchTree(node.left);
          }
        } else if(data > node.value) {
          if(!node.right) {
            node.right = new Node(data);
            return;
          } else if(node.right) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      }
      return searchTree(node);
    }
  }
  
  
  search(data) {
    let current = this.root;
    while(current.value !== data) {
      if(data < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
      if(!current) {
        return null;
      }
    }
    console.log(current);
    return current;
  }
  
}

module.exports = BinarySearchTree;