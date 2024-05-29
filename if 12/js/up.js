'use strict'


let a = prompt("Birinchi sonni kiriting", '')
let b = prompt("Ikkinchi sonni kiriting", '')
let c = prompt("Uchinchi sonni kiriting", '')


if ( a > b && c > b) {
    alert(`${b} soni kichik`)
}
else if (a > c && b > c){
    alert(`${c} soni kichik`)
}
else{
    alert(`${a} soni kichik`)
}