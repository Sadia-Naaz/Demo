//Q-> Run the function only once-

function PrintHello(){
    let count = 0;
    return function(){
        if(count > 0){
            console.log("already printed");
        }
        else{
            console.log("hello");
            count++;
        }
    }
   
   
}
const Print = PrintHello();
Print();
Print();
Print();
Print();
Print();
Print();
//polyfill of once function 
function once(fun,context){
let ran;
let called = false;
return function(){
    if(!called){
        if(fun){
            ran = fun.apply(context||this,arguments);
            fun = null;
            called=true;
          }
    }
    else{
        console.log("once function is already called");
    }

    return ran;
}
}
function add(){
   return "print once"
}
const Hello  = once(()=>console.log("run once"));

Hello();//print the value
Hello();//nothing will happen because hello will not be called in the subsequent calls
Hello();
Hello();
Hello();

console.log(Hello());//print the logged value 
console.log(Hello());//print undefined becuase console.log returns undefined..
console.log(Hello());//...
console.log(Hello());//...
console.log(Hello());//...

//Case-2
function World(){
    return "world!";
}
const Smash = once(World);
console.log(Smash());//calling only once 
console.log(Smash());//returning the stored value in the subsequent calls
console.log(Smash());
console.log(Smash());
