const addToZero = (arr) => {
  let copy = [...arr]
  let answer = false
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < copy.length; j++) {
      if (arr[i] + copy[j] === 0) {
        answer = true
      }
    }
  }
  return answer
}

console.log(addToZero([1, 2, 3, -9]))

const hasUniqueChars = (str) => {
  //new Set removes all the dublicates in str, so we check whether the set size is the same as str.length and it will return true or false
  return new Set(str).size == str.length
}

// console.log(hasUniqueChars('abc'))

const isPangram = (str) => {
  let copyStr = str.toLowerCase()
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  //indexOf returns -1 if it is not found.
  for (let i = 0; i < alphabet.length; i++) {
    if (copyStr.indexOf(alphabet[i]) < 0) {
      return false
    }
  }
  return true
}

// console.log(isPangram('I like cats, but not mice'))

const findLongestWord = (arr) => {
  let length = []
  arr.forEach((elem) => {
    length.push(elem.length)
  })
  return Math.max(...length)
}
// console.log(findLongestWord(['hi', 'hello']))

// ["hi", "hello"]
