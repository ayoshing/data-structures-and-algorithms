// linked list is a linear collection of data elements, order is not given by their physical placement in memory.
// every linked list Node points to a null
// null by itself is a valid linked list

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

  size() {
    return this.length;
  }

  contains(value) {
    let node = this.head;
    while (node) {
      if (node.value === value) {
        return true;
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
}
