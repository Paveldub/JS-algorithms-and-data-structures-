// 1) linear search

const arr = [1, 4, 8, 9, 10, 12, 14, 5, 6, 7];
let count = 0;

function linearSearch(arr, item) {

    for (let i = 0; i < arr.length; i++) {
        count += 1;
        if (arr[i] === item) {
            // return index of element
            return i;
        }
    }
    return null;
}

console.log(linearSearch(arr, 4));
console.log(count);