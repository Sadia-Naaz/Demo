//q-How willl you loop through the object?
const User  = {
    name:"John",
    age:23,
    language:"english"
}
for(key in User){
    console.log(User[key]);
}