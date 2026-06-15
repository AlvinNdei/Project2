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

//other JS functions include .indexOf, .slice(4,7), .lastIndexOf(), .trim(), .split(), .join(), .repeat(), .length(), .reverse(), typeof()
//.shift([]) removes the first element of an array while the .unshift([]) adds an element to the begining of the array
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

//A linked list
let myList={
    value:1,
    rest:{
        value:2,
        rest:{
            value:3,
            rest:{
                value:3,
                rest:null
            }
        }
    }   
};
console.log(myList.rest)


//A simple for loop
let count=10;
for(let i=0;i<count;i++){
    console.log(i)
}


//using unit codes. Strings and character codes. 
let smileyface="😊😁"
for(let char of smileyface){
    console.log(char)
}
//throws a bug 
console.log(smileyface[0])


//a for each loop to iterate through the array
let myArray3=["school","hall","parade"]
for(item of myArray3){
    console.log(item)
}

let colors=["Red","White","Green"]
colors.forEach(function(color){
    console.log(`Color: ${color}`)
})

//create a method that is to be used by differnt types of cars
function drive(driving) {
console.log(`The ${this.color} car is a '${driving}'`);
}
let car1 = {color: "white", drive};
let car2 = {color: "blue", drive};
car1.drive("BMW");
car2.drive("Toyota");

//we can also have global variables that can be accessed anywhere in a JS program. they are usually declared outside functions e.g 
let myGlobal="I am a global variable"
function determine(){
    if (myGlobal!=undefined){
        console.log("We have a global variable "+ myGlobal)
    }else if(myGlobal===undefined){
        console.log("We don,t have a global variable!!")
    }
}
determine();
//A variable declared inside a function s called a local scope variable.

//switch case statements
function evaluate(val){
    let answer=" ";
    switch(val){
        case 1:
            answer="alpha"
            break;
        case 2:
            answer="beta"
            break;
        case 3:
            answer="gamma"
            break;
        case 4:
            answer="delta"
           break;
    }
    return answer;
}
console.log(evaluate(3));

//classes in js
//code not working at the moment
class Person{
    constructor(name,age){
        //initializing our constructor
        this.name=name;
        this.age=age;
    }
    //a method(function) in our class
    greet(){
        console.log(`Hello, my name is ${this.name} and i'm ${this.age} years old.`)
    }
}
//creating an instance of a class
const person = new Person('Alvin',20);
//calling our function through the instance of the class
person.greet();

// JS maps
let persons={
    Alvin:20,
    jay:17,
    larry:3
}
console.log(`Alvin is ${persons["Alvin"]} years old.`);

//Execise
let ages={
    name:["Alvin","Jay","Larry"],
    age:[20,17,3]
};
count=Object.keys(ages).length;
function dis(){
    for(let i=0;i<=count;i++){
        console.log(`${ages["name"]} are ${ages["age"]} years old.`);
    }
}
dis();
//private properties are assigned using the # sign


//exercise on classes
class Vec{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    plus(){
        let sum=this.x+this.y;
        console.log(sum);
    }
    minus(){
        let diff=this.x-this.y;
        console.log(diff);
    }
}
//an instance of our vector
const vec = new Vec(3,2);
vec.plus();
vec.minus();

//exceptions
let a=0;
let b=4;
function division(){
    let div=a/b;
}
try{
    console.log("The division between an and b is:" + division());
}catch(error){
    console.log("An error was encountered: " + error);
}finally{
    console.log("This block runs regardless");
}