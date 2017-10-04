function solve (arg){
    const R = 2;
    let x = arg[0],
    y = arg[1];
    let dist =Math.sqrt(x * x + y * y);
    if(dist <=  R) {
        console.log("yes" + " " + dist.toFixed(2) )
    }
    else{
        console.log(("no" + " " + dist.toFixed(2) ))
    }
    }
// solve(['-2', '0'])