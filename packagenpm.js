
const ld = require('lodash')

let item = [1,[2,[3,[4]]]]
let itemData = ld.flattenDeep(item)
console.log(itemData)