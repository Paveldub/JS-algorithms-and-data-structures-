// пузырьковая сортировка

const array = [1, 4, 8, 9, 10, 12, 14, 5, 6, 7, 0, -4, -10, -5, -12, 23, 45, 90]; // [0, 1, 2, 3, 4 ...]
let counter = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            counter += 1;
        }
    }
    return array
}
console.log('counter', counter)
console.log(bubbleSort(array))