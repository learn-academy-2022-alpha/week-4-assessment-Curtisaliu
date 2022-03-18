// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe('shuffle', () => {
  it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"]
    // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
    // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    expect(shuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
    expect(shuffle(colors1)).not.toEqual(expect.arrayContaining(["purple"]))
    expect(shuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    expect(shuffle(colors2)).not.toEqual(expect.arrayContaining(["chartreuse"]))
  })
})

// Got Red.
// ● shuffle › takes in an array, removes the first item from the array and shuffles the remaining content
//
//    ReferenceError: shuffle is not defined

// b) Create the function that makes the test pass.
// Pseudo Code:
// Create a function named shuffle
// Method to remove the first element of the array, likely .shift()
// Method/Way to shuffle the remaining items in the arrays
// Was trying to use for loop, decided on a while loop.
// Return the new array

const shuffle = (array) => {
  array.shift()
  var n = array.length
  let newArr = []
    while (array.length > 0) {
      newArr.push(array.splice(Math.floor(Math.random() * n--), 1))
    }
    return newArr.flat(1)
}

// Got Green.

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

describe("minMax", () => {
  it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
    const nums1 = [3, 56, 90, -8, 0, 23, 6]
    // Expected output: [-8, 90]
    const nums2 = [109, 5, 9, 67, 8, 24]
    // Expected output: [5, 109]
    expect(minMax(nums1)).toEqual([-8, 90])
    expect(minMax(nums2)).toEqual([5, 109])
  })
})

// Got Red.
// minMax › takes an array of numbers and returns an array of the minimum and maximum numbers in that order
// ReferenceError: minMax is not defined

// b) Create the function that makes the test pass.
// Psuedo Code:
// Create a function named minMax
// Function must takes in input of an array of numbers
// Must find a built-in method that finds the min and max numbers
// Likely will need to filter out the rest of the numbers
// Returns the output of of an array of min and max numbers in order

const minMax = (array) => {
  var minimum = Math.min(...array)
  var maximum = Math.max(...array)
  return result = [minimum, maximum]
}

// Got Green.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

describe("noDuplicates", () => {
  it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
    const testArray1 = [3, 7, 10, 5, 4, 3, 3]
    const testArray2 = [7, 8, 2, 3, 1, 5, 4]
    // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
    expect(noDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
  })
})

// Got Red.
//  ● noDuplicates › takes in two arrays as arguments and returns one array with no duplicate values
// ReferenceError: noDuplicates is not defined

// b) Create the function that makes the test pass.
// Pseudo Code:
// Create a function named noDuplicates thats has a parameter of an array
// Create a new variable that holds an empty arrays
// Find a method to combine the arrays
// find a method to delete duplicates
// return the new array with no duplicates


const noDuplicates = (...array) => {
  let newArr = []
  array.forEach(value => {
    newArr = newArr.concat(value)
  })
  return [...new Set(newArr)]
}

// Got Green. 
