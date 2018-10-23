const LinkedList = require('./linked-list.js');

describe('Singly Linked List', () => {
  const list = new LinkedList();

  describe('creates a list', () => {
    test('LinkedList should construct', () => {
      expect(list).toBeDefined();
    });
    test('LinkedList should be headless when constructed', () => {
      expect(list.head).toBeNull();
    });
  });

  describe('insert', () => {
    test('add to empty list', () => {
      const list = new LinkedList();
      list.insert('apples');
      expect(list.head.value).toBe('apples');
    });
  });

  describe('kth from the end', () => {
    test('should get apples', () => {
      const list = new LinkedList();
      list.insert('bananas');
      list.insert('apples');
      let actual = list.kthFromTheEnd(1);
      let expected = 'apples';
      expect(actual).toBe(expected);
    });
  });
});

