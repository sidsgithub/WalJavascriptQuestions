arr1=[1,4,6,8,9]
arr2 =[2,3,5,7] 
// → [1,2,3,4,5,6]

arr1 = arr1.sort()
arr2 = arr2.sort()

function mergeSorted(arr1,arr2){
  let i=0;
  let arr3=[]
    for(let j=0;j<arr2.length;j++){
      if(arr1[i]<arr2[j])
      {
        arr3.push(arr1[i])
        arr3.push(arr2[j])
        i+=1
      }
      else if(arr1[i]>arr2[j])
      {
        arr3.push(arr2[j])
        arr3.push(arr1[i])
        i+=1
      }
    } 
  return arr3
}
function driver(arr1,arr2){
  if(arr1.length==arr2.length){
    return mergeSorted(arr1,arr2)
  }
  if(arr1.length>arr2.length){
    let arr3 = mergeSorted(arr1,arr2)
    return arr3.concat(arr1.splice(arr1.length-(arr1.length-arr2.length)))
  }
  if(arr1.length<arr2.length){
    let arr3 = mergeSorted(arr1,arr2)
    return arr3.concat(arr2.splice(arr2.length-(arr2.length-arr1.length)))
  }

}
console.log(driver(arr1,arr2))