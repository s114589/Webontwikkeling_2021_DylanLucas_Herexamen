import { Console } from "node:console";

let getallen: number[] = [];

for(let i=100;i<=200;i++){
    getallen.push(i);
}
let i = 0;
while (i<getallen.length){
    console.log(getallen[i]);
    i++;
}

for(let i=0;i<=100;i++){
    if (getallen[i]%3!=0) {
        console.log(getallen[i]);
    }
}