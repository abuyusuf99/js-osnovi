let mas = ['muslim','alambek','muhammad','ansur','sulim','shamil']
let accumulator  = []
for(let i= 0; i < mas.length; i++){
    if(mas[i][0] === 'a'){
        accumulator.push(mas[i])
    }
}
console.log(accumulator);