
function solve(args){
        let num = +args[0];
    
        if (num % 5 === 0 && num % 7 === 0) {
            console.log('true' + ' ' + num);
        }
        else {
            console.log('false' + ' ' + num);
        }
    }