`use strict`;

let a = +prompt('Son kiriting', ''), 
b = +prompt('Son kiriting', ''), 
c = +prompt('Son kiriting', '');


if (a === b) {
    alert(`${c} raqami uchinchi`)
}
else if (b === c){
    alert(`${a} raqami birinchi`)
}
else if (a === c){
    alert(`${b} raqami ikkinchi`)
}
else{
    alert('Ikta bir hil son yozilmagan')
}