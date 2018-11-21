# Hashtables
Created a class of HashTable that has 4 methods attached to it.
* hash(key) returns the number of the "bucket" the passed in key is in.
* add(key, value) adds the the passed in key value pair to the HashTable and returns which "bucket" they reside in along with the key-value pair
* get(key) returns the entire bucket that has the passed in key residing in that bucket
* find(key) searches through the HashTable and returns the value of the passed in key
* contains(key) searches through the HashTable and returns a string saying whether or not that key is in the HashTable or not
* getHash(key) searches through the HashTable and returns the index that the key resides at in a "bucket"

## Challenge
Implement a Hashtable with the following capabilities

a method/function named add that takes in both the key and value. This method should hash the key and add the key and value pair to the table.
A method/function named Find that takes in the key and returns the value from key/value pair.
A method/function named contains that takes in the key and returns if the key exists in the table already.
A method/function named GetHash that takes in a key and returns the index in the array the key is stored.

## Approach & Efficiency
My methods are not that efficient. I went at this problem with a brute force sort of method.