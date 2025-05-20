function sumRange(num) {
    if (num <= 0) {
        return 0;
    }
    return num + sumRange(num - 1);
}

let sum = sumRange(5);

console.log(sum);