`use strict`


let x1 = +prompt('x1 ni kiriting', ''), 
y1 = +prompt('y1 ni kiriting', ''),
x2 = +prompt('x2 ni kiriting', ''),
y2 = +prompt('y2 ni kiriting', ''),
x3 = +prompt('x3 ni kiriting', ''),
y3 = +prompt('y3 ni kiriting', ''),
x4, y4

x4 = x1 + x2 - x3
y4 = y1 + y3 - y2

alert(`x4 = ${x4} va y4 = ${y4} || kordinata: ${x4};${y4}`)