`use strict`


let x = +prompt('X ni kiriting', ''),
y = +prompt('Y ni kiriting', '');

if (x === 0 && y === 0){
    alert(`Nuqta kordinata boshida yotipti. Kordinata: ${x},${y}`);
}
else if (x === 0 && y !== 0){
    alert(`Nuqta OY o\`qida joylashgan. Kordinata: ${x},${y}`);
}
else if (x !== 0 && y === 0){
    alert(`Nuqta OX o\`qida joylashgan. Kordinata: ${x},${y}`);
}
else{
    alert(`Nuqta ${x},${y} shu kordinatada joylashgan`)
}