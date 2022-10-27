function cacheFunction(cb) {

  let cache = {};
    
  return function(arg){
    if(cache.hasOwnProperty(arg)){
      return cache[arg];
    }
    else{
      cache[arg]=cb(arg);
      return cache[arg];
      
    }
    
  };
 
}

const cb = function(x) {
  return x * 2;
  
};
const cachedFunction = cacheFunction(cb);

  var resultOne = cachedFunction(2);
  var resultTwo = cachedFunction(3);
  var resultThre = cachedFunction(10);

  console.log(resultOne);
  console.log(resultTwo);
  console.log(resultThre);

  console.log(cachedFunction(true));
  console.log(cachedFunction(true));
  console.log(cachedFunction(10));

  



  