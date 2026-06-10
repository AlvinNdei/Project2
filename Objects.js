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

//other JS functions include .indexOf, .slice(4,7), .lastIndexOf(), .trim(), .split(), .join(), .repeat(), .length()
let sentence="I am a JS developer";
let words=sentence.split(" ");
console.log(words);
//finding the max number in an array. Ensure to add the three dots for it to function.
let numbers=[1,4,6,9];
console.log(Math.max(...numbers));

