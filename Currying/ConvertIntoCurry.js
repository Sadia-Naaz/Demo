//convert the given function into curried function-->>>>
function sum (a,b,c){
    return a+b+c;
}
function curry(fun){
return function Curriedfn(...args){
if(args.length>=fun.length){
    return fun(...args);
}
else{
    return function(...next){
        return Curriedfn(...args,...next);
    }
}
}
}
const CallMyFn = curry(sum);
console.log(CallMyFn(1)(2)(3));