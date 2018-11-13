// A hash table is a key value pair lookup data structure which provides constant time O(1) search, insert, and delete operations. The data structure takes in a key value pair and maps the key to an index of an array using a hash function. The hash function is critical in order to avoid and minimize collisions. One common colliion handling technique is through the use of chaining, which maps each index in the array to a linked list. When collisions occur, the key value pair will be added into the linked list.
import LinkedList from './LinkedList'

const defaultSize = 32;

class HashTable {
  constructor(size = defaultSize) {
    this.buckets = new Array(32).fill(null).map(el => new LinkedList());
    this.keys = {};
  }

  hash(key) {
    let hash = key.split('').reduce((acc, keyChar) => {
      return acc + keyChar.charCodeAt(0);
    }, 0)
    return hash % this.buckets.length;
  }

  set(key, value) {
    let keyHash = this.hash(key);
    this.keys[key] = keyHash;
    let bucketLinkedList = this.buckets[keyHash];
    let node = bucketLinkedList.find(nodeValue => nodeValue.key === key)
    if (!node) {
      bucketLinkedList.add({key, value});
    } else {
      node.value.value = value;
    }
  }

  get(key) {
    let keyHash = this.hash(key);
    let bucketLinkedList = this.buckets[keyHash];
    let node = bucketLinkedList.find(nodeValue => nodeValue.key === key)
    if(node) {
      return node.value.value
    } else {
      return node
    }
  }

  delete(key) {
    let keyHash = this.hash(key);
    let bucketLinkedList = this.buckets[keyHash];
    if (!bucketLinkedList.head) return 'not found';
    delete this.keys[key];
    let nodeValue = bucketLinkedList.remove(nodeValue => nodeValue.key === key);
    if (typeof nodeValue === 'object') {
      return nodeValue.value.value;
    } else {
      return nodeValue.value;
    }
  }

  has(key) {
    return Object.prototype.hasOwnProperty.call(this.keys, key);
  }

  getKeys() {
    return Object.keys(this.keys);
  }
}

let ht = new HashTable();

ht.set("hello", "world");
ht.set("helol", "bar");
ht.set("hello", "universe");
ht.get("hello");
