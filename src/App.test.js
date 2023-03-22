const arr1 = [1, 3, 4, 2, 7, 9, 10, 6, 8];
const arr2 = [1, 3, 9, 11, 5, 7, 13];

const result = [];

for (let i = 0; i < arr1.length; i++) {
  const num = arr1[i];
  if (arr2.includes(num)) {
    result.push(num);
  }
}

console.log(result);
