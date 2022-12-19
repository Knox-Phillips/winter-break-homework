// Copy/Paste you solutions below. Each solution should be accompanied by a multiline comment explaining the solution.
//1
/*
    Step 1: Initialize variable to hold result
    Step 2: Setup for loop and set `i` equal to one so that we can return an accurate result = to the iteration count value later;
    Step 3: Make a if statement with the conditional, if the current iteration number divided by 3 has no remainder OR if the current iteration number divided by 5 has no remainder
    Step 4: If the current iteration number passes one or the other set result equal to i + result
    Step 5: Return final result after looping
*/

function solution(number){
  let result  = 0
  for(let i = 1;i<number;i++) {
    if(i % 3 == 0 || i % 5 == 0 ){
      result += i
    }
  }
  return result
}

//2
/*
    Step 1: Make a conditional statement asking if the length is greater than 3 to return the first two names and then subtract names.length by 2 to get the rest of the people that like this
    Step 2: Continue conditional by asking if the length is equal to three to make the string returning the first three names
    Step 3: continue by asking if the conditional is equal to two and return those two names with the rest of the string
    Step 4:Check if string is equal to one and return the appropriate string
    Step 5: If none of the above is true return the last message
*/
function likes(names) {
  return names.length > 3 ? `${names[0]}, ${names[1]} and ${names.length-2} others like this`
      :  names.length == 3 ? `${names[0]}, ${names[1]} and ${names[2]} like this`
      :   names.length == 2 ? `${names[0]} and ${names[1]} like this`
      :   names.length == 1 ?  `${names[0]} likes this`
      : `no one likes this`
}
//3
/*
    Step 1:Initiate the higher oderer array method filter and provide a paramater
    Step 2: Provide a predicate for the method to use while filtering the array that says you may only return a number whos first indexOf equals its lastIndexOf
    Step 3: Use bracket notation to return the single element at index 0 because filter creates an array
*/
function findUniq(arr) {
  return arr.filter(elem => arr.indexOf(elem) == arr.lastIndexOf(elem))[0]
}
//4
/*
    Step 1: Initiate a variable that holds all the numbers in the `integers` array that are even
    Step 2: Initiate a variable that holds all the numbers in the 
    `integers` array that are odd
    Step 3: Compare which lengths are shorter and return the shortest array at the index of 0 since it will only have one value
*/
function findOutlier(integers){
  let firstLength = integers.filter(elem => elem % 2 == 0)
  let secondLength = integers.filter(elem => elem % 2 !== 0)
  return firstLength.length < secondLength.length ? firstLength[0] : secondLength[0]
}
//5
/*
    Step 1: Create two empty arrays to hold the value of array pushed and to hold the zeroes
    Step 2: Setup a for loop to go until the original arrays length
    Step 3: Make a conditional saying if `arr[i] !== 0` than push that `arr[i]` into newarr, if else push it into the zeroes array
    Step 4: use the .concat feature to join the arrays together at then end of newArr and return it
*/
function moveZeros(arr) {
  let newArr = []
  let zeroes = []
  for(let i = 0;i<arr.length;i++) {
    if(arr[i] !== 0) {
      newArr.push(arr[i])
    }else {
      zeroes.push(arr[i])
    }
  }
 return newArr.concat(zeroes)
}
//6
/*
  Step 1: Initialize empty counter arry
  Step 2: Store an obj containing each of the letters in the array in to a key and how many times those specific letters appear into a value making them key and value pairs
  Step 3: Loop through the object checking if the value of the key (the letter) is greater than one (duplicate) and to add one to the counter
  Step 4: Return the counter
  
  PS: (I saw a really clever solutiion that used the same method I tried first which was the indexOf() does not eqaul lastIndexOf() 
    Using the filter method and then they took the length of the last remaining duplicates. This isnt for teachers just a mental note to check off for me.)
  )
*/
function duplicateCount(text){
  let counts = 0
  let obj = text.toLowerCase().split('').reduce((acc, val) => {
     acc[val] = acc[val] ? acc[val] += 1 : acc[val] = 1
     return acc
  },{})
  for(let repeat in obj) {
    if(obj[repeat] > 1) {
      counts +=1
    }
  }return counts
}