let arr = [ ['a', 'b', 'c'], ['d', 'e'], ['f','g','h'], ['d','e'], ['i','j','k','l'], ['m','n'], ['o'] ]

let arrLength = arr.map(x => x.length)
const map1 = new Map()
let i=0
const arre =[]


//generating a map to store length:occurance
for (const element of arrLength) {
  if(map1.has(element)){
    let val = map1.get(element)+1
    map1.set(element,val)
  }
  else{
    map1.set(element,1)
  }
}
//converting map to array
arrMap = Array.from(map1)
//sorting the array based on occurance
arrMap.sort(function(a,b){
  if(a[1]>b[1])
  return 1
  if(a[1]<b[1])
    return -1
  else
    return 0;
} )

//sorting based on occurance we get in a sorted order.
for(const entries of arrMap){
  for(const element of arr){
    if(element.length == entries[0]){
      arre.push(element)
    }
  }
}
//printing the results
console.log(arre)