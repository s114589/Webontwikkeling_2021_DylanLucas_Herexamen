interface Pokemon {
    name: string
    xp: number
    type:string
}

let starterPokemonGen1 : Pokemon[] = [
    {name: `Bulbasaur`,xp:30,type:`grass`},
    {name: `Charmander`,xp:50,type:`fire`},
    {name: `Squirtle`,xp:45,type:`water`}
];
let starterPokemonGen2 : Pokemon[] = [
    {name: `Chikorita`,xp:30,type:`grass`},
    {name: `Cyndaquil`,xp:50,type:`fire`},
    {name: `Totodile`,xp:45,type:`water`}
];

//spread
let starters:Pokemon[] = [...starterPokemonGen1,...starterPokemonGen2];

//Map
let names:string[] = starters.map(p=>p.name);

//Filter
let weakPokemon:Pokemon[] = starters.filter(e=>e.xp <40);

//Combineren (Map+Filter)
let weakPokemonNames:string[] = starters
    .filter(p=>p.xp<40)
    .map(p=>p.name);

//Reduce
let sumOfAllXp:number = starters.reduce((sum,p) => sum + p.xp , 0);

let strongetsPokemon: Pokemon = starters.reduce(
        (currentStrongestPokemon,pokemon)=>{
            if (currentStrongestPokemon.xp > pokemon.xp) return currentStrongestPokemon
            else return pokemon
        }
        ,{name: ``,xp:-10000,type:``}
    );

//Combineren (Reduce+Filter)
let sumOfAllXpOfWeakPokemon:number = starters
    .filter(p=>p.xp<40)
    .reduce((sum,p)=> sum + p.xp , 0)

//Sorteren
let sortedStarters:Pokemon[] = [...starters].sort((a,b)=>{
    if(a.xp > b.xp) return -1;
    if(a.xp < b.xp) return 1;
    if(a.name<b.name) return -1;
    if(a.name>b.name) return 1;
    return 0;
    });
console.log(sortedStarters)