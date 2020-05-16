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
// Получение управления элементом разметки с идентификатором
// "addProductButton" (главная плавающая кнопка)
let fab = document.querySelector('#addProductButton')
// Вывод в консоль браузера
// информации о найденном элементе
// console.log(fab)
// Получение управления элементом разметки с идентификатором
// "addProductButton" (главная плавающая кнопка)
// без указания селектора, а напрямую по идентификатору
// +
// установка обработчика события Клик
/* addProductButton.onclick = function() {
	alert('You clicked a floating button');
} */
document.addEventListener('DOMContentLoaded', function() {
	// Находим на разметке элемент с классом sidenav
	// var sidenav = document.querySelectorAll('.sidenav');
	// Активируем скрипт из библиотеки materialize.min.js,
	// чтобы боковая панель могла появляться и скрываться
	// при клике пользователя на плавающей кнопке с атрибутом data-target="slide-out"
	// var instances = M.Sidenav.init(sidenav, {});

	const modal = document.querySelectorAll('.modal')
    const instances = M.Modal.init(modal, {})

    const submit = document.querySelector('#newProductModal form button')
    // console.log(submit)
    submit.onclick = function(){
    	console.log(title.value)
    	console.log(description.value)
    }
})