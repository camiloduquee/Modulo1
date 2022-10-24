'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
// tu codigo aca
let arr = num.split("").reverse();
let NewArr = [];
  for(let i = 0;i < arr.length; i++){
    	NewArr[i] =arr[i] * Math.pow(2,i)
  }
 return NewArr.reduce(
  (a, b) => a + b);
}

function DecimalABinario(num) {
  // tu codigo aca

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
