# First Reapeated Word

## Partners
Ryan and Tim - the dynamic duo!

## Challenge
* Write a function that accepts a lengthy string parameter.
* Without utilizing any of the built-in library methods available to your language, return the first word to occur more than once in that provided string.

## Solution
<img src='assets/first-repeated-word.jpg' />

## Approach & Efficiency

* Approach
  * create a method on the HashMap class that runs this contains method to check if the hash map contains that element.
  * We utilize this method by calling it inside of the repeatedWord function after we split the string on spaces.
* Efficieny
  * Time O(n^2)
    * We are running a for loop on the split string and then running the HashMap contains method which has a for loop running under the hood.
  * Space O(n)
    * The amount of space is dependent upon the sizez of the string, relatively.


