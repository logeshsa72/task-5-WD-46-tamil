let nums = [1, 2, 3, , 5, 6];
const rotateArray1 = function(nums, k) {

    for (let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
  
    console.log(nums) ;
  }