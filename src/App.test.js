var addTwoNumbers = function (l1, l2) {
  console.log("🚀 ~ file: App.test.js:2 ~ addTwoNumbers ~ l1:", l1);
  let sum = 0;
  let arr = [];
  let count = 0;
  for (let i = 0; i < l1.length; i++) {
    for (let j = 0; j < l2.length; j++) {
      sum = [l1[i] + l2[i]];
    }
    if (sum >= 10) {
      count = 1;
      sum = 0;
      arr.push(sum);
    } else {
      arr.push(...sum);
    }
  }
  console.log("🚀 ~ file: App.test.js:8 ~ addTwoNumbers ~ sum:", arr);
};
addTwoNumbers([2, 4, 3], [5, 6, 4]);
