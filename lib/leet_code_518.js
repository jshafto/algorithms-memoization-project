// Work through this problem on https://leetcode.com/problems/coin-change-2/ and
// use the specs given there. Feel free to use this file for scratch work.


let change = function(amount, coins, memo = {}) {
    // base cases/check memo
    if (memo[`${amount}: ${coins}`]) return memo[`${amount}: ${coins}`];
    if (amount === 0) return 1;
    if (amount < 0 ) return 0;


    let count = 0;
    coins.forEach((coin, ind) => {
        if (coin <= amount) {
            console.log('coin: ', coin, 'amount: ', amount, 'count: ', count)
            count += change(amount - coin, coins.slice(ind), memo) ;

        }
    })

    memo[`${amount}: ${coins}`] = count;
    //console.log(memo)
    return count;

}

console.log(change(5, [1,2,5])) // should return 4
// console.log(change(3, [2])) // should return 0
// console.log(change(10, [10])) //should return 1
