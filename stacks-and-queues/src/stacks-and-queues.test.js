'use strict';

const {Node, Stack, Queue} = require('./stacks-and-queues');

describe('This is testing the class of Stack', () => {
  const hiNode = new Node('hi');
  const heyNode = new Node('hey');
  const helloNode = new Node('hello');

  let stacker = new Stack();

  let queueItUp = new Queue();

  describe('Creating a Stack', () => {
    test('Stack creation is succesful', () => {
      expect(stacker).toBeDefined();
    });
  });
});