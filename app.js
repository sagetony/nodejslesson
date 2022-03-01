
const ld = require('lodash')

let item = [1,[2,[3,[4]]]]
let itemData = ld.flattenDeep(item)
console.log(itemData)

// NOTE:
// For one to use npm packages one has to install package.json which has a come of 'npm i -y' it will help installing the package. However 'npm i lodash' is an example of how to install a dependency in package.json.
