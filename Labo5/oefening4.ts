const calculateDogAge = (age:number):number => {
    let dogAge:number=age*7;
    return dogAge;
}
console.log(calculateDogAge(5));

const calculateAnimalAge = (age:number,conversion:number):number =>{
    let animalAge:number=age*conversion;
    return animalAge;
}
console.log(calculateAnimalAge(3,5));
