var arr = [7,5,3,4,3,9,1]
function reverse(arr){
  for(let i=0;i<(arr.length)/2;i++){  
    let temp = arr[i]
    arr[i] = arr[arr.length-(i+1)]
    arr[arr.length-(i+1)] = temp;  
  }
  return arr
}
console.log(reverse(arr))