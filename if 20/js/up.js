`use strict`;

let a = +prompt('Birinchi sonni kiriting', ''), 
b = +prompt('Ikkinchi sonni kiriting', ''), 
c = +prompt('Uchinchi sonni kiriting', '');

if (b - c < b || c - b < b){
    alert(`${a} ga eng yaqin son ${b}, ${a} va ${b} ning orasidagi masofa ${a - b || b - a}`)
}
else if (c - b < c || b - c < c){
    alert(`${a} ga eng son ${c}, ${a} va ${c} ning orasidagi masofa ${a - c || c - a}`)
}
else {
    alert('Sonlar tug`ri berilmagan')
}