const multiplyText = (amount:number,text:string = "default",appendix:string=""):string =>{
    let result:string = text;
    for (let i = 0; i < amount-1; i++){
        result = text + " " + result;
    }
    result += appendix;
    return result;
}
console.log(multiplyText(3,"Dylan",));
console.log(multiplyText(5,undefined,"?"));