// concat is an inmtable method is use to concat 2 or more arrays
//may have more than two arguments
const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

const newArray = [...elements];
for (let index = 0; index < otherElements.length; index++) {
    const result = otherElements[index];
    newArray.push(result);
}
const answer = elements.concat(otherElements);
//syntax array.concat(array2)
const answer2 = [...elements,...otherElements];
//spread operator may works to concatenate arrays
const answer3 = [...elements,...'example string'];

console.log('for loop', newArray);//example with for loop
console.log('concat', answer);//example with concat
console.log('... spread operator', answer2);//works fine with arrays
console.log('example string', answer3);//added the string to the array letter by letter
elements.push(...otherElements);// works fine
console.log('elements', elements);