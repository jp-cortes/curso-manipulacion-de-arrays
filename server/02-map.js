const letters = ['a', 'b', 'c'];

const newArray = [];
//it necesary an  aditional array  to place  all the ierable items
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + ' ++')
    //what in this situation is mutable because .push()
}

const mapArray = letters.map(item => item + ' mapp');

const mapArray2 = letters.map(item => {
    //with the  curly braces  is necesary a return
    return item + ' mapp2'});


console.log('Original', letters);
console.log('New', newArray);
console.log('map', mapArray);
