// Modules
let sayHi = require('./1-functions')
let names = require('./1-names')
let alternative = require('./1.alternativeModule')
console.log(alternative)
sayHi(names.studentA)
sayHi(names.studentB)
