/*Source:
// 1. https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/
*/

// let someArrayValue = [1,2,3,6];
// someArrayValue . map
//   (
//     value =>
//     {
//         let newValue = value + 1;
//         console.log("This is value:")
//         document.write(`<h1>${newValue} </h1>`);
//     } 
//     );


arr = [3,4,5,4];
modifiedArr = [];

for(let i = 0; i<arr.length; i++) {
    console.log(`Index:${i} = Value:${arr[i]}`);
    //modifiedArr[i] = arr[i];
    modifiedArr.push(arr[i] * 3);
    console.log(modifiedArr);
}

console.log(`Original Array; ${arr}`)
console.log(`Final New array: ${modifiedArr}`);
