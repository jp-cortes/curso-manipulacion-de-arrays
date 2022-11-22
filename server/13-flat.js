//creates a new array  with all sub-array elements concatenated up to specific depth
const array = [1,2,[3,4],5,6]
const result = array.flat() 
console.log(result);// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
console.log(result2);// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
console.log(result3);// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
console.log(result4);// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const matriz = [
    [1, 3, 4],
    [5, 6, 7, [12, 4, 55,[0, 8, 8]]],
    [8, 9, 2],
];


const newArray = [];
//two for loops for array of two dimentions
for(let i = 0; i < matriz.length; i++) {
    const array = matriz[i];
    for(let j = 0; j < array.length; j++){
        const arrAy2 = array[j]
        newArray.push(arrAy2)
    }
}
console.log('forr loop', newArray);


function recursive(array) {
    let newArray = [];
    for(elements of array) {   
    if(Array.isArray(elements)) {
        newArray = newArray.concat(recursive(elements))
    } 
    else {
        newArray.push(elements)
    }
    }
    return newArray
}

console.log(recursive(matriz));