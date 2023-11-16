// wordGenerator.js

const wordPairs = [
  { english: 'cat', spanish: 'gato',respuestas:["perro","loro","mesa"]},
  { english: 'dog', spanish: 'perro', respuestas:["gato","loro","mesa"]},
  { english: 'tree', spanish: 'árbol', respuestas:["manzana","loro","mesa"] },
  { english: 'apple', spanish: 'manzana',respuestas:["arbol","locomotora","mesa"]},
  { english: 'house', spanish: 'casa', respuestas:["raton","tacon","mesa"]},
  { english: 'sun', spanish: 'sol', respuestas:["luna","loro","mesa"] }];
  
  function getRandomWordPair() {

    return wordPairs
  }
  
  module.exports = { getRandomWordPair };
  