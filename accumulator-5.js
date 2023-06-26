let mas = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let accumulatorEven = []
for (let i = 0; i < mas.length; i++) {
    if (mas[i] % 2 === 0) {
        accumulatorEven.push(mas[i])
    }
}
console.log(accumulatorEven);