'use strict';

class Node{
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor(node) {
    this.head = node.value;
  }

  insert(value) {
    console.log('I\'m adding a new Node to the List and becoming the HEAD!');
    let newHead = new LinkedList( new Node(value) );
    console.log(newHead);
  }

  includes(value) {
    //while there are still Nodes check to see if this Node.value exists.
    while(Node.value !== undefined) {
      if(Node.value === value) {
        console.log(Node.value, 'It exists.')
        return true;
      } else {
        console.log('This is not the Node you are looking for...')
        return false;
      }
    }
  }

  print() {
    while(Node.value !== undefined) {
      console.log(Node.value);
      return Node.value;
    }
  }
}

const node1 = new Node('Hi');
let node2 = new Node('Hey');

const list1 = new LinkedList(node1);

list1.includes('Hi');