//memoizing or caching 
function herculin(num1,num2){
    for(let i =0;i<10000000;i++){};
    return num1*num2;
};

function memoize(fn,context){
    //make an object to store result
    let res={};
    //return a function to make a lexical scope;
    //function will be called inside this lexical scope to cache the result in order to skip expensive calculation.
    return function(...args){
     var chachedArgs  = JSON.stringify(args);
     if(!res[chachedArgs]){
        res[chachedArgs] =fn.call(context || this, ...args);
     }
     return  res[chachedArgs];
    }
}
const MyMemoziedFn = memoize(herculin);
console.time("first call")
console.log(MyMemoziedFn(4,2));
console.timeEnd("first call");
console.time("second call");
console.log(MyMemoziedFn(4,2));
console.timeEnd("second call");