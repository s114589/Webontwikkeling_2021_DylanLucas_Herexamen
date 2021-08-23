import { string } from "yargs";
const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://s114589ap:s114589@herexamenwebontwikkelin.69edp.mongodb.net/WebOntwikkeling?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const DATABASE = "WebOntwikkeling";
const COLLECTION = "movies";

const express = require('express');
const app = express();
const ejs= require('ejs');


interface Movie{
    name:string;
    myScore:number;
    timesViewed:number;
    year:number;
    _id?:string;
}

app.set('view engine', 'ejs');
app.set('port', 3000);
app.use(express.static('public'));
app.use(express.json({ limit: '1mb'}));
app.use(express.urlencoded({ extended:true}));

const doDBCALLS = async() => {
    try{
        console.log("Connecting to database");
        await client.connect();
        console.log("Connection succes")
    }
    catch(exc){
        console.log("Connection failed");
    }
}
doDBCALLS();

const renderAllMovies = async (res:any) =>{
    let cursor = await client.db(DATABASE).collection(COLLECTION).find({});
    let allMovies = await cursor.toArray();
    res.render("movies",{movies:allMovies})
}

app.get('/',(req:any,res:any)=>{
    res.render("landing")
});

app.get('/movies',async (req:any,res:any)=>{
    try{
        renderAllMovies(res);
    }
    catch(exc){console.log(exc)}
});

app.get('/movies/:x',async (req:any,res:any)=>{
    try{
        let x = req.params.x;
        let movie = await client.db(DATABASE).collection(COLLECTION).findOne({_id:ObjectId(x)});

        res.render("movie",{movies:movie})
    }
    catch(exc){console.log(exc)}
});

app.get('/addmovie',(req:any,res:any)=>{
    res.render("addmovie",{info:undefined});
});

app.post('/addmovie',async(req:any,res:any)=>{
    try{
        let newMovie:Movie={
            name: req.body.name,
            myScore: req.body.myScore,
            timesViewed: req.body.timesViewed,
            year: req.body.year
        }
        await client.db(DATABASE).collection(COLLECTION).insertOne(newMovie);
        renderAllMovies(res);
    }
    catch(exc){console.log(exc);}
});

app.get('/removemovie/:x',async (req:any,res:any)=>{
    try{
        let x = req.params.x;
        let movie = await client.db(DATABASE).collection(COLLECTION).deleteOne({_id:ObjectId(x)});
        renderAllMovies(res);
    }
    catch(exc){console.log(exc)}
});

app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));