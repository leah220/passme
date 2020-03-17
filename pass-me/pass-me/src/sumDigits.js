/*
"sumDigits" 함수를 작성합니다.

숫자가 주어졌을때, "sumDigits" 함수는 숫자의 각 자리수를 모두 더한 값을 반환합니다.
만약 숫자가 음수라면, 첫번째 자릿수는 음수로 고려되어야 합니다.

let output1 = sumDigits(1148);
console.log(output1); // --> 14

let output2 = sumDigits(-316);
console.log(output2); // --> 4
*/

function sumDigits(num) {
  let tmpStr = String(num).split('');
  let sum = 0;

  if(num===''){
    return 0;
  }

  // 1. 첫번째 자리수가 음수인 경우
  if(String(num)[0]==='-'){
    sum -= Number(tmpStr[1]);
    for(let i=2; i<tmpStr.length; i++){
      sum += Number(tmpStr[i]);
    }
  }else{
    // 2. 첫번째 자리수가 양수인 경우
    for(let i in tmpStr){
      sum += Number(tmpStr[i]);
    }
  }
  return sum;
}

// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = sumDigits;
}



















// function sumDigits(num) {
//   let numStr = String(num);
//   let numArr = [];
//   let result;
//   if(num === 0){
//     return 0;
//   }else if(numStr[0] === '-'){
//     for(let i=1; i<numStr.length; i++){
//       if(i===1){
//         numArr[0]=Number(numStr.slice(0,2));
//       }else{
//         numArr.push(Number(numStr[i]));
//       }
//     }
//   }else{
//     numArr = numStr.split('');
//   }
//   result = numArr.reduce((added, cur)=>{
//     return Number(added) + Number(cur);
//   }, 0);
//   return result;
// }

// // keep this code for testing
// if(typeof window === 'undefined') {
//   module.exports = sumDigits;
// }
