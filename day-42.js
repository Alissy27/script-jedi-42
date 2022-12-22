//  https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript

function scramble(str1, str2) {
  let numLetters = {};

  for (const letter of str2) {
    if (numLetters[letter]) numLetters[letter]++;
    else numLetters[letter] = 1;
  }

  for (const letter of str1) {
    if (numLetters[letter] && numLetters[letter] !== 0) numLetters[letter]--;
  }

  for (const key in numLetters) {
    if (numLetters[key] !== 0) return false;
  }
  return true;
}


// https://leetcode.com/problems/two-sum/

function twoSum(nums, target) {
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(i)
        res.push(j)
        }
      
      }
  }
  return res;
}
