function theBiggestOfThree (args){
    let firstNum = +args[0],
        secondNum = +args[1],
        thirdNum = +args[2];
if(firstNum >= secondNum && firstNum >= thirdNum) {
    console.log(firstNum);
}
else if(secondNum >= firstNum && secondNum >= thirdNum){
    console.log(secondNum);
}
else{
    console.log(thirdNum)
}
}
//theBiggestOfThree(['5', '2', '2'])