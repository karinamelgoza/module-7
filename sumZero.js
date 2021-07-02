function sumZero(arr) {
    let sum = 0
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === sum) {
                console.log(arr[i], arr[j])
                return true
            }

        }
    }
}

let numArr = [1, 2, 3, -2,]
sumZero(numArr)

//runtime of this code is O(n^2) becuse I am using a nested for loop