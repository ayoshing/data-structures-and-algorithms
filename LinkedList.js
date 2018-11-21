// A linked list is a linear data structure, where the collection of data are not stored contiguously. A linked list is essential a giant nested object, where each object is a node the stores a value and a pointer that points to the next node. A linked list provides linear time O(n) access and search. Insertion and deletion are constant O(1).

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    let node = new Node(value);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = this.tail.next;
    }
    this.length++;
  }

  prepend(value) {
    let node = new Node(value);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      node.value = value;
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  size() {
    return this.length;
  }

  find(value) {
    let node = this.head;
    while (node) {
      if (typeof value === "function" && value(node.value)) {
        return node;
      }

      if (node.value === value) {
        return node;
      }
      node = node.next;
    }
    return false;
  }

  remove(value) {
    let node = this.head;
    let current;
    while (node) {
      if (typeof value === "function" && value(node.value)) {
        this.head = this.head.next;
        return node;
      } else if (typeof value === "function" && value(node.next.value)) {
        current = node;
        node = node.next;
        break;
      } else if (node.value === value) {
        this.head = this.head.next;
        return node;
      } else if (node.next.value === value) {
        current = node;
        node = node.next;
        break;
      }
    }
    current.next = node.next;
    this.length--
    return node;
  }

  removeAt(index) {
    if (!this.head) return undefined;
    if (index === 0) return this.head;

    let node = this.head;
    let current;
    for (let i = 0; i < index - 1; i++) {
      if (node) {
        current = node;
        node = node.next;
      } else {
        return undefined;
      }
    }
    current.next = node.next;
    let temp = node.value;
    node = null;
    this.length--
    return temp;
  }
}

export default LinkedList;
