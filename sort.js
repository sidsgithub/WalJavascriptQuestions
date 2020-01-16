let arr = [ ['a', 'b', 'c'], ['d', 'e'], ['f','g','h'], ['d','e'], ['i','j','k','l'], ['m','n'], ['o'] ]

arr.sort(function(a1,b1){
   if(a1.length > b1.length)
     return 1;
   if(a1.length < b1.length)
     return -1;
   else
     return 0;
 })
 console.log(arr)
