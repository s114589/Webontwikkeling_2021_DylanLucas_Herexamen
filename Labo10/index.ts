import { string } from "yargs";
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://s114589ap:s114589@herexamenwebontwikkelin.69edp.mongodb.net/WebOntwikkeling?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const DATABASE = "WebOntwikkeling";
const COLLECTION = "movies";

interface Movie{
    name:string;
    myScore:number;
    timesViewed:number;
}

/*let movies:Movie[] = [
    {name: "The Matrix", myScore: 90, timesViewed: 10},
    {name: "Pulp Fuction", myScore: 100, timesViewed: 100},
    {name: "Monster Hunter", myScore: 5, timesViewed:1},
    {name: "Blade Runner", myScore: 100, timesViewed:30},
    {name: "Austin Powers", myScore: 80, timesViewed:10},
    {name: "Jurasic Park 2", myScore: 40, timesViewed:1},
    {name: "Ichi the Killer", myScore: 80, timesViewed:1}
];*/

const doDBCalls = async() =>{
    try{
        await client.connect();
        
        console.log("_______________________");
        console.log("FIRST MOVIE")
        console.log("_______________________");
        let firstMovie = await client.db(DATABASE).collection(COLLECTION).findOne({});
        console.log(firstMovie);

        
        console.log("_______________________");
        console.log("SCORES");
        console.log("_______________________");
        let cursor = await client.db(DATABASE).collection(COLLECTION).find({});
        let allMovies = await cursor.toArray();
        allMovies.forEach((m:Movie) => {
            console.log(m.myScore)
        });

        
        console.log("_______________________");
        console.log("SUM TIMES VIEWED");
        console.log("_______________________");
        let timesViewedTotal = 0;
        allMovies.forEach((m:Movie) => {
            timesViewedTotal += m.timesViewed;
        });
        console.log(timesViewedTotal);


        console.log("_______________________");
        console.log("SCORE TUSSEN 30 EN 85");
        console.log("_______________________");
        cursor = await client.db(DATABASE).collection(COLLECTION).find({myScore:{$gt:30,$lt:85}});
        let scores30_85 = await cursor.toArray();
        scores30_85.forEach((m:Movie)=>{
            console.log(m.name, m.myScore);
        })

        console.log("_______________________");
        console.log("SCORE TUSSEN 30 EN 85 OR VIEWED = 1");
        console.log("_______________________");
        cursor = await client.db(DATABASE).collection(COLLECTION).find({
            $or:[{myScore:{$gt:30,$lt:85}},{timesViewed:1}]
            });
        let scores30_85ORViewedOnce = await cursor.toArray();
        scores30_85ORViewedOnce.forEach((m:Movie)=>{
            console.log(m.name, m.myScore, m.timesViewed);
        })

        






        //await client.db(DATABASE).collection(COLLECTION).insertMany(movies);

        /*let cursor = await client.db(DATABASE).collection(COLLECTION).find({});
        let result = await cursor.toArray();
        console.log(result);*/
    }
    catch(exc){
        console.log(exc);
    }
    finally{
        await client.close();
    }
}
doDBCalls();

export {};