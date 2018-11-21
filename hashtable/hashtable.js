"use strict";

const util = require("util");

class HashMap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }

  hash(key) {
    return key.split("").reduce((p, n) => p + n.charCodeAt(0), 0) % this.size;
  }

  add(key, value) {
    let hash = this.hash(key);
    console.log(hash, key, value);

    if (!this.map[hash]) {
      this.map[hash] = [];
    }

    this.map[hash].push({ [key]: value });
  }

  get(key) {
    let hash = this.hash(key);
    return this.map[hash];
  }

  find(key) {
    let hash = this.hash(key);
    // Do a .find() on this.hash....
    let bucket = Object.values(this.map[hash].find( (item) => {
        return item[key];
    }));
    return bucket[0];
  }

  contains(key) {
    let hash = this.hash(key);
    let bucket = this.map[hash];
    // console.log(hash);
    // console.log(bucket);
    let finder = Object.keys(bucket.find( (item) => {
      return item;
    }));
    if(!finder.includes(key)) {
      return `This HashTable does not contain ${key}`;
    } else {
      return `This HashTable does contain ${key}`;
    }
  }

  getHash(key) {
    let hash = this.hash(key);
    let bucket = this.map[hash];
    for(let i = 0; i < bucket.length; i++) {
      let keys = Object.keys(bucket[i]);
      if(keys[0] === key) {
        return i;
      };
    }
  }

}