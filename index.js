const faker = require('faker')
const { forEach } = require('lodash')
const myDummyArray = new Array(2000001).fill(0)
const myOGArray = []


/** VANILLA JS */
// console.time("Vanilla")
// myDummyArray.forEach((_, idx) => {
//     const name = faker.address.streetName()
//     const square = (idx + 1) * (idx + 1)
//     myOGArray.push({ square, name })
// })
// console.timeEnd("Vanilla")
 
/** LODASH */
// console.time("lodash")
// forEach(myDummyArray, (_, idx) => {
//         const name = faker.address.streetName()
//         const square = (idx + 1) * (idx + 1)
//         myOGArray.push({ square, name })
//     })
// console.timeEnd("lodash")

/** VANILLA JS WITH ForLoop */
console.time("Vanilla For Loop")
for (let idx = 0; idx < myDummyArray.length; idx++) {
    const name = faker.address.streetName()
    const square = (idx + 1) * (idx + 1)
    myOGArray.push({ square, name })   
}
console.timeEnd("Vanilla For Loop")

