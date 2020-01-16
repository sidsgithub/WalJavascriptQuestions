var arr = [7,5,3,4,3,9,1]
var k = 5
let arrL = []
arrL = arrL.concat(arr)

var findKthLargest = function(arrL, k) {
  arrL = new Set(arrL)
  arrL = Array.from(arrL)
  // console.log(arrL)
  arrL.sort((a, b) => a - b);
  // console.log("array after sorting is:"+arrL)
  return arrL[arrL.length - 1 - (k - 1)];
};


let arr1 =[]
let le = findKthLargest(arrL,k)
// console.log("kth largest is "+le)
for(element of arr){
  if(element != le){
    arr1 = arr1.concat(element)
  }
}
console.log(arr1)