`use strict`;

let x = +prompt('Birinchi sonni kiriting', ''), 
y = +prompt('Ikkinchi sonni kiriting', ''), 
z = +prompt('Uchinchi sonni kiriting', '');


if (x + y > x + z && x + y > y + z) {
    alert(`${x + y} ikkalasini yigindisi eng katta`)
}
else if(x + z > x + y && x+ z > y + z) {
    alert(`${x + z} ikkalasini yigindisi eng katta`)
}
else  {
    alert(`${y + z} ikkalasini yigindisi eng katta`)
}