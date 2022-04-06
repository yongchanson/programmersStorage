// function solution(s) {
//   // sort = s.sort(function (x, y) {
//   //   return x > y ? -1 : 1;
//   // });
//   let sort = [...s].sort((a, b) => b - a);

//   // console.log(`s : ${s}`);
//   max1 = 0;
//   max2 = 0;
//   result = 0;
//   console.log(`sort[] : ${sort}`);

//   for (i = 0; i < s.length; i++) {
//     if (sort[0] == s[i]) {
//       max1 += i;
//       console.log(`max1 : ${max1}`);
//     } else if (sort[1] == s[i]) {
//       max2 += i;
//       console.log(`max2 : ${max2}`);
//     }
//   }
//   for (i = max2; i <= max1; i++) {
//     result += s[i];
//   }

//   return result;
// }
function solution(n) {
  var answer = 0;
  let i;
  for (i = 1; i <= Math.sqrt(n); i++) {
    if (n % i == 0) {
      if (i * i == n) {
        //i의 제곱이 n인경우 처리
        answer += i;
      } else {
        answer += i;
        answer += n / i;
      }
    }
  }

  return answer;
}
// for (let i = 0; i < input.length; i++) {
// process.stdout.write(`#${i + 1} `);
console.log(solution(12));
//   }
