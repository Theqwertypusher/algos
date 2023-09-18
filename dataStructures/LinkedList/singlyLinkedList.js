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
  constructor(val) {
    this.head = new Node(val);
    this.tail = this.head;
    this.length = 1;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
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
    return curNode.val;
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

const obj = new SinglyLinkedList("jason");
obj.push("alexander").push("victor").unshift("BABY JAY");
console.log("get 2", obj.get(2));
obj.log();
