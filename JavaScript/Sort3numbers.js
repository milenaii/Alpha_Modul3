function sortThreeNumbers(args) {
    let a = +args[0],
        b = +args[1],
        c = +args[2];

    if (a >= b) {
        if (a >= c) {
            if (b >= c) {
                let sortNums = [a,b,c];
                console.log(sortNums);
            }
            else if (c > b) {
                console.log(a, c, b);
            }
        }
        else if (c > a) {
            console.log(c, a, b);
        }
    }
    else if (b > a) {
        if (b >= c) {
            if (a >= c) {
                console.log(b, a, c);
            }
            else if (c > a) {
                console.log(b, c, a);
            }
        }
        else if (c > b) {
            console.log(c, b, a);
        }
    }
}
sortThreeNumbers(['2', '1', '-1']);