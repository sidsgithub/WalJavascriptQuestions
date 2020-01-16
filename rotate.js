var arr = [1,2,3,4,5,6]
var k = 2
function rotate(arr,k){
  for(let i=0;i<k;i++){
    let temp=arr[0]
    for(let j=0;j<arr.length-1;j++){
      arr[j]=arr[j+1]
      arr[j+1]=temp
    }
  }
  return arr
}
console.log(rotate(arr,k))