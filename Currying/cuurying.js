//1-Definition -Currying is technique in functional programming where  a function that takes 
//multiple arguments is transformed into a series of function that takes a single
// argument at a time.
//2-In other words currying break down a function that takes multiple atguments into a seires 
//of functions taking single argument at a time.
//3-The final result will be achieved when all the args have been provided.
//Examples-
function sum(a,b,c){
    return a+b+c;
}
const SUM = sum(1,2,3);
console.log(SUM);
//now let's curry this function
function curriedSum(a){
    return function(b){
       return function(c){
        return a+b+c;
       }
    }
};
console.log(curriedSum(1)(2)(3));
const curriedSum1 = curriedSum(1);
const curriedSum2 = curriedSum1(2);
console.log(curriedSum2(3));

//Q-? why should we use currying ?

//Q-Use cases of currying//
function evaluate(operation){
    return function(a){
        return function(b){
            if(operation==="add")return a+b;
            if(operation==="sub")return a-b;
            if(operation==="mul")return a*b;
            if(operation==="div")return a/b;
        }
    }
}
const add  = evaluate("add");
const sub= evaluate("sub");
const mul = evaluate("mul");
const div = evaluate("div");
console.log("add",add(6)(6));
console.log("sub",sub(10)(5));
console.log("mul",mul(12)(12));
console.log("div",div(20)(10));
