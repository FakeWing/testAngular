var request = require ("request");
request.get(
    "http://localhost:8089/talleres",
    (error, response,body) =>{
        if(error){
            return console.log(error);
        }
        console.dir(JSON.parse(body));
    }
);  