import { isCompletionStatement } from "@babel/types";

interface ResultHandler {
    (number:number):void
}
const printToConsole = (number: number) : void => console.log(`the result is ${number}`)

let sum = (numbers:number[],resultHandler:ResultHandler,resultHandler2:ResultHandler): void =>{
    let total:number=0;
    for (let i = 0; i < numbers.length; i++) {
        total +=numbers[i];
    }
    if(total>=10){
        resultHandler(total);
    }
    else {
        resultHandler2(total);
    }
}

sum([2,5],printToConsole,number =>console.log(`the result ${number } is a very  small number`));