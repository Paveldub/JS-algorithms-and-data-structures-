// 3) сортировка выбора
const arr = [1, 4, 8, 9, 10, 12, 14, 5, 6, 7, 0, -4, -10, -5, -12, 23, 45, 90]; // [0, 1, 2, 3, 4 ...]

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;

        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
        }

        let tmp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = tmp;
    }

    return array;
}

console.log(selectionSort(arr))