function solve(arg){

    let num = arg[0];
    let third = Math.floor((num / 100) % 10); 
    
    if(third === 7){
    console.log('true')
    }
    else{
    console.log('false' +" "+ third)
    }

}
//solve(['5']);