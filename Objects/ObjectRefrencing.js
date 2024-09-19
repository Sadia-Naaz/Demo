//Definition-Object refrencing refers to how the objects in programming are accessed and manupilated
//using referencing rather than copying their values.In javascript when you assign or pass object 
//to a variable or function you are passing the reference to that object not the object itself.
//This means that if you change object via one refernce ,it affects all other refrences to that object
//becuase they are pointing to the same object in the memory.

let differentObj = {
    a: 1,
}
let newObject ;
newObject = differentObj;
newObject.a = 10;
console.log(differentObj.a);
//ex-2
console.log({a:1,b:2}=={a:1,b:2});//false
//both are present at diff memory location so they are two diff objects
// console.log({a:1,b:2}==={a:1,b:2});//false
//This condition will always returns false because js compares the objects by refernes
// not the value
//ex-3->
let person = {name:"xyz"};
const member = [person];
person = null;
console.log(member);
//ex-4
const value1 = {number:10};
//if any value is not passed during the function call,a shallow copy of value 1 object is passed 
//automatically to the function as argument
const multiply = (x={...value1})=>{
    console.log((x.number*=2));
}
console.log(multiply());
//20-logged from inside the function 
//undefined - because function is not returning anything
console.log(multiply());
//20-> another copy of object  value1 is made and passed as an argument so the value of number 
// will remain 10 as it is an entire new object and not affected by the previous function call 
//undefined
multiply(value1);
//will logg 20,
multiply(value1);
//will logg 40 as the entire object itself is passed so any modification will make the changes 
// in the origanal object
//so in the previous function call the value of x was 20
// now 20 will be the value of x and it will become 40 in this function call
//ex-5
function changeAgeAndRefrence(person){
    person.age=30;
    person = {
        name:"XYZ",
        age:40,
    }
    return person;
}
const personObject1 = {
    name:"alex",age:"20"
}
const personObject2  =changeAgeAndRefrence(personObject1);
console.log(personObject2);
console.log(personObject1);

