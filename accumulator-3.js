//В файле accumulator-3.js создай массив с десятью элементами строкового типа. Перечисли в них известные тебе названия языков программирования.

//Создай переменную accumulator и собери в ней только те названия, которые длиннее трёх символов. (accumulator будет массивом, вспомни про .push()).

//Для решения используй любой из циклов на своё усмотрение.
const arr = ['js', 'piton', 'html', 'c++']
let accumulator = []

for(let i = 0; i < arr.length; i++){
    if(arr[i].length > 3){
        accumulator.push(arr[i])
       
    }
    
}
console.log(accumulator)
    

       
    
    

