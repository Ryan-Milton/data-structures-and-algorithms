'use strict';

const Node = require('./../modules/Node.js');
const BinaryTree = require('./../modules/BinaryTree.js');
const BinarySearchTree = require('./../modules/BinarySearchTree.js');

// -------- Node Module -----------

describe('Node module', () => {
  it('should create a new Node', () => {
    let node = new Node(5);
    expect(node.value).toEqual(5);
  });
});

// ------- Binary Tree Module ---------

describe('Binary Tree Testing', () => {
  let apples = new Node('Apples');
  let bananas = new Node('Bananas');
  let oranges = new Node('Oranges');
  let cherries = new Node('Cherries');
  let btree = new BinaryTree(apples);
  apples.left = bananas;
  apples.right = oranges;
  bananas.left = cherries;
  describe('Creating a Binary Tree', () => {
    it('should create a new Binary Tree', () => {
      expect(btree.root.value).toEqual('Apples');
    });
  });
  describe('Getting the Pre Order of the Tree', () => {
    it('should return a pre order of the tree', () => {
      expect(btree.preOrder()).toBeDefined();
    });
  });
  xdescribe('Getting the In Order of the Tree', () => {
    it('should return the tree in order', () => {
      expect(btree.inOrder()).toBeDefined();
    });
  });
  xdescribe('Getting the Post Order of the Tree', () => {
    it('should return a post order of the tree', () => {
      expect(btree.postOrder()).toBeDefined();
    });
  });
  describe('Getting the Max Value of the Tree', () => {
    it('should return the max value of the input tree', () => {
      expect(btree.findMax()).toBe('Oranges');
    });
  });
});

// ------------ Binary Search Tree ---------------

xdescribe('Binary Search Tree Testing', () => {
  let bstree = new BinarySearchTree();
  describe('Adding onto the Binary Search Tree', () => {
    bstree.add(10);
    describe('Adding one', () => {
      test('The root should be 10', () => {
        expect(bstree.root.value).toEqual(10);
      });
    });
    bstree.add(5);
    describe('Adding another value to the BSTREE', () => {
      test('The tree should have value to the left now', () => {
        expect(bstree.root.left.value).toEqual(5);
      });
    });
    bstree.add(20);
    describe('Adding another value to the BSTREE', () => {
      test('The tree should have value to the right now', () => {
        expect(bstree.root.right.value).toEqual(20);
      });
    });
    bstree.add(7);
    describe('Adding another value to the BSTREE', () => {
      test('The tree should have value to the right of the left now', () => {
        expect(bstree.root.left.right.value).toEqual(7);
      });
    });
  });
  bstree.add(10);
  bstree.add(5);
  bstree.add(20);
  bstree.add(7);
  describe('Testing the Search method of the Binary Search Tree', () => {
    describe('Searching for the value of 10', () => {
      it('should be 10', () => {
        let tenSearch = bstree.search(10);
        expect(tenSearch.value).toEqual(10);
      });
    });
    describe('Searching for the value of 5', () => {
      it('should be 5', () => {
        let fiveSearch = bstree.search(5);
        expect(fiveSearch.value).toEqual(5);
      });
    });
    describe('Searching for the value of 20', () => {
      it('should be 20', () => {
        let twentySearch = bstree.search(20);
        expect(twentySearch.value).toEqual(20);
      });
    });
    describe('Searching for the value of 7', () => {
      it('should be 7', () => {
        let sevenSearch = bstree.search(7);
        expect(sevenSearch.value).toEqual(7);
      });
    });
  });
});