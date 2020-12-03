var game = '{ "series": "Witcher", "part": [{ "number": 1, "characters": [ { "name": "Geralt", "age": 94},{ "name": "Zoltan", "age": 73},{ "name": "Dundelion", "age": 33}]}]}';


var gameJs = JSON.parse(game);  // make json into js object
//console.log(gameJs.part[0].characters[0].age)


/* ---------- zad 1 ---------- */
function getAge(jsonObj, x){    // wyciaganie wieku
    return jsonObj.part[0].characters[x].age;
}

function getNum(jsonObj){       // wyciaganie numeru
    return jsonObj.part[0].number;
}

function withCallNum(a , b){       // fun. zwrotna z suma
    var sum = a(gameJs,0) + b(gameJs)
    console.log(sum);
}   

function withCallWord(word1, word2){    // fun. zwrotna z tekstem
    console.log(`Here's first word "${word1()}" and second word "${word2()}"`)
}

/* ---------- zad 2 ---------- */
function getDataFetch(x,y){
    var obj = fetch("https://jsonplaceholder.typicode.com/users")   // get data from url
    .then(response => response.json())                              // promise into json object
    .then(obj => {
            console.log(obj[x].id + obj[y].id + " liczby");         // print numbers
            function stringReturn(obj){                             // function to create table with words
                return tableString = [obj[x].name, obj[y].name];
            };
            var arraySTr = stringReturn(obj)
            console.log(arraySTr + " obiekt tablica");
    })
    .catch(error => console.log(error))
    .finally(console.log("FINISHED"))
}

/* ---------- zad 3 ---------- */
async function example3(x,y){
    var fetchObj = await fetch("https://jsonplaceholder.typicode.com/users");
    var jsonObj = await fetchObj.json();
    console.log(jsonObj[x].id + jsonObj[y].id + " suma liczb")
    function stringReturn(obj){
        return tableString = [obj[x].name, obj[y].name];
    }
    var arraySTr = await stringReturn(jsonObj);
    console.log(arraySTr + " obiekt tablica");
}

/* ---------- zad 4 ---------- */
function example4(x,y){
    var obj;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://jsonplaceholder.typicode.com/users");  // set connection
    xhr.responseType = 'json';                                      // request JSON type
    xhr.send();

    xhr.onload = function(){
        obj = xhr.response;
        var num = obj[x].id + obj[y].id;                            // get 2 numbers and add them
        console.log(num);
        tableString = [obj[x].name, obj[y].name];                   // get 2 elemsnts and put them into array
        console.log(tableString);
    }
}

/* ---------- zad 6 ---------- */
// check file example6.js


/* ---------- wywolania ---------- */
withCallNum(getAge,getNum)
withCallWord(() => {    
                    return gameJs.series;
                },
            () =>{
                return gameJs.part[0].characters[0].name;
            })

getDataFetch(0,1);
example3(0,1);
example4(0,1);