const click = document.querySelector('.click');
const title = document.querySelector('.title');
click.addEventListener('click', () => {
    title.style.backgroundColor = 'rgb(137, 86, 161)';
})
title.addEventListener('copy', () => {
    alert("Skadi to nordycka bogini zimy oraz łowów.");
})
const akapit1 = document.querySelector('.akapit1');
const akapit2 = document.querySelector('.akapit2');
const akapit3 = document.querySelector('.akapit3');
akapit1.addEventListener('mousemove', () => {
    akapit1.style.color = '#4DAB38';
    akapit2.style.color = '#4DAB38';
    akapit3.style.color = '#4DAB38';
})
akapit1.addEventListener('mouseleave', () => {
    akapit1.style.color = '#fff';
    akapit2.style.color = '#fff';
    akapit3.style.color = '#fff';
})
akapit3.addEventListener('mouseenter', () => {
    akapit3.style.backgroundColor = '#40CDC1';
})
const image = document.querySelector('.imageSkadi');
image.addEventListener('contextmenu', () => {
    alert("Zacny obaraz, nieprawdaż?");
})
image.addEventListener('dblclick', () => {
    image.style.width = '35%';
})
const button = document.querySelector('.full');
var elem = document.documentElement;
button.addEventListener('click', () => {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
      } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem = window.top.document.body; //To break out of frame in IE
        elem.msRequestFullscreen();
      }
})
elem.addEventListener('fullscreenchange', () => {
    akapit2.style.backgroundColor = '#40CDC0';
})
elem.addEventListener('keydown', () => {
    title.style.backgroundColor = 'black';
})
elem.addEventListener('keyup', () => {
    title.style.backgroundColor = 'grey';
})


// zadania z funkcjami
const tekst = "txt sms";
function zad1(tekst){
    console.info("Liczba liter:", tekst.length);
}
zad1(tekst);

const tab = [1, 2, 3, 4];
var sum = 0;
function zad2(tab){
    for(i = 0; i < tab.length; i++){
        sum = sum + tab[i];
    }
    console.info("Suma:", sum);
}   
zad2(tab);

function zad3(tekst){
    tab3 = [...tekst];
    for(i = 0; i < tab3.length; i++){
        if(i%2 == 0){
            tab3[i] = tab3[i].toUpperCase();
        } 
    }
    console.info(tab3.join(""));
}
zad3(tekst);

var liczba1;
var liczba2;
function zad4(liczba1, liczba2){
    if(isNaN(liczba1) == true || isNaN(liczba2) == true)     console.info("Nie podano liczby");
    else console.info("Iloczyn:", liczba1*liczba2);
}
zad4(2,'gg');

function zad5(imie, miesiac){
    miesiac.toLowerCase();
    switch(miesiac){
        case 'grudzien':
        case 'styczen':
        case 'luty':
            console.info(imie, " jezdzi na sankach");
            break;
        case 'marzec':
        case 'kwiecien':
        case 'maj':
            console.info(imie, " chodzi po kaluzach");
            break;
        case 'czerwiec':
        case 'lipiec':
        case 'sierpien':
            console.info(imie, " sie opala");
            break;
        case 'wrzesien':
        case 'pazdziernik':
        case 'listopad':
            console.info(imie, " zbiera liscie");
            break;
        default:
            console.info(imie, " uczy sie JS");
            break;
    }
}
zad5("Ala", 'maj');


function zad6(str, chr){
    tab6 = str.split(chr);
    tab6.sort();
    
    console.info(tab6.join(chr));
}
zad6("Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka", "|");

function zad7a(...znaki){
    console.info(znaki.join(" , ").toUpperCase());
}
function zad7b(...znaki){
    zad3(znaki.join(" , "));
}
zad7a(["Ania" , "Marcin" , "Bartek" , "Piotr"]);
zad7b(["Ania" , "Marcin" , "Bartek" , "Piotr"]);

function checkFemale(imieF){
    if(imieF.lastIndexOf("a") == (imieF.length - 1)) {
        //console.info("kobieta");
        return true;
    }
    else 
    {   
        //console.info("mezczyzna");
        return false;
    }
}
if(checkFemale("Anna") == true) console.info("kobieta");

function countWomanInTable(arr){
    licznik = 0;
    for(i = 0; i < arr.length; i++)
    {
        name = [arr[i].split(" ",1)];
        //console.info(name);
        if(checkFemale(name) == true) licznik++;
    }
    console.info(licznik);
}
const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Beatczak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Betata Lecka",
    "Katarzyna Melecka"
]
countWomanInTable(users)