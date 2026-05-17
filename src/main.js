import { HashMap } from "./HashMap.js";

const hash_map = new HashMap();
hash_map.set("apple", "red");
hash_map.set("banana", "yellow");
hash_map.set("carrot", "orange");

hash_map.set("apple", "green");
hash_map.set("banana", "black");

hash_map.set("ab", "first");
hash_map.set("ba", "second");
hash_map.set("abc", "third");
hash_map.set("cab", "fourth");

hash_map.set("ba", "UPDATED");
console.log(hash_map.get("cab"));
