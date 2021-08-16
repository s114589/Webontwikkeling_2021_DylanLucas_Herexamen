import { number } from "yargs";

const express = require('express');
const app = express();
const ejs= require('ejs');
const fetch = require('node-fetch')
app.set('view engine','ejs')
app.set('port', 3000);

let thisisme = {
    name:"dylan",
    age:20,
    profilePic:"https://images3.persgroep.net/rcs/gQGzmL2nvz0rjOP77L4S8KxXYtc/diocontent/70063321/_crop/0/0/900/480/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8"
}

let pikachu:any = {};
const doFetch = async () =>{
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    pikachu = await response.json();
}
doFetch();

app.get('/',(req:any,res:any)=>{
    res.render("index")
});
app.get('/whoami',(req:any,res:any)=>{
    res.render("whoami",{data:thisisme});
});
app.get('/whoamijson',(req:any,res:any)=>{
    res.json(thisisme);
});
app.get('/pikachujson',(req:any,res:any)=>{
    res.json(pikachu);
});
app.get('/pikachuhtml',(req:any,res:any)=>{
    res.render('pikachu',{pikachudata: pikachu})
});

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));


