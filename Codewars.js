// function sortArray(arr) {
//   let odds = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

//   let result = arr.map((num) => {
//     if (num % 2 !== 0) {
//       return odds.shift();
//     }
//     return num;
//   });

//   return result;
// }

// console.log(sortArray([9, 5, 8, 9, 0, 3]));
function findUniq(arr) {
  const normalize = (str) =>
    [...new Set(str.toLowerCase().replace(/\s/g, ""))].sort().join("");

  const mapped = arr.map(normalize);

  for (let i = 0; i < mapped.length; i++) {
    if (mapped.indexOf(mapped[i]) === mapped.lastIndexOf(mapped[i])) {
      return arr[i];
    }
  }
}

console.log(findUniq(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"]));
