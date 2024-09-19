//Q-1
const Obj = {
    a:10,
    b:20,
    a:30,
}

// if an Object has two similar keys than the first key is replaced with the last specified value 
// hence the output will be ...
// a:30,
// b:20,

//Q2->Multiply the numeric values of object with 2
function multiplyByTwo(obj){
    for(let key in obj){
        if(typeof(obj[key]==="number")){
            obj[key]*=2;
        }
    }
}
multiplyByTwo(Obj);
console.log(Obj)

//Q-3 Guess the output?
const a={};
const b = {key:"b"};
const c ={key:"c"};

a[b]=221;
a[c]=300;
console.log(a[b]);
//when object is used as key it is implicitly converted into string with toString()method and
//returns ["[object][object]"]
//a[b]=>a["[object][object]"]=221
//then overwrite the value
//a[c]=>a["[object][object]"]=300
//logging the value of a[b] simply means logging a["[object][object]"]
//since a[b]=a[c]=a["[object][object]"]=300(last modified value)
//hence the output will be
//300

