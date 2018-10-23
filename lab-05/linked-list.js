'use strict';

class Node{
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor(node = null) {
    this.head = node;
  }

  insert(value) {
    // console.log('I\'m adding a new Node to the List and becoming the HEAD!');
    // let newHead = new LinkedList( new Node(value) );
    // console.log(newHead);
    this.head = new Node(value, this.head);
  }

  includes(value) {
    //while there are still Nodes check to see if this Node.value exists.
    // while(Node.value !== undefined) {
    //   if(Node.value === value) {
    //     console.log(Node.value, 'It exists.')
    //     return true;
    //   } else {
    //     console.log('This is not the Node you are looking for...')
    //     return false;
    //   }
    // }
    let current = this.head;
    while(current) {};
  }

  print() {
    while(Node.value !== undefined) {
      console.log(Node.value);
      return Node.value;
    }
  }

  append(value) {
    let newNode = new Node(value);
    if(this.head.next === null) {
      this.head.next = newNode;
    }
    while(Node.next === null) {
      console.log(Node.next); // I log out undefined here and I have no idea why. Plus, while loops are not something I use so I'm trying to but to no avail.
      Node.next = newNode;
    }
  }

  insertBefore(value, newValue) {
    let newNode = new Node(newValue);
    // Don't know where to go from here...
  }

  insertAfter(value, newValue) {
    let newNode = new Node(newValue);
    // Don't know where to go from here...
  }

  kthFromTheEnd(k) {
    let hare = this.head;
    let snail = null;
    let snailCount = -k;

    if(snailCount === 0) snail = this.head;

    while(hare.next) {
      snailCount++;
      if(snailCount === 0) {
        snail = this.head;
      } else if(snailCount > 0) {
        snail = snail.next;
      }
      hare = hare.next;
    }
    return snail && snail.value;
  }
}

const node1 = new Node('Hi');

const list1 = new LinkedList(node1);

console.log(list1.append('Bye Bye'));

list1.includes('Hi');

module.exports = LinkedList;