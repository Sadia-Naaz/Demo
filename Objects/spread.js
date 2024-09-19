console.log([..."rampur"]);
//guess the output
const user1 = {name:"sadia",class:"masters"};
const user2 = {...user1};
console.log(user2);
//2-->>
const objct = {
    college:"muj",
    city:"jaipur",
    state:"rajsthan",
    country:"india",
}

const objct1 = JSON.stringify(objct,["city","state"]);
console.log(objct1)
// converting only specified properties into string
//3->
const calculate = {
    radius:10,
    diameter(){
        return this.radius*2
    },
    paremeter:()=>{
        return  2 * Math.PI * this.radius
    }
}
console.log(calculate.diameter());
console.log(calculate.paremeter())//NaN
//because this has not binded to its lexical scope hence we are getting NaN
//it is searching the radius variable in window object 

//4-> what is wrong with this question?
// function greet(fruitList,...args,favoriteFruit){
//rest parameter must be last formal parameter
function greet(fruitList,favoriteFruit,...params){
    return[...fruitList,...params,favoriteFruit];
}
console.log(greet(["apple","banana"],"peer","orange","litchi","banana"));
const arr1 ="sadia"
console.log([...arr1]);