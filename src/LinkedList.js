import { Node } from "./Node.js";
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  append(value) {
    if (this.head === null) {
      return this.prepend(value);
    } else {
      let tmp = this.head;
      while (tmp.nextNode !== null) tmp = tmp.nextNode;
      tmp.nextNode = new Node(value, null);
      return tmp.nextNode;
    }
  }
  prepend(value) {
    this.head = new Node(value, this.head);
    return this.head;
  }
  size() {
    if (this.head === null) {
      return 0;
    } else {
      let count = 0;
      let tmp = this.head;
      count++;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
        count++;
      }
      return count;
    }
  }
  returnHead() {
    return this.head !== null ? this.head.value : undefined;
  }
  tail() {
    if (this.head === null) {
      return undefined;
    } else {
      let tmp = this.head;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
        if (tmp.nextNode === null) {
          return tmp.value;
        }
      }
    }
  }
  at(index) {
    if (this.head === null) {
      return undefined;
    } else if (index === 0) {
      let tmp = this.head;
      return tmp.value;
    } else {
      let count = 0;
      let tmp = this.head;
      while (tmp.nextNode !== null && count <= index) {
        tmp = tmp.nextNode;
        count++;
        if (count === index) {
          return tmp.value;
        }
      }
    }
  }
  bucketKeys() {
    let bucketArray = [];
    let tmp = this.head;
    bucketArray.push(tmp.value[0]);
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      bucketArray.push(tmp.value[0]);
    }
    return bucketArray;
  }
  bucketValues() {
    let bucketArray = [];
    let tmp = this.head;
    bucketArray.push(tmp.value[1]);
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      bucketArray.push(tmp.value[1]);
    }
    return bucketArray;
  }
  bucketEntries() {
    let bucketArray = [];
    let tmp = this.head;
    bucketArray.push(tmp.value);
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      bucketArray.push(tmp.value);
    }
    return bucketArray;
  }
  pop() {
    if (this.head === null) {
      return undefined;
    } else {
      let deletedHead = this.head;
      this.head = this.head.nextNode;
      return deletedHead.value;
    }
  }
  contains(value) {
    if (this.head === null) {
      return undefined;
    } else {
      let tmp = this.head;
      if (value === tmp.value[0]) {
        return true;
      }
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
        if (tmp.value[0] === value) {
          return true;
        }
      }
      return false;
    }
  }
  removeHash(key) {
    if (this.head === null) {
      return undefined;
    } else {
      let tmp = this.head;
      if (key === tmp.value[0]) {
        console.log("miau");

        tmp.nextNode = tmp.nextNode.nextNode;
        return true;
      }
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
        if (tmp.value[0] === key) {
          tmp.nextNode = tmp.nextNode.nextNode;
          return true;
        }
      }
      return false;
    }
  }
  findIndex(value) {
    if (this.head === null) {
      return undefined;
    } else {
      let count = 0;
      let tmp = this.head;
      if (value === tmp.value) {
        return 0;
      }
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
        count++;
        if (tmp.value === value) {
          return count;
        }
      }
      return -1;
    }
  }
  findIndexHash(key) {
    if (this.head === null) {
      return undefined;
    } else {
      let count = 0;
      let tmp = this.head;
      if (key === tmp.value[0]) {
        return 0;
      }
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
        count++;
        if (tmp.value[0] === key) {
          return count;
        }
      }
      return -1;
    }
  }
  replace(key, val) {
    if (this.head === null) {
      return undefined;
    } else {
      let count = 0;
      let tmp = this.head;
      if (key === tmp.value[0]) {
        tmp.value[1] = val;
        return 0;
      }
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
        count++;
        if (tmp.value[0] === key) {
          tmp.value[1] = val;
          return count;
        }
      }
      return -1;
    }
  }
  findKey(key) {
    if (this.head === null) {
      return undefined;
    } else {
      let count = 0;
      let tmp = this.head;
      if (key === tmp.value[0]) {
        return tmp.value[1];
      }
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
        count++;
        if (tmp.value[0] === key) {
          return tmp.value[1];
        }
      }
    }
  }
  toString() {
    let stringToPrint = "";
    if (this.head !== null) {
      let tmp = this.head;
      stringToPrint = stringToPrint + `( ${tmp.value} ) -> `;
      while (tmp.nextNode !== null) {
        tmp = tmp.nextNode;
        stringToPrint = stringToPrint + `( ${tmp.value} ) -> `;
        if (tmp.nextNode === null) {
          stringToPrint = stringToPrint + `null`;
        }
      }
      console.log(stringToPrint);
    } else {
      console.log("( null )");
    }
  }
  insertAt(index, ...values) {
    if (index < 0 || index >= this.size()) {
      throw RangeError;
    }
    const insertFrom = this.at(index - 1);
    let tmp = this.head;
    if (tmp.value === insertFrom) {
      values.forEach((val) => {
        tmp.nextNode = new Node(val, tmp.nextNode);
        tmp = tmp.nextNode;
      });
    }
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
      if (tmp.value === insertFrom) {
        values.forEach((val) => {
          tmp.nextNode = new Node(val, tmp.nextNode);
          tmp = tmp.nextNode;
        });
      }
    }
  }
  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw RangeError;
    }
    const removeFrom = this.at(index);
    let tmp = this.head;
    let prev = null;
    if (tmp.value[0] === removeFrom[0]) {
      this.head = tmp.nextNode !== null ? tmp.nextNode : null;
      return;
    }
    while (tmp.nextNode !== null) {
      prev = tmp;
      tmp = tmp.nextNode;
      if (tmp.value[0] === removeFrom[0]) {
        prev.nextNode = tmp.nextNode;
        return;
      }
    }
  }
}
export { LinkedList };
