// Task 2:
// You are given an array of numbers. Write a function that calculates the total sum and
// the average of the numbers using the reduce method.

function totalSum(numbers) {
  if (numbers.length == 0) {
    return [0, 0];
  }

  let total = numbers.reduce((total, value) => {
    return total + value;
  });

  let average = total / numbers.length;

  return [total, average];
}

let numbers = [1, 2, 3, 4, 5];
const [total, average] = totalSum(numbers);

console.log(`The total sum = ${total} and the average = ${average}`);

// -----------------------------------------------------------------------------------------------------------------------

// Task 3:
// You are given an array of strings, some of which may be duplicates. Write a function that
// removes all duplicates from the array in constant time complexity and returns the array with unique values.

function removeDublicates(strings) {
  let uniqueStrings = new Set();
  return strings.filter((item) => {
    if (!uniqueStrings.has(item)) {
      uniqueStrings.add(item);
      return item;
    }
  });
}

let strings = ["Ataa", "school", "school", "ssss", "asdw"];

console.log(removeDublicates(strings));
