// 2) binary search
const array = [1, 4, 8, 9, 10, 12, 14, 5, 6, 7, 15, 12];
let count = 0;

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false;
    let position = -1;

    while(found === false && start <= end) {
        middle = Math.floor((start + end) / 2);

        count =+ 1;

        if (array[middle] === item) {
            found = true,
            position = middle;
            return position;
        }

        if (item < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1
        }
    }

    return position;
}

console.log(binarySearch(array, 14));
console.log(count)

