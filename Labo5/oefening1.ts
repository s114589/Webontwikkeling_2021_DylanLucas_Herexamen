interface PrintStuff {
    (amount: number, text:string):void
}
const printStuff:PrintStuff = (amount, text) => console.log(`Hello ${text}, you are number ${amount}`);

interface TwoDArray{
    (element1:string,element2:string):string[]
}
const twoDArray:TwoDArray = (element1, element2) => [element1, element2];

interface NumberToString {
    (number:number):string
}
const numberToString: NumberToString = number => `${number}`;