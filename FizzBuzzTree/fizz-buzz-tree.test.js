'use strict';

const Node = require('../tree/modules/Node.js');
const BinaryTree = require('../tree/modules/BinaryTree.js');
const FizzBuzzTree = require('./fizz-buzz-tree.js');

describe('Testing FizzBuzzTree', () => {

  let seven = new Node(7);
  let twenty = new Node(20);
  let one = new Node(1);
  let five = new Node(5);
  let nine = new Node(9);
  let fiftyone = new Node(51);
  let fifteen = new Node(15);

  let BT = new BinaryTree(seven);
  seven.left = twenty;
  seven.right = fiftyone;
  twenty.left = one;
  twenty.right = nine;
  one.right = five;
  fiftyone.left = fifteen;

  describe('Binary Tree Creation', () => {
    it('should create a Binary Tree', () => {
      expect(BT.root.value).toEqual(7);
    });
  });

  let FBT = new FizzBuzzTree(BT);

  describe('Using the FizzBuzzTree function on a tree', () => {
    it('should not modify the root\'s value', () => {
      expect(BT.root.value).toEqual(7);
    });
    it('should modify root.left\'s value', () => {
      expect(BT.root.left.value).toBe('Buzz');
    });
    it('should not modify root.left.left\'s value', () => {
      expect(BT.root.left.left.value).toEqual(1);
    });
    it('should modify root.left.right\'s value', () => {
      expect(BT.root.left.right.value).toBe('Fizz');
    });
    it('should modify root.left.left.right\'s value', () => {
      expect(BT.root.left.left.right.value).toBe('Buzz');
    });
    it('should modify root.right\'s value', () => {
      expect(BT.root.right.value).toBe('Fizz');
    });
    it('should modify root.right.left\'s value', () => {
      expect(BT.root.right.left.value).toBe('FizzBuzz');
    });
  });
});