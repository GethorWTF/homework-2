// 1 упражнение
const x = prompt("Число", "");
let a = +x
if (a < 0) console.log('Число отрицательное')
else if (a > 0) console.log('Число положительное')
else if (a == 0) console.log('0')

// 2 упражнение
function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
let one = randomInt(-100, 100)
let two = randomInt(-100, 100)
let three = randomInt(-100, 100)

console.log(
	one, two, three
)

if (one < two) {
    if (one < three){
        console.log('minimum one = ' + one)
    } else {
        console.log('minimum three = ' + three)
    }
} else {
    if (two < three) {
        console.log('minimum two = ' + two)
    } else {
        console.log('minimum three = ' + three)
    }
}

//3 упражнение
    let man1 = +prompt("Кэш первого", "")
    let man2 = +prompt("Кэш второго", "")
    let total = man1 + man2;
    alert(
    total > 2000
    ? "Пить пиво на майорке"
    : "Пить пиво"
    )

//4 упражнение
    let age = +prompt("Введите возвраст", "")
    alert
    (age >= 20 && age < 27 
    ? "Лови повестку" 
    : "Не в этот раз"
    )

//5 упражнение
    let bus = +prompt("Номер маршрутки", "")
    alert(
    bus === 7 | 
    bus === 225 | 
    bus === 255
      ? "мой бас"
      : "Ожидаем еще")

//6 упражнение 
    let data = new Date()
    let day = data.getDay()
    let week = [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
    ];
    alert(
      day > 0 && day < 6
        ? `сегодня ${week[day]} пора учиться`
        : `сегодня ${week[day]} отдыхай`
    )

//7 упражнение

let x = +prompt('Введите число от -20 до 20')
if (x > 20)
x = 20
if (x < -20)
x = -20
alert('Первое число, которое ввели ' + x)
let y = +prompt('Введите число от -20 до 20')
if (y > 20)
y = 20
if (y < -20)
y = -20
alert('Второе число, которое ввели ' + y)
if (x <= 1 && y >= 3 || y < 0)
alert(y + x)
else alert('Неверно')


// 8 упражнение
    let x = 3;
    let y = 17;
    alert((x > 2 && x < 11) || (y >= 6 && y < 14) ? x + 2 : x + 5);

// 9 упражнение
    const person = prompt("Имя", "John")
    if (person === "" || person === null) alert("Ошибка")
    else alert(`Hello ${person}`)

// 10 упражнение 
      let user = confirm
      user = hello()
      function hello() {
      const lang = prompt("Введите 'ua' или 'en' или 'de'")
      let greeting = ""
      if (!(lang === "en" || lang === "ua" || lang === "de")) {
        return alert("Не правильно")
      }
      if (lang === "en") greeting = "Hello"
      else if (lang === "ua") greeting = "Привет"
      else if (lang === "de") greeting = "Hallo"
      alert(greeting)
    }

// через switch
      let user = confirm
      user = hello()
    function hello() {
      const lang = prompt("Введите 'en' или 'ua' или 'de'")
      let greeting = ""
      switch (lang) {
        case "en":
          greeting = "Hello"
          break;
        case "ua":
          greeting = "Привет"
          break;
        case "de":
          greeting = "Hallo"
          break;
        default:
          greeting = "Не правильно"
          break;
      }
      alert(greeting)
    }

// 11 упражнение
    let str = '.'
    for (let i = 0; i < 5; i++) {
    str = str + '#.'
    }
    console.log(str)

// 12 упражнение
let username = prompt ('Как тебя зовут?')
let str = '';
for (i = 1; i <= 4; i++) {
    if(i==3) str+=`Happy birthday, dear ${username} \n` 
    else str += 'Happy birthday to you \n'
}
console.log(str); 

// 13 упражнение
do {
  var answer = confirm("test")
} while (answer === false)

// 14 упражнение
    function addition(max){

        let numb = 0
        for (let x = 0; x < max; x++){
            if (x % 2 !== 0) numb += x
        }
        alert(numb)
    }
    addition(+prompt('Введите число'))

// 15 упражнение
let i = 0
while (true) {
  let rand = Math.random()
  i++
  if (rand > 0.9) {
    console.log(`random: ${rand}, iter: ${i}`)
    break
  }
}

//16 упражнение 
let chart = ''
function multiply() {
    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            chart  += (j*i) + " "
        }
    console.log(i + " x")
    console.log(chart)
        chart = ''
    } 

}
multiply(); 

// 17 упражнение

sum = 0;
endless: for (i = 0;; i++) {
    const user = Number(prompt("Введите число"))
    if (user) {
        sum = +sum + user
        continue endless
    } else {
        break;
    }
}
let compose = sum / i
console.log('Количество чисел ' + i + '')
console.log('сумма:' + ' ' + sum);


// 18 упражнение 
    const password = "1234"
    let user = ""
    circuit: while (user !== password) {
      user = prompt("Ваш пароль")
      if (user === null) {
        let cancel = confirm("Вы уверены, что хотите отменить авторизацию?")
        if (cancel) break
        if (!cancel) continue circuit
      }
      alert("Не верно")
      user = prompt("Ваш пароль")
    }
    if (user === password) alert("Вы успешно авторизованы")


// 19 упражнение 

for (val = 1; val < 51; val++) {
    conclusion = ''
    if (val % 3 == 0) {
        conclusion += 'Fizz'
    } 
    if (val % 5 == 0) {
        conclusion += 'Buzz'
    }
    console.log(conclusion == '' ? val : conclusion)
}