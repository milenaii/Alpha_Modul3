
//Nasko ut I do not understand it
function theBiggestOfFTreeNumbers(args){
       let numbers=args.map(Number);
       numbers.sort((a,b)=>{
           return a-b;
       }).reverse();
       
       return numbers[0];
    }
    theBiggestOfFTreeNumbers(['-2', '4', '3']);
    

// Mimi 
// //that way gives 70 points, it is not ok for sorting
// function sortNums(args){
//     let a = +args[0],
//         b = +args[1],
//         c = +args[2];
//     let array = [a,b,c];
//     console.log((array.sort().reverse()).join(' '));

// }
// //sortNums(['-2', '4', '3']);