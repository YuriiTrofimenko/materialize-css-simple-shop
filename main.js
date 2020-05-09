// Объявил константу с именем PI и проинициализировал ее числом 3.14
const PI = 3.14 // Тип данных - число
// Вызов встроенной функции с аргументом PI
console.log(PI)
// Переменные
var x = 4
x = x * x
console.log(x)

let y = 3
y = y * y
console.log(y)

y = 'Hello JS!' // Тип данных - строка
y = "Hello JS! - 2"
y = `Hello JS! - 3`
console.log(y)

// Переменная person1,
// которой присовено значение типа объект
// name и age - свойства объекта
let person1 = {
	name: "John",
	age: 20
}
console.log(person1.name)

// Объявление функции
// (Процедура)
function cube(x){
	console.log(x * x * x)
}
// Первый вызов функции
cube(5)

// Объявление функции
function square(x){
	return x * x
}
// Первый вызов функции
let squareResult = square(5)
squareResult = squareResult * 2
console.log(squareResult)

let fab = document.querySelector('#addProductButton')
console.log(fab)