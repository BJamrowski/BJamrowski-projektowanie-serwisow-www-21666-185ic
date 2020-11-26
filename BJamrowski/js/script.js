/**Second Version***
KILL THE BIRDS PURE CSS GAME - NO JS
------------------------------
Author: Elad Shechter
https://twitter.com/eladsc
https://il.linkedin.com/in/eladshechter/
https://medium.com/@elad


MY FACEBOOK GROUP
https://www.facebook.com/groups/css.master/


The Bird taken from:
-------------------------------
https://codepen.io/fixcl/pen/KhAqa

Author: Marco Barría 
https://twitter.com/marco_bf

******/
const wrapper = document.querySelector('wrapper');
var birds = 0;
function youwon(){
    birds++;
    console.log(birds);
}

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

if(birds > 10){
    fade(document.window);
}