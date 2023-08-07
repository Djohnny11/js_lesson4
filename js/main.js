//функкция-это часть кода которая может быть вызвана повторно в разных местах вашего кода
// объявление функции происходит при помощи ключевого слова function
// пример создания функции function имя функции (){}

// function solve () {
//     let result=5+6;
//     return result
// }

// console.log(solve())

// function primer (min, max) {
//     let sum = 0;
//     for(let i=min;i<max;i++) {
//         sum=sum+i
//     }
//     return sum
// }

// console.log(primer(1,10))

// let random=Math.random(); //Math это работа с математикой. Math.random() отдает значения между 0,00001 до 0,999999
// console.log(random);

function rand(min, max) {
    return Math.floor(Math.random()*(max+1-min)+min);
}
console.log(rand(50,100)) //Math.round -округление по математическим правилам 
Math.floor() //округление до наименьшего целого значения 
Math.cell() //округление до ниибольшего целого значения


for(let i=0; i<10; i++) {
    let minNumber=+prompt('type a min number');
    let maxNumber=+prompt('type a  max number');
    let number1=rand(minNumber, maxNumber)
    let number2=rand(minNumber, maxNumber)
    let primer=+prompt(number1+ '+'+number2+'=')

    let answer =(number1+number2)==primer ? ' molodes': ' oshibka';
    alert(number1+"+"+number2+" = "+(number1+number2) +" vash otvet "+primer + ',' +answer);
}



