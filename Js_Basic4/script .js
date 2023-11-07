//1.Function -> A block of code that fullfil a specific tasl
//Syntax
//function function_name(par1,par2,par3....){
     //body of the function
//}

//funciton definition
// function greet(){
//     console.log("Hi this is Love Babbar");
// }


// //Here function call
// greet();

//we can call a function before define this is called hosting 
// greet();
// function greet(){
//     console.log('Hi this is Love Babbar');
// }
//

//concept of Function assignment
//1.Named function assignment
//2.Anoynomous function assignment
//1.Named Function assignment

// let stand = function walk(){
//     console.log('Let go for walk');
// }

// stand();

//1.Anonimous function
// let stand2 = function(){
//     console.log('Hi love how are u ?');
// }

// stand2();


//3.we all know that js is a dynamic language
// let a = 1;
// //or we can change value of a
// a = 'Love';
// console.log(a);//o/p:Love

//Apply on function
// function sum(a,b){
//     return a+b;
// }

// sum(1,2);//o/p:3
// sum(1)//o/p:NaN because here value of b is undefined
// sum(1,2,3,4,5)//o/p:3

//In js has a special object called argument
// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }

// sum(1,2)//here argu. is 1,2
// sum(1,2,3,4,5)//here argu is 1,2,3,4,5

//Note:Argument is a type of object not an array

// function sum(a,b){
//     let totalSum = 0;
//    for(let x of arguments){
//       totalSum+=x;
//    }
//    console.log(totalSum);
// }

// sum(1,2,3,4,5);//15

//5.Rest parameter
// function restPara(...args){
//     console.log(args);
// }

// console.log(restPara(1,2,3,4,5,6,7)); //it will come in the form of the arrayf

// function restPara(num,...args){
//     console.log(num);
//     console.log(args);
// }

// restPara(1,2,3,4,5,6,7,8);
//Here 1 is a num apart from 1 is args value

//Note-> Rest parameter is last formal parameter

//6.Default parameter

// function simpleInterest(p,r,y=5){
//    console.log( p*r*y/100);
// }

//function call
//simpleInterest(1000,4,5);
//Let's pass default value
// simpleInterest(10000,10);

//condition -> if you make any parameter as default then you must make all paramer in right in default

// function simpleInterest(p,r=5,y){
//        console.log( p*r*y/100);
//     }

//     simpleInterest(10000,5);//o/p -> NaN

//     function simpleInterest(p,r=5,y=5){
//         console.log( p*r*y/100);
//      }
//     simpleInterest(10000);//it will work

    //hack -> by using by undefined

//     function simpleInterest(p,r=5,y){
//         console.log( p*r*y/100);
//      }

//    simpleInterest(10000,undefined,5);//o/p-> 2500

//7.concept of the getter and setter
//getter -> To access property
//setter -> To update and set the property
// let person = {
//     fName:'Love',
//     lName:'Babbar',
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },

//     set fullName(value){
//          let parts = value.split(' ');
//          this.fName = parts[0];
//          this.lName = parts[1];
//     }

// };

// console.log('Before set the value');
// console.log(person.fullName);//Love Babbar
// person.fullName='Lakshya kumar';

// console.log('After set the value');
// console.log(person.fullName);//Lakshya kumar

//8.Error handling
//concept of try and catch block

//tyr{
    //yha pr apna code likho koi error aaya to catch block me jao
//}

// catch{
    //yha error wala code likho
// }

// let person = {
//     fName:'Love',
//     lName:'Babbar',
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },

//     set fullName(value){
//         if(typeof(value) !== 'string'){
//             throw new Error('This is not a string');
//         }
//         else{
//          let parts = value.split(' ');
//          this.fName = parts[0];
//          this.lName = parts[1];
//         }
//     }

// };

// try{
//    person.fullName = 'Ajeet kumar';
//    console.log(person.fullName);
// }

// //type 1 to alert error
// // catch(error){
// //    alert("You have sent a number");
// // }

// //type 2 to alert error

// catch(error){
//     alert(error);
//}

//H/W -> explore finally block

//9.Scoping -> LifeTime of a variable

// {
//     let a = 5;
//     console.log(a);//5
// }

// //here we can not access a
// //console.log(a)//error

// {
//     var a = 6;
//     console.log(a);//6
// }

// //here ans will be 6 bacause var is global variable
// console.log(a);//6

//Scope in for loop and if statement
// let flag = true;
// if(flag){
//     var age = 16;
//     console.log(age);
// }

// console.log(age);//16

// if(flag){
//  let marks = 20;
//  console.log(marks);
// }

// console.log(marks)//error

// for(var i=0; i<6; i++){
//     console.log(i);
// }

// console.log(i);//work

// for(let j=0; j<5; j++){
//     console.log(j);
// }

// console.log(j);//error


//Reduce function
let arr = [1,2,3,4,5];
let totalSum = arr.reduce((total,value)=> total+value,0);
console.log(totalSum);

let maxValue = arr.reduce((maxi,value)=> Math.max(maxi,value),-Infinity);
console.log(maxValue);
