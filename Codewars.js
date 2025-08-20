function sortArray(arr) {
  let odds = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

  let result = arr.map((num) => {
    if (num % 2 !== 0) {
      return odds.shift();
    }
    return num;
  });

  return result;
}

console.log(sortArray([9, 5, 8, 9, 0, 3]));
