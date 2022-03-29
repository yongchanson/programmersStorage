//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(n) {
  var answer = 0;
  for (let divisor = n - 1; divisor >= 2; divisor--) {
    n % divisor === 1 ? (answer = divisor) : null;
  }
  return answer;
}

//정답 2 - yongchanson
function solution(price, money, count) {
  var answer = 0;
  let sum = price;

  for (i = 2; i <= count; i++) {
    sum += price * i;
  }

  if (sum <= money) {
    answer = 0;
  } else {
    answer = sum - money;
  }
  return answer;
}
