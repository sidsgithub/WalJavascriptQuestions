function multiplication(mata, matb){
  var result = new Array(mata.length)
  for(var i = 0;i<result.length;i++){
    result[i] = new Array(matb[i].length)
    for(var j=0;j<mata.length;j++){
      result[i][j]=0;
      for(var k=0;k<matb.length;k++){
        result[i][j]+=mata[i][k]*matb[k][j]
      }
    }
  }
  return result;
}

let a =[[1,2],[4,5]]
let b =[[3,4],[5,6]]
console.log(multiplication(a,b))