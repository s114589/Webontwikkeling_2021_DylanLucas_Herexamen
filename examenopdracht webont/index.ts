    import { string } from "yargs";
const { MongoClient, ObjectId } = require('mongodb');
const uri = "mongodb+srv://s114589ap:s114589@herexamenwebontwikkelin.69edp.mongodb.net/WebOntwikkeling?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const DATABASE = "WebOntwikkelingExamen";
const COLLECTION = "Ants";

const express = require('express');
const app = express();
const ejs= require('ejs');


interface Ants{
    name:string;
    queenSize:string;
    workerSize:string;
    polymorphic:string;
    queensPerNest:number;
    imageLink:string;
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

const renderAllAnts = async (res:any) =>{
    let cursor = await client.db(DATABASE).collection(COLLECTION).find({});
    let allAnts = await cursor.toArray();
    res.render("landing",{Ants:allAnts})
}

app.get('/',async(req:any,res:any)=>{
    try{  
        let cursor = await client.db(DATABASE).collection(COLLECTION).find({});
        let allAnts = await cursor.toArray();
        res.render("landing",{Ants:allAnts})
    }catch(exc){console.log("failure")}
});

app.get('/landing/:x',async (req:any,res:any)=>{
    try{
        let x = req.params.x;
        let ant = await client.db(DATABASE).collection(COLLECTION).findOne({_id:ObjectId(x)});

        res.render("Ants",{ants:ant})
    }
    catch(exc){console.log(exc)};
})

app.get('/addAnt',(req:any,res:any)=>{
    res.render("addAnt",{info:undefined})
});

app.post('/addAnt',async(req:any,res:any)=>{
    try{
        let newAnt:Ants={
            name: req.body.name,
            queenSize: req.body.queenSize,
            workerSize: req.body.workerSize,
            polymorphic: req.body.polymorphic,
            queensPerNest: req.body.queensPerNest,
            imageLink:req.body.imageLink
        }
        await client.db(DATABASE).collection(COLLECTION).insertOne(newAnt);
        renderAllAnts(res);
    }
    catch(exc){console.log(exc);}
});

app.get('/removeAnt/:x',async (req:any,res:any)=>{
    try{
        let x = req.params.x;
        await client.db(DATABASE).collection(COLLECTION).deleteOne({_id:ObjectId(x)})
        renderAllAnts(res);
    }
    catch(exc){console.log(exc)}
})



app.listen(app.get('port'), 
    ()=>console.log( '[server] http://localhost:' + app.get('port')));