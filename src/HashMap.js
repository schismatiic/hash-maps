import { LinkedList } from "./LinkedList.js";

class HashMap {
  #buckets = [];
  constructor(load_factor = 0.75, capacity = 16) {
    this.load_factor = load_factor;
    this.capacity = capacity;
    this.#buckets = new Array(this.capacity).fill(null);
  }
  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
    }
    return hashCode;
  }
  set(key, value) {
    const hashed_key = this.hash(key);
    const index = hashed_key % this.capacity;
    if (index < 0 || index >= this.#buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (this.#buckets[index] === null) {
      const list = new LinkedList();
      list.append([key, value]);
      this.#buckets[index] = list;
      this.#buckets[index].toString();
    } else {
      const exists = this.#buckets[index].contains(key);
      if (exists) {
        this.#buckets[index].replace(key, value);
        this.#buckets[index].toString();
      } else {
        this.#buckets[index].toString();
        this.#buckets[index].append([key, value]);
      }
    }
  }
}
export { HashMap };
