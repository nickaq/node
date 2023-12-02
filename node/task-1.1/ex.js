'use strict'

let arr = ["zalupa", "penis", "her", "davalka", 'zalupa', 'her'];
console.log(arr.length);
let set = new Set();
for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
}
console.log(set.keys());
let map = new Map();
for(let i = 0; i < arr.length;i++)
{
  map.set(arr[i]);
}
console.log(map.keys())