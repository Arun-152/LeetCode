/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) { 
 let a=0,b=0

for (let i = 0; i < nums1.length; i++) {
    if (nums2.includes(nums1[i])) {
        a ++
    }
}
for(j=0;j<nums2.length;j++){
    if(nums1.includes(nums2[j]))
    b++
}

return [a,b];
};