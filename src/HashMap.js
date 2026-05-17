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
      hashCode = hashCode % this.capacity;
    }
    return hashCode;
  }
  set(key, value) {
    const index = this.hash(key);
    if (index < 0 || index >= this.#buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    if (this.#buckets[index] === null) {
      const list = new LinkedList();
      list.append([key, value]);
      this.#buckets[index] = list;
    } else {
      const exists = this.#buckets[index].contains(key);
      if (exists) {
        this.#buckets[index].replace(key, value);
      } else {
        this.#buckets[index].append([key, value]);
      }
    }
  }
  get(key) {
    const index = this.hash(key);
    if (this.#buckets[index] === null) {
      return null;
    } else {
      const exists = this.#buckets[index].contains(key);
      if (exists) {
        return this.#buckets[index].findKey(key);
      } else {
        return null;
      }
    }
  }
  has(key) {
    const index = this.hash(key);
    if (this.#buckets[index] === null) {
      return false;
    } else {
      const exists = this.#buckets[index].contains(key);
      if (exists) {
        return true;
      } else {
        return false;
      }
    }
  }
  remove(key) {
    const index = this.hash(key);
    this.#buckets[index].toString();
    if (this.#buckets[index] === null) {
      return false;
    } else {
      const exists = this.#buckets[index].contains(key);
      if (exists) {
        const i = this.#buckets[index].findIndexHash(key);
        this.#buckets[index].removeAt(i);
        this.#buckets[index].toString();
        return true;
      } else {
        return false;
      }
    }
  }
  length() {
    let count = 0;
    this.#buckets.forEach((bucket) => {
      if (bucket !== null) {
        const keys = bucket.size();
        count += keys;
      }
    });
    return count;
  }
  clear() {
    this.#buckets.fill(null);
    return this.#buckets;
  }
  keys() {
    let arrayKeys = [];
    for (let index = 0; index < this.#buckets.length; index++) {
      if (this.#buckets[index] !== null) {
        const bucket = this.#buckets[index].bucketKeys();
        bucket.forEach((element) => {
          arrayKeys.push(element);
        });
      }
    }
    return arrayKeys;
  }
  values() {
    let arrayValues = [];
    for (let index = 0; index < this.#buckets.length; index++) {
      if (this.#buckets[index] !== null) {
        const bucket = this.#buckets[index].bucketValues();
        bucket.forEach((element) => {
          arrayValues.push(element);
        });
      }
    }
    return arrayValues;
  }
  entries() {
    let arrayEntries = [];
    for (let index = 0; index < this.#buckets.length; index++) {
      if (this.#buckets[index] !== null) {
        const bucket = this.#buckets[index].bucketEntries();
        bucket.forEach((element) => {
          arrayEntries.push(element);
        });
      }
    }
    return arrayEntries;
  }
}
export { HashMap };
