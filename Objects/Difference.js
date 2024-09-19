const obj2 = {
    name:"John",
    age:30,
    city:"newYork",
}
console.log(JSON.stringify(obj2))
const strObj = JSON.stringify(obj2);
console.log(JSON.parse(strObj));

//useCase - to store the data into local storage we have to convert into string.
//Object can not be stored in localstorage.