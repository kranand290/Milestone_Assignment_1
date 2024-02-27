let arr = [1, 2, 3, 4];

function fixBugs() {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }

    return arr;
}

let fixCart = fixBugs(arr);

console.log(fixCart);
