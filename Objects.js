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
