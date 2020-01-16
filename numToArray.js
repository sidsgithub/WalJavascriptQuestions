let num = 123456
let arr = []
function numToArray(num){
  while(num>0){
    arr.push(parseInt(num%10))
    num = parseInt(num/10)
  }
  return arr.reverse()
}
console.log(numToArray(num))