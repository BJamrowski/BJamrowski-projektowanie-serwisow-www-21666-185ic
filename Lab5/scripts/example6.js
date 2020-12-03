const axios = require('axios');

axios.get("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        var num = response.data[0].id + response.data[1].id;
        console.log(num);
        tableString = [response.data[0].name, response.data[1].name];
        console.log(tableString);
    })