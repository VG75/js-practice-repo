function power(num, exp) {
    if (exp == 0) return 1;

    return num * power(num, exp - 1);
}

let output = power(2,0);
console.log(output);