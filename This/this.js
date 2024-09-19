//this keyword in js refers to the object it belongs to and its value depend on the context 
//in which it is used and it can change dynamically depends on how the function is called. 
const user ={
    name: 'John',
    age: 30,
    printDetails(){
    console.log(this.name)
    }
}
user.printDetails();
//this keyword refers to its parent object user;

const user1={
    name:'John',
    age:50,
    getDetails:()=>console.log(this.name)
}
user1.getDetails();
//it will print nothing because here , this refer to window object
//because arrow function this keyword does't refer to the object it belongs to 
//it refers to the global object which is window in browser and global in nodejs.
//it needs a parent function 

const user2={
    name:'John',
    age:50,
    getDetails(){
      const details =()=>console.log(this.name);
      details();
    }
    
}
user2.getDetails();
