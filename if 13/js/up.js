'use strict'

let a = prompt('Birinchi sonni kiriting', '')
let b = prompt('Ikkinchi sonni kiriting', '')
let c = prompt('Uchinchi sonni kiriting', '')



if((a > b && a < c) || (a < b && a > c)){
    alert(`${a} soni urtancha`)
}
else if ((b > a && b < c) || (b < a && b > c)){
    alert(`${b} soni urtancha`)
}
else{
    alert(`${c} urtancha`)
}