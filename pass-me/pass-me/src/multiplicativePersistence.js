/*
multiplicativePersistence 함수를 작성합니다.

multiplicativePersistence 함수는 양수를 파라미터로 받는 함수로,
각 자릿의 숫자들을 곱한 결과물들이 하나의 숫자가 될 때까지 반복적으로 곱한 후,
최후의 한 자리 숫자를 리턴하는 함수입니다.

예를 들어 786을 인자로 넘길 경우, 함수는 0을 리턴해야 합니다.
7 * 8 * 6 -> 336
3 * 3 * 6 -> 54
5 * 4 -> 20
2 * 0 -> 0

*/

function multiplicativePersistence(num) {
  // 한자리수라면 값을 반환한다.
  // 한자리수가 아니라면,
  // String으로 변환, split('')
  // 다시 Number로 변환하여 각 자리수를 모두 더한다.
  // 전부 더한 sum을 재귀함수 인자로 반환한다.
  let result = 0;
  if(num<10){
    return num;
  }else{
    let strNumArr = String(num).split('');
    let sum=1;
    for(let i in strNumArr){
      sum*=Number(strNumArr[i*1]);
    }
    result= multiplicativePersistence(sum);
  }
  return result;
}

if(typeof window === 'undefined') {
  module.exports = multiplicativePersistence;
}


// !! 재귀에서 return 챙기기
























// function multiplicativePersistence(num) {
//   let seperatedNum = String(num).split('');
//   // console.log(seperatedNum);
//   let multipledNum = seperatedNum.reduce(function(result, cur){
//     result = result * Number(cur);
//     // console.log(result);
//     return result;
//   }, 1);
//   if(Number(multipledNum) < 10){
//     // console.log("return "+multipledNum);
//     return multipledNum;
//   }else{
//     // console.log("multiplicativePersistence("+multipledNum+")");
//     return multiplicativePersistence(multipledNum);
//   }
// }

// if(typeof window === 'undefined') {
//   module.exports = multiplicativePersistence;
// }

