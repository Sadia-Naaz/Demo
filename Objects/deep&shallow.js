//Definition -
//shallow copy only copies the top level properties of an object.It means that if an object has 
//another object or array ,changes made to nested object or array in the copy of the object
// will affect orignal object
//becuase both the copies are refrencing to the same  nested object. 
// example
const orignal1 = {
    name :"john",
    age:20,
    address:{
        street:"123 main st",
        city:"NY",
        state:"NY"
    }
}
const shallow = {...orignal1};
orignal1.address.city="rampur";
console.log(shallow.address.city);
console.log("orignal",orignal1);
//solution
//Deep copy: A deep  copy craetes a completely new,independent copy along with its nested objects
// or arrays.It means making changes to the copy will not affect the orignal one  
const orignal2 = {
    name :"john",
    age:20,
    address:{
        street:"123 main st",
        city:"NY",
        state:"NY"
    }
}
const deep = JSON.parse(JSON.stringify(orignal2));
deep.address.city = "jaipur";
console.log("deep",deep);
console.log("origna2",orignal2);
//using lodash

const orignal3 = {
    name :"Arya",
    age:20,
    address:{
        street:"123 main st",
        city:"NY",
        state:"NY"
    }
}
const deepCopy = _.cloneDeep(orignal3);
deepCopy.address.state = "UP";
console.log("deepCopy",deepCopy);
console.log("orignal3",orignal3);