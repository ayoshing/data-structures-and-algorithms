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

  add(value) {
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
    let previousNode;
    while (node) {
      if (node.value === value) {
        previousNode = this.head;
        this.head = node.next;
      } else if (node.next.value === value) {
        previousNode = node;
        node = node.next;
        break;
      } else {
        return false;
      }
    }
    previousNode.next = node.next;
    let temp = node.value;
    node = null;
    return temp;
  }

  removeAt(index) {
    if (!this.head) return undefined;
    if (index === 0) return this.head;

    let node = this.head;
    let previousNode;
    for (let i = 0; i < index - 1; i++) {
      if (node) {
        previousNode = node;
        node = node.next;
      } else {
        return undefined;
      }
    }
    previousNode.next = node.next;
    let temp = node.value;
    node = null;
    return temp;
  }
}

export default LinkedList;
