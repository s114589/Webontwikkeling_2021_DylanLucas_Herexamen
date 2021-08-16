const fetch2 = require('node-fetch');

const doFetch = async()=>{
    let pageNumber = 1;
    while(true){
        let responce = await fetch2('https://icanhazdadjoke.com/search?term=dog&limit=5&page=1', {
            headers: {
                'Accept': 'application/json'
            }
        });
        let json = await responce.json();
        json.result.forEach((j:any)=>console.log(j.joke));
        if(pageNumber >=json.next_page){
            break;
        }
        pageNumber++;
    }
}
doFetch();