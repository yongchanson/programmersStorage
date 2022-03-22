//https://github.com/codeisneverodd/programmers-coding-test
//완벽한 정답이 아닙니다.
//정답 1 - codeisneverodd
function solution(cacheSize, cities) {
    var answer = 0;
    let cache = []
    if (cacheSize === 0) return 5 * cities.length
    for (const city of cities) {
        const cityLC = city.toLowerCase()
        if (cache.includes(cityLC)) {
            cache.splice(cache.indexOf(cityLC), 1)
            cache.unshift(cityLC)
            answer += 1
        } else {
            if (cache.length >= cacheSize) cache.pop()
            cache.unshift(cityLC)
            answer += 5
        }
    }
    return answer;
}
