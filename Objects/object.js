//Object-Object in javascript is a collection of key value pairs 
//comprise of properties and methods.
//methods are the function an object can perform 
//properties are the characterstics of an object such as name,age.
//So object let us group the related data and split code into logical pieces.
//we have primitive data -String,symbol,Number,Null,Boolean,undefined
//while objects like DOM nodes , array are refrance values



const Property = "FirstName";
const value ="John";
const Property2 ="lastName"
const value2 ="Doe";
const user={
    [Property]:value,
    [Property2]:value2,
    subject:"english",
}
console.log(user.FirstName);
console.log(user.lastName);
console.log(user.subject)

