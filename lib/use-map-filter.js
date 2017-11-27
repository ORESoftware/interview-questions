


const integers = [1,2,3,4,5,6,7];  // remove odd numbers, then double each entry


const removeOddThenDouble = function (arr){
  
  // returns  [4,8,12]
  
  return arr.filter(function(v){
     return v%2 === 0;
  })
    .map(function(v){
      return 2*v;
    })
  
};



const doubleThenRemoveDivisbleBy3 = function (arr){
  
  // returns [ 2, 4, 8, 10, 14 ]
  
  return arr.map(v => 2*v).filter(function(v){
     return v%3 !== 0;
  });
  
};


console.log(removeOddThenDouble(integers));
console.log(doubleThenRemoveDivisbleBy3(integers));
