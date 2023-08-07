function rand(min, max) {
    return Math.floor(Math.random()*(max+1-min)+min)
}

let howMany=+prompt("How many ex do you want?")
let min=+prompt("numb1")
let max=+prompt("numb2")
for(let i=0; i<howMany; i++) {
    let number1=rand(min, max)
    let number2=rand(min,max)
    let symbol=rand(1,4)
    if (symbol==1){
        sum=number1+number2
        symbol="+"
    }else if (symbol==2) {
        sum=number1-number2
        symbol="-"
    }else if (symbol==3) {
        sum=number1/number2
        symbol="/"
    }else if (symbol==4){
        sum=number1*number2
        symbol="*"
    }
    let answer=prompt(number1+symbol+number2+"=")
    console.log(sum==answer ? 'ваш ответ верный'+answer:"Ваш ответ неверный"+answer+"верный ответ "+sum)

}
