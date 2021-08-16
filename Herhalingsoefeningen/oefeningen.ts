//1
interface ZoekGetal {
    (getallen: number[],getal:number):number
}

let getallen: number[] = [1,3,5,7,9,13];

let zoekGetal:ZoekGetal = (getallen:number[],getal:number):number =>{
    for (let i:number=0;i<getallen.length;i++) {
        if(getallen[i]===getal){
            return i
        }
    }
}

//2
interface Person {
    name:string,
    age:number
}
let personen:Person[] = [
    {name:`Andie`,age:36},
    {name:`Donald`,age:76},
    {name:`Joe`,age:78},
    {name:`Bompa`,age:75},
]
interface ZoekPersonenMetLeeftijd {
    (personen: Person[], leeftijd: number):Person[]
}
let zoekPersonenMetLeeftijd:ZoekPersonenMetLeeftijd = (personen:Person[],leeftijd:number):Person[]=>{
    for (let i:number=0;i<personen.length;i++) {
        if(personen[i].age===leeftijd)
        return personen//afwerken
    }
}