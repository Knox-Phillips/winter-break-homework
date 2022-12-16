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