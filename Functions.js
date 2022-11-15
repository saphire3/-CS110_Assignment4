function factorial(number) {
    var summ = 1
    for (var i = 1; i <= number; i++) {
        summ *= i
    }
    return summ;
}

//console.log(factorial(3));



function gcd(a, b) {
    let temp = a % b;
    a = b;
    b = temp;

    while (temp > 0) {
        temp = a % b;
        a = b;
        b = temp;
    }
    return a;
}



function hcf(a, b){
    console.log(gcd(a, b));
}
//console.log(gcd(7854, 4746));

function toHexadecimal(number) {
    const arr = ['A', 'B', 'C', 'D', 'E', 'F'];
    let remainder = 0;
    let result = '';
    let temp = number;

    while (temp > 0) {
        remainder = temp % 16;
        temp = Math.floor(temp / 16);

        if (remainder > 9) {
            result += arr[remainder - 10];
        } else {
            result += '' + remainder;
        }
    }

    var retValue = '';
    for (index = result.length - 1; index >= 0; index--) {
        retValue += result[index];
    }

    return retValue;
}


//console.log(toHexadecimal(1200));




module.exports = {
    factorial: factorial,
    gcd: gcd,
    hcf: hcf,
    toHexadecimal: toHexadecimal,
}

