function solution(participant, completion) {
    var answer = '';
    let stack = [];
    let num = 0;
  
    for (let i = 0; i < participant.length; i++) {
      while (stack.length==0 || stack[stack.length-1] != completion[i]) {
        stack.push(++num);
        console.log(stack);
      }
  
      if (stack[stack.length-1] == completion[i]) {
        stack.pop();
        console.log(stack);
      } 

      if(stack.length == 1) break;
    }

  
     return stack;
  }

let input = [
    // TC: 1
    [44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19],
    // TC: 2
    [4, 6],
    // TC: 3
    [1, 100],
];
  

// for (let i = 0; i < input.length; i++) {
    // process.stdout.write(`#${i + 1} `);
    console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
//   }