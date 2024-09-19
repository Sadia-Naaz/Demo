//1-what will be the output of this function?
function a(){
for(var i =0;i<3;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}
}
a();
//2-How to resolve this issue?
//a)using let
//b)using IIFE
//c)using bind
//d)using simple function to make closure

