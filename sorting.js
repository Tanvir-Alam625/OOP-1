// number sorting
const someNumbers = [34,8,679,364,357,345,7,4,53,3435,4,66,,4,3,3,23,34];
const sortedNumber = someNumbers.sort(function(a, b){
    return a-b;
}).reverse()
console.log(sortedNumber);