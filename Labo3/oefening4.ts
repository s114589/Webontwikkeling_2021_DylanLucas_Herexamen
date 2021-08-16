import * as chalk from "chalk";

enum colors4 {
    Red,
    Green,
    Blue
};
const multiplyTextColor = (amount:number,text:string = "default",color:colors4,appendix:string=""):string =>{
    let result:string = text;
    for (let i = 0; i < amount-1; i++){
        result = text + " " + result;
    }
    result += appendix;
    if (color===colors4.Red) {
        return chalk.red(result)
    }
    if (color===colors4.Green) {
        return chalk.green(result)
    }
    if (color === colors4.Blue) {
        return chalk.blue(result)
    }

}
multiplyTextColor(3,"dylan",colors4.Red,"!")