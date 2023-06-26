let mas = ['JS','python','php','swift','c++','sql','C#','visual basic']
let accumulator  = []
for(let i = 0; i < mas.length; i++){
    if(mas[i].length > 3){
        accumulator.push(mas[i])
    }
}
console.log(accumulator)