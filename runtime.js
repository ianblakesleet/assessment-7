const perf = require('execution-time')()
//.push() adds to end of array therefore it wont have to change the index of each item,
function doublerAppend(nums) {
  let new_nums = []

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2
    new_nums.push(num)
  }
}
///.unshift() inserts value into begining of the array therefore the runtime complexity is a lot higher since you have to change the index of each individual item afer inserting the first value first.
function doublerInsert(nums) {
  let new_nums = []

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i] * 2
    new_nums.unshift(num)
  }
}

function getSizedArray(size) {
  let array = []
  for (let i = 0; i < size; i++) {
    array.push(i)
  }
  return array
}

const tinyArray = getSizedArray(10)
const smallArray = getSizedArray(100)
const mediumArray = getSizedArray(1000)
const largeArray = getSizedArray(10000)
const extraLargeArray = getSizedArray(100000)

// How long does it take to double every number in a given
// array?

// Try it with first function
perf.start() // Starts timer
doublerAppend(largeArray)
let resultsAppend = perf.stop() // Stops timer and save time results

// Try it with second function
perf.start()
doublerInsert(largeArray)
let resultsInsert = perf.stop()

console.log('Results for the extraLargeArray')
console.log('insert', resultsInsert.preciseWords)
console.log('append', resultsAppend.preciseWords)
