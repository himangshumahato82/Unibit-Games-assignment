function findAnswers(arr, target) {
  const arr1 = [];
  const mergedArr = [];
  const arr2 = [];
  const doubledTarget = target * 2;


  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        arr1.push([arr[i], arr[j]]);
      }
    }
  }

  mergedArr.push(...arr.sort((a, b) => a - b));
         
  function findSecondCombination(startIndex, arr1, curSum) {
    if (curSum === doubledTarget) {
      arr2.push(arr1.slice());
      return;
    }

    for (let i = startIndex; i < mergedArr.length; i++) {
      const num = mergedArr[i];
      if (curSum + num <= doubledTarget) {
        arr1.push(num);
       
        findSecondCombination(i + 1, arr1, curSum + num);
        arr1.pop();
      }
    }
  }
      findSecondCombination(0, [], 0);
  return [arr1, mergedArr, arr2];
}

const arr = [1, 3, 2, 2, -4, -6, -2, 8];
const target = 4;

const output = findAnswers(arr, target);
console.log("First Combination For '4':", output[0]);
console.log("Merge Into a single Array:", output[1]);
console.log("Second Combination For '8':", output[2]);