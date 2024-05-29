'use strict';


let a = prompt('Birinchi sonni kiriting', ''),
b = prompt('Ikkinchi sonni kiriting', ''), c = prompt('Uchinchi sonni kiriting', '');

if (a < b && a < c) {
    alert(`${a} soni eng kichigi`)
}
else if (b < c && b < a) {
    alert(`${b} soni eng kichigi`)
}else{
    alert(`${c} soni eng kichigi`)
}

if (a > b && a > c) {
    alert(`${a} soni eng kattasi`)
}
else if (b > c && b > a) {
    alert(`${b} soni eng kattasi`)
}else{
    alert(`${c} soni eng kattasi`)
}