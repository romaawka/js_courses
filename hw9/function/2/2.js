function calcTwoNumbers(firstNum,secondNum,threeNum){
    for(let a = 1;a < secondNum;a++){
        firstNum *= firstNum;
    
    }    
    
    return firstNum * threeNum
}
console.log(calcTwoNumbers(3,2,2))


let calcTwoNumber = function(num1,num2,num3) {
    for(let a = 1;a < num2;a++){
        num1 *= num1;
    }    
    
    return num1 * num3
}
console.log(calcTwoNumber(3,2,2))
