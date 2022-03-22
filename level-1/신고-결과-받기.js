//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(id_list, report, k) {
    //report를 set을 이용하여 중복제거, 각 id 당 신고당한 횟수 reportedCount에 저장,
    //각 id를 신고한 사람 array를 reportedBy에 저장,
    //k번 이상 신고당한 id를 신고한 id가 받을 메일 수를 mailCount에 저장
    //answer에 mailCount에 저장된 값을 id_list와 같은 id 순서로 저장.
    const reportSet = new Set(report)
    const reportedCount = {}//{"id": Number(count)}
    const reportedBy = {}//{"id":[]}
    const mailCount = {}//{"id":Number(count)}
    id_list.forEach((element) => {//Initialization
        reportedCount[element] = 0
        mailCount[element] = 0
        reportedBy[element] = []
    })
    reportSet.forEach((element) => {
        const $id = (element.split(" "))[0]
        const $reported = (element.split(" "))[1]
        reportedCount[$reported] += 1
        reportedBy[$reported].push($id)
    })
    for (const reportedId in reportedCount) {
        if (reportedCount[reportedId] >= k) {
            reportedBy[reportedId].forEach((reporter) => {
                mailCount[reporter] += 1;
            })
        }
    }
    var answer = []
    id_list.forEach((element) => {
        answer.push(mailCount[element])
    })

    return answer
}
