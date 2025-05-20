

function sumSquares(list){
    if (list.length === 0) return 0;

    let temp = list[0];
    let rest = list.slice(1);

    if (Array.isArray(temp)) {
        return sumSquares(temp) + sumSquares(rest);
    } else {
        return temp * temp + sumSquares(rest);
    }
}

l = [[1,[2]],3]; 
let output  = sumSquares(l);

console.log(output);
