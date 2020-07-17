/*

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
//////////////////////


Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

It doesn't matter what you leave beyond the returned length.
//////////////////////////////////////////
Given nums = [0,0,1,1,1,2,2,3,3,4],

Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.

*/
// maybe use splice? return removed elements
//obj and use index for what we've seen. return len of vals

//can iterate through array and since sorted check strict equality upon each element

function firstAttempt() {
  var arr = [0, 1, 1, 1, 2, 2, 3, 3, 4];

  for (let i = 0; i < arr.length; i++) {
    const firstElement = arr[i];
    for (let j = 1; j < arr.length; j++) {
      const secondElement = arr[j];
    }
    if (firstElement === secondElement) {
      arr.splice(i, 1);
      i -= 1;
    }
  }
}
