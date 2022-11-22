const total = [1, 2, 3, 4, 6];

let sum = 0;
for (let index = 0; index < total.length; index++) {
    const element = total[index];
    sum += element;
    //sum = sum + element;
}
console.log('for loop', sum);

const protReduce = total.reduce((sum, element) => sum + element, 0);
//this  needs two arguments  
// (accumulator, currentValue) => 
// "return  may be  like this"
// accumulator + currentValue,  initialValue);
console.log('.reduce()', protReduce);