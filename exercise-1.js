/*
  Logic Challenge: Deep Sum
*/

function deepSum(arr) {
  if (arr.length === 0) return 'No Number';
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (Array.isArray(arr[i])) {
      sum += deepSum(arr[i]);
    } else sum += arr[i];
  }

  return sum;
}

// TEST CASE
console.log(
  deepSum([
    [[4, 5, 6], [9, 1, 2, 10], [9, 4, 3]],
    [[4, 14, 31], [9, 10, 18, 12, 20], [1, 4, 90]],
    [[2, 5, 10], [3, 4, 5], [2, 4, 5, 10]],
  ])
); // 316

console.log(
  deepSum([
    [[20, 10], [15], [1, 1]],
    [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], [2], [9, 11]],
    [[3, 5, 1], [1, 5, 3], [1]],
    [[2]],
  ])
); // 156

console.log(deepSum([])); // No number

// SOLUTION 1

// function deepSum(arr) {
//   if (arr.length === 0) return 'No Number';
//   let total = 0;
//   let isEmpty = false;

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       for (let k = 0; k < arr[i][j].length; k++) {
//         total += arr[i][j][k];
//       }
//     }
//   }

//   return total > 0 ? total : 'No Number';
// }
