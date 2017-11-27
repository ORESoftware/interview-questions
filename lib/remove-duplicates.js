

let arr = [7,1,5,6,3,1,3];

const sortAndDedup = function (arr) {
  // should return [1,3,5,6]
  
  const set = {};
  
  arr.forEach(function(v){
     set[v] = v;
  });
  
  return Object.keys(set).map(v => set[v])
  
};



console.log(sortAndDedup(arr));

