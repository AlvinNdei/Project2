//Objects and arrays provide ways to group several values into a single value.
let car={
    Brand:"BMW",
    Properties:["Red","800cc",1200000]
}
console.log(car.Properties);

//objects can have the same value but due to different bindings they are said to have different values e.g
let object1={value:10};
let object2=object1;
console.log(object1==object2);
let object3={value:10};
//value is false for the below statement even though it is clearly seen they are the same.
console.log(object1==object3)


//in Js a list and array are used interchangably in that an array is defined by default but a list isn't
let myArray=[10,11,12,13,14];
//usedto add an element to an array.
myArray.push(15);
//removes the last element in the array
myArray.pop();
console.log(myArray);

//other JS functions include .indexOf, .slice(4,7), .lastIndexOf(), .trim(), .split(), .join(), .repeat(), .length(), .reverse()
let sentence="I am a JS developer";
let words=sentence.split(" ");
console.log(words);
//finding the max number in an array. Ensure to add the three dots for it to function.
let numbers=[1,4,6,9];
console.log(Math.max(...numbers));

//EXERCISE1 SUM FOR A RANGE
//I had to explicitely declare  both the start and end inputs to be integers so as to use them as numbers.
//prompt only works with html and doesn't with node.js.
// let start=parseInt(prompt("Enter starting number"));
// let end=parseInt(prompt("Enter last number"));
function sumRange(start,end){
    let sum=0;
    for(i=start;i<=end;i++){
        sum+=i;
    }
    return sum;
}
console.log(sumRange(1,10));//You can also pass in start and end if you use the prompt function

//EXERCISE2 REVERSE AN ARRAY
let Array=[1,2,3,4,5];
console.log(Array.reverse());
