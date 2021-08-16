const fetch1 = require('node-fetch');

let c1 = fetch1('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11000')
    .then((r:any)=>r.json());
let c2 = fetch1('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11001')
    .then((r:any)=>r.json());
let c3 = fetch1('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11002')
    .then((r:any)=>r.json());

    Promise.all([c1,c2,c3]).then(r=>{
        r.forEach(a=>console.log(a.drinks[0].strDrink));
    })