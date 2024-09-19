const myuser={
    name:"John",
    age:30,
    occupation:"Software Engineer",
    address: {
        city: "Rampur",
        state: "Uttar Pradesh"
      }
}
//Definition->
//Destructuring in js is a convinient way to extract values and assign them to variables.
//It is a way to unpack the properties of an object into ditinct variables with a concise 
//syntax

const  {name} = myuser;
console.log("name",name);

//nested destructuring 

const{address:{city,state}}=myuser
console.log(city)