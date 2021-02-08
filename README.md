# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @justin1002/lotide`

**Require it:**

`const _ = require('justin1002/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
input values are as follows:
1) arr = array
2) obj = object
3) str = string
4) callback = callback function

* `head(arr)`: returns the first element in an array
* `tail(arr)`: returns all elements after the first in an array
* `middle(arr)`: returns the middle element of an array, returns two elements if the length is an even number
* `eqObjects(obj1,obj2)`: returns a boolean value comparing two objects for equality
* `eqArrays(arr1,arr2)`: returns a boolean value comparing two arrays for equality
* `assertArraysEqual(arr1,arr2)` assertion function that compares two arrays for equality
* `assertObjectsEqual(obj1,obj2)` assertion function that compares two objects for equality
* `countLetters(str)` creates an object which presents the letter(key) and the count(value)
* `countOnly(arr,obj)` creates an object that counts items in an array based on boolean keys-values an object
* `findKey(obj,callback)` returns the first key that matches the callback function requirements
* `findKeyByValue(obj,key)` returns the first key that matches the value in an object
* `flatten(arr)` takes an array with multiple dimensions and flattens to one dimension (only works with one additional dim)
* `without(arr1,arr2)` filters array 1 without items in array 2
* `letterPositions(str)` returns an object that shows the letter(key) and their relative index in an array
* `takeUntil(arr, callback)` returns an array that takes values until it reaches a certain condition from the callback
* `map(arr, callback)` returns an array that is mapped based on the callback function
