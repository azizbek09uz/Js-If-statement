`use strict`;

let a = +prompt('Son kiriting', ''), 
b = +prompt('Son kiriting', ''), 
c = +prompt('Son kiriting', ''),
d = +prompt('Son kiriting', '');


if (a === b && a === c) {
    alert(`${d} raqami turtinchi, qolganlari bir biriga teng`)
}
else if (b === c && b === d){
    alert(`${a} raqami birinchi, qolganlari bir biriga teng`)
}
else if (a === c && a === d){
    alert(`${b} raqami ikkinchi, qolganlari bir biriga teng`)
}
else if (a === b && a === d){
    alert(`${c} raqami uchinchi, qolganlari bir biriga teng`)
}
else{
    alert('Ushta bir hil son yozilmagan')
}