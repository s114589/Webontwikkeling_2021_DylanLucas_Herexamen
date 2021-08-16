interface Calculation {(a:number,b:number):number}

const printCalculationResult = (a: number, b: number, func:Calculation):void =>{
    console.log(func(a,b));
}


const add: Calculation = (a,b) =>a+b;
const mult:Calculation = (a,b) =>a*b;

printCalculationResult(5,7,add);
printCalculationResult(5,7,mult);