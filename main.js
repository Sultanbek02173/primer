let num = 15;
const num1 = 20;

num = 40;
num = 'Hello'
console.log(`Number ${num} `);

const func1 = () => {
    console.log('This is function');  
}

func1();

if(5 < 10){
    console.log('5 меньше');
}else if(5 == 5){
    console.log('5 = 5');
}else{
    console.log('5 больше');
}

5 < 10 
    ? console.log('5 меньше')
    : 5 == 5 
    ? console.log('5 = 5')
    : console.log('5 больше');
    
// let i = 0;

// while(i <= 7){
//     console.log(i);
//     i++;
// }

// for(let i = 0; i <= 7; i++){}
// console.log(i);


const func = () => {
    return 'Hello'
}

console.log(func());
document.write(func());
// alert(func());

let mas = [10, 21, 30, [1, 2, 3], 21, 40];
console.log(mas[mas.length - 1]);

for(elem in mas){
    document.write(`<h1>${mas[elem]}</h1>`)
}

document.write(mas.map((elem) => {
    return elem * 2;
}))

console.log(mas.filter((elem) => {
    return elem % 2 == 0;
}));


let obj = {
    map: function(elem){
        return elem
    },
    name: 'scsc'
}

// console.log(obj.name);

let apple = 45;
let Apple = "40";
console.log(apple);

// alert(str);
// let str = 'scac'


let inp = document.getElementById('inp');

inp.onchange = (event) => {
    console.log(event);
}

let numbe = 45;
let str = 'SCac'
let obje = {name: 'saca'}

console.log(typeof obje);
