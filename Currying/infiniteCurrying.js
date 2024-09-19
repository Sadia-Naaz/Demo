//With the help of infinite currying we can rduce nesting 

function infinite(a){
    return function(b){
        if(b)return infinite(a+b);
        return a;
    }
}
console.log(infinite(10)(20)(30)());