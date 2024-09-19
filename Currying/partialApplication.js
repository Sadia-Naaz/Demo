function Partialsum(a){
    return function(b,c){
        return a+b+c;
    }
}
const call  = Partialsum(10);
console.log(call(20,30))
//whearas-->>
function currySum(a){
    return function (b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(currySum(12)(12)(12));
//The key difference is in partial we can divide our functiion in chunks but in curying 
// the function arguments are equal to the number of functions