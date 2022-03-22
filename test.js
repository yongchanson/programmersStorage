function solution(lottos, win_nums) {
    // let lottos = [44, 1, 0, 0, 31, 25];
    // let win_nums =[31, 10, 45, 1, 6, 19];
    //
    let basicPoint=0;
    let maxPoint=0;
    let answer = [];
    
    for(i=0; i<lottos.length; i++) {
        for(j=0; j<win_nums.length; j++) {
            if(lottos[i]==win_nums[j]) {
              basicPoint += 1;  
              
            }
        }
    }
    console.log(basicPoint);

    for(i=0; i<lottos.length; i++) {
        if(lottos[i]==0) {
            maxPoint += 1;
            
        }
    }
    console.log(maxPoint);

    maxPoint+basicPoint >= 2 ? answer.push(7- maxPoint - basicPoint) : answer.push(6);
    basicPoint >= 2 ? answer.push(7- basicPoint) : answer.push(6);
    

    return answer;
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
    console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35]));
//   }