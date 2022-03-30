function solution(s) {
  var answer = "";
  let L2 = s.length / 2;

  answer =
    s.length % 2 == 0 ? ss[L2 - 1] + s[L2] : (answer = s[Math.ceil(L2 - 1)]);

  return answer;
}

let input = [
  // TC: 1
  [44, 1, 0, 0, 31, 25],
  [31, 10, 45, 1, 6, 19],
  // TC: 2
  [4, 6],
  // TC: 3
  [1, 100],
];

// for (let i = 0; i < input.length; i++) {
// process.stdout.write(`#${i + 1} `);
console.log(solution("abcde"));
//   }
