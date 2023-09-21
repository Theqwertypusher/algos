// TODO: finish doubly linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

/** creates a doubly linked list data structure */
class DoublyLinkedList {
  constructor(initValArray) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (Array.isArray(initValArray)) {
      for (const val of initValArray) {
        this.push(val);
      }
    }
  }

  /** returns length */
  size = () => this.length;

  /** Adds new node to end of list */
  push = (val) => {
    const node = new Node(val);
    if (!this.head) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
    return this;
  };

  /** remove and return last node */
  pop = () => {
    const tail = this.tail;
    this.tail = tail.prev;
    tail.prev.next = null;
    tail.prev = null;
    this.length--;
    return tail;
  };

  /** remove and return first node */
  shift = () => {
    const headNode = this.head;
    this.head = headNode.next;
    this.head.prev = null;
    headNode.next = null;
    this.length--;
    return headNode;
  };

  /** append new node to head */
  unshift(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head.prev = node;
    this.head = node;
    this.length++;
    return this;
  }

  /** return val at idx */
  get = (idx) => this.#traverseTo(idx).val;

  /** replaces val at idx */
  set = (val) => {
    return this;
  };

  /** inserts new node at idx */
  insert = (val, idx) => {
    return this;
  };

  /** remove and return node at idx */
  remove = (val, idx) => {
    return this;
  };

  /** iterates list and logs index and value of each node  */
  log = () => {
    this.#iterate((val, idx) => console.log(`${idx}: ${val}`));
    console.log(`Length: ${this.size()}`);
  };

  #iterate = (cb) => {
    let curNode = this.head;
    let idx = 0;
    while (idx < this.length) {
      cb(curNode.val, idx);
      curNode = curNode.next;
      idx++;
    }
  };

  #traverseTo = (idx) => {
    let curNode = this.head;
    let curIdx = 0;
    while (curIdx < idx) {
      curNode = curNode.next;
      curIdx++;
    }
    return curNode;
  };
}

const input = "This is just a sample of words".split(" ");

const doublyLL = new DoublyLinkedList(input);
doublyLL.log();
console.log(doublyLL.get(1));
doublyLL.log();
