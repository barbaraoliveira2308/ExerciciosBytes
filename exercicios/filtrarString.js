
function filtraStrings(array) {
    let arr = [];

    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "string") {
            arr.push(array[i]);
        }
    }

    return arr;
}