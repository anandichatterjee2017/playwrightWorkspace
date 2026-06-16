//create a 2X3 2D array

const myNumber = [
    [10,11,12],
    [13,14,15]
];

//accessing any specific element
console.log(myNumber[1][1]);

//getting the number of rows
console.log(myNumber.length);

//iterate through the 2D array
for(let i = 0; i< myNumber.length; i++){
    for(let j=0; j< myNumber[i].length; j++){
        console.log(myNumber[i][j]);
    }
}
