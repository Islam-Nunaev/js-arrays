//В файле accumulator-2.js создай массив с десятью элементами числового типа. Три числа должны быть меньше нуля.

//Создай переменную accumulator и собери в ней сумму всех положительных элементов массива. Для решения используй цикл while.
let arr = [-1, -2, -3, 4, 5, 6, 7, 8, 9, 10];
let ccumulator = 0;

while (ccumulator < arr.length) {
    ccumulator+= arr
console.log(ccumulator)
}