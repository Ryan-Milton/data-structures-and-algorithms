'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.stackStorage = [];
  }
  
  push(value) {
    this.stackStorage.push(value);
  }

  pop() {
    this.stackStorage.pop();
  }

  peek() {
    return this.stackStorage[this.stackStorage.length-1];
  }
}

class Queue {
  constructor() {
    this.queueStorage = [];
  }

  enqueue(value) {
    this.queueStorage.push(value);
  }

  dequeue() {
    this.queueStorage.shift();
  }

  peek() {
    return this.queueStorage[0];
  }
}

module.exports = {
  Node, Stack, Queue,
};