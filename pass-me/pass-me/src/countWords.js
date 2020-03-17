/*
"countWords" 함수를 작성합니다.

string이 input으로 주어지면, "countWords" 함수는 주어진 문자열의 각 단어들을 키 값으로 갖고 있는 객체를 리턴합니다.
키 값과 더불어, 각 단어의 빈도수를 알아낸 후 값으로 적용합니다.

Notes:
* 만일 빈 문자열이 주어지면, 빈 객체를 리턴해야 합니다.

let output = countWords('ask a bunch get a bunch');
console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
*/

function countWords(input) {
  let tmpArr = input.split(' ');
  let rstObj = {};
  if(input===''){
    return {};
  }
  for(let i in tmpArr){
    i*=1;
    if(!rstObj.hasOwnProperty(tmpArr[i])){
      rstObj[tmpArr[i]]=1;
    }else{
      rstObj[tmpArr[i]]++;
    }
  }
  return rstObj;
}

// keep this code for testing
if(typeof window === 'undefined') {
  module.exports = countWords;
}























// function countWords(input) {
//   if(input === ''){
//     return {};
//   }
//   let propArr = input.split(' ');
//   let result = {};
//   for(let i=0 ; i<propArr.length ; i++){
//     if(result.hasOwnProperty(propArr[i])){
//       result[propArr[i]]++;
//     }else{
//       result[propArr[i]]=1;
//     }
//   }

//   return result;
// }

// // keep this code for testing
// if(typeof window === 'undefined') {
//   module.exports = countWords;
// }
