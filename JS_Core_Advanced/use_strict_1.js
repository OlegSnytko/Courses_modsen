'use strict';

function splitWords(str){
    return str.trim().split(/\s+/);
}

const testString = '  hello   wrld hello  wrld ';
const words = splitWords(testString);

console.log('Original string:', testString);
console.log('Split words:', words);