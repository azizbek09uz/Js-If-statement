`use strict`


let a = +prompt('Birinchi sonni kiriting', ''), 
b = +prompt('Ikkinchi sonni kiriting', ''),
c = +prompt('Uchinchi sonni kiriting', '')

if (a < b && b < c) {
    alert(`${2*a}, ${2*b}, ${2*c}`)
}
else {
alert(`${a*-1}, ${b*-1}, ${c*-1}`)
}