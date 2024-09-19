function privateCounter(){
    var _counter = 0;
    function add(inc){
    _counter +=inc
     return _counter;
    }
    function subtract(dec){
        _counter -=dec;
       return _counter;
    }
    return {
        add,subtract,
    }
}
const counter = privateCounter();
let sum =  counter.add(12)+counter.add(12);

console.log("sum = "+sum);

