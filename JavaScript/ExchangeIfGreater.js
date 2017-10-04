function ExchangeIfGrader(args){
    let a = args[0],
    b = args[1];

    if(a < b){
        console.log(a + " " + b);
    }
    else{
        console.log(b + " " + a);
    }
}