/**
Creates node for linkedList
*/
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/**
Creates a singlyLinkedList
*/
class SinglyLinkedList {
  constructor(listOfValues) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    if (Array.isArray(listOfValues)) {
      for (const val of listOfValues) {
        this.push(val);
      }
    }
  }

  // Returns length
  size() {
    return this.length;
  }

  // Returns the head
  head() {
    return this.head?.val ?? null;
  }

  // Returns the tail
  tail() {
    return this.tail?.val ?? null;
  }

  // Return if the list is empty
  isEmpty() {
    return this.length === 0;
  }
  // add a node at first it to linklist
  addFirst(val) {
    const node = new Node(val);
    // Check if its the first element
    if (this.head === null) {
      this.tail = node;
    }
    // Adding node at the start of the list and increase the length
    node.next = this.head;
    this.head = node;
    this.length++;
    return this.size();
  }

  push(val) {
    // Check if its the first val
    if (this.head === null) {
      return this.addFirst(val);
    }
    const node = new Node(val);
    // Adding node at the end of the list and increase the length
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this.size();
  }
  pop() {
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let curNode = this.head;
    this.head = curNode.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return curNode;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx <= 0) return null;
    let curNode = this.head;
    let pointer = 0;
    while (pointer < idx) {
      curNode = curNode.next;
      pointer++;
    }
    return curNode;
  }

  set(val, idx) {
    const curNode = this.get(idx);
    if (!curNode) return false;
    curNode.val = val;
    return true;
  }

  insert(val, idx) {
    const newNode = new Node(val);
    const curNode = this.get(idx - 1);
    newNode.next = curNode.next;
    curNode.next = newNode;
    this.length++;
    return this;
  }

  reverse() {
    let curNode = this.head;
    this.head = this.tail;
    this.tail = curNode;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = curNode.next;
      curNode.next = prev;
      prev = curNode;
      curNode = next;
    }
    return this;
  }

  map() {
    let curNode = this.head;
    let idx = 0;
    const result = [];
    while (idx < this.length) {
      result.push(curNode.val);
      curNode = curNode.next;
      idx++;
    }
    return result;
  }

  /**
  Logs each node of linked list
  */
  log() {
    let idx = 0;
    let curNode = this.head;
    while (idx < this.length) {
      console.log(`Node ${idx}`, curNode.val);
      idx++;
      curNode = curNode.next;
    }
    console.log(`Length: ${this.length} `);
  }
}

const obj = new SinglyLinkedList(
  "My name is the qwerty pusher and these are my repos".split(" ")
);

console.log(obj.map());
