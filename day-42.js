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