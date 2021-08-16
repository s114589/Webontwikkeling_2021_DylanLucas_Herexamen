let namess: string[] = [`joske`,`franske`,`donald`,`achmed`]

let capitalNames1:string[] = [];
namess.forEach(e=>{
    capitalNames1.push(e.toUpperCase());
})
console.log(capitalNames1);

let capitalNames2:string[] = namess.map(e=>e.toUpperCase());

console.log(capitalNames2);