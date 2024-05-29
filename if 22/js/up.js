`use strict`


let x = prompt('X ni kiriting', '');
let y = prompt('Y ni kiriting', ''); 
let chorak;

if (x > 0 && y > 0) {
  chorak = "1-chorak";
} 
else if (x < 0 && y > 0) {
  chorak = "2-chorak";
} 
else if (x < 0 && y < 0) {
  chorak = "3-chorak";
} 
else if (x > 0 && y < 0) {
  chorak = "4-chorak";
} 
else {
  chorak = "O'rta nuqta";
}

alert("Nuqta joylashgan koordinata choragi: " + quadrant);