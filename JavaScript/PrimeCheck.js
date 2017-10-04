function solve(arg){

    let n = arg[0];
    let a = n === 2;
    let b = n === 3;
    let c = n === 5;
    let d = n === 7;
    
    if(a || b || c || d){
        console.log('true')
    }
    else{
        if((n % 2 === 0 || n % 3 === 0 || n % 5 === 0 || n % 7 === 0) ^ n === 1) {
             console.log('false');
        }
        else{
            console.log('true');
        }   
    }
    
}
//solve(7)