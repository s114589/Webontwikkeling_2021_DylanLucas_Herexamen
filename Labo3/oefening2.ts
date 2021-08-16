const reverseString = (text:string):string =>{
    let output:string="";
    for (let char of text){
        output = char + output;
    }
    return output;
}
console.log(reverseString("ANILEVOLI"))