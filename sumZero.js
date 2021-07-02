function sumZero(arr) {
    let sum = 0
    let total = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                total.push(sum)
            }
        }
    }
    if (total.includes(0)) {
        return true
    } else {
        return false
    }
}

let numArr = [1, 2, 3, -2,]
sumZero(numArr)

//runtime of this code is O(n^2) becuse I am using a nested for loop

function uniqueChar(word) {
    let string = [...word]
    return new Set(string).size === string.length

}

uniqueChar('monday')

//runtime of this code is O(n) because the Set object iterates through elements in an array 

