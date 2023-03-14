/*Source:
// 1. https://www.freecodecamp.org/news/javascript-map-how-to-use-the-js-map-function-array-method/
   2. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
*/
//JavaScript Map – How to Use the JS .map() Function (Array Method)
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




// arr = [3,4,5,4];
// modifiedArr = [];

// for(let i = 0; i<arr.length; i++) {
//     console.log(`Index:${i} = Value:${arr[i]}`);
//     //modifiedArr[i] = arr[i];
//     modifiedArr.push(arr[i] * 3);
//     console.log(modifiedArr);
// }

// console.log(`Original Array; ${arr}`)
// console.log(`Final New array: ${modifiedArr}`);


// arr = [2,3,4,5,6];

//  let modifiedArr = arr.map(function(currentValue){
//     //console.log(currentValue);
//     return currentValue * 5;
//  });


// console.log(typeof(modifiedArr));
// console.log(modifiedArr);

//Using array function ======

/* const arr = [3,5,6,7,8];

const sqrValue = arr.map((currentValue)=>{
    return Math.pow(currentValue,2);
});

console.log(sqrValue); */

//Array of Object in  map function =====

/* let nameMan =[
    {firstName: "Ashik", lastName: "Islam"},
    {firstName: "Atik", lastName: "Islam"},
    {firstName: "Anis", lastName: "Rahman"}
    
];

fullName = []

for(let i=0; i<nameMan.length; i++){
    //console.log(`${nameMan[i].firstName} ${nameMan[i].lastName}}`);
    fullName[i] = `${nameMan[i].firstName} ${nameMan[i].lastName}`;
    //fullName.push(`${nameMan[i].firstName} ${nameMan[i].lastName}`);
}

console.log(fullName);
 */

//===Map function used====
/* 
let nameMan =[
    {firstName: "Ashik", lastName: "Islam"},
    {firstName: "Atik", lastName: "Islam"},
    {firstName: "Anis", lastName: "Rahman"}
    
];

let fullName = nameMan.map(function(element){
    return element.firstName. + ' ' + element.lastName;
});

console.log(fullName); */


// Arrow Function using map within array of Object====

let nameMan =[
    {firstName: "Ashik", lastName: "Islam"},
    {firstName: "Atik", lastName: "Islam"},
    {firstName: "Anis", lastName: "Rahman"}
    
];

/* let fullName = nameMan.map((element) => {
    return `${element.firstName.toLowerCase()} ${element.lastName.toLowerCase()}`;
}); */
let fullName = nameMan.map((element) => `${element.firstName.toLowerCase()} ${element.lastName.toLowerCase()}`); 

console.log(fullName);