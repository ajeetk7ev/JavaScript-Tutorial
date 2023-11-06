//  // console.log("Namaste Dunia");
//  console.log('Namste Dunia version 2');
//  //variable
//  //Type1
//  x = 5;
// console.log(x);
// y='hii how are yoou'
// console.log(y)

// //Type2:using let
// let num = 10;
// console.log(num);
// let name = "Priti Sharma Ji"
// console.log(name);

// //Type2:Using var

// var num2 = 20;
// var name1 = 'Ajeet Kumar';
// console.log(num2);
// console.log(name1);

//var vs let
// var n1 = 10;
// console.log(n1);
// {
//     var n1 = 20;
//     console.log(n1);
// }

// console.log(n1);

// let n2 = 5;
// console.log(n2);
// {
//     let n2 = 10;
//     console.log(n2);
// }

//console.log(n2);

//Type4:const
// const name = "ajeet";
// console.log(name);
// name = 'priti';
// console.log(name);

//concept of undefinied
// let a;
// console.log(a);

// let b = null;
// console.log(b);

//concept of the dynamic typing
// let n = 10;
// console.log(n);
// n='love babbar bhaiya';
// console.log(n);

//so js is a dynamic typing language

//object

// const person = {
//     firstName:'Love',
//     laseName:'Babbar',
//     age:25
// }

//access object properties using dot notation
// console.log(person.firstName);
// console.log(person.laseName);
// console.log(person.age);

//accessing object properties using bracket
// console.log(person['firstName']);
// console.log(person['laseName']);
// console.log(person['age']);

//Operator

//pre and post increament / decreament
let a = 10;
console.log(++a);

let b = 20;
console.log(b++);
console.log(b);

let c = 30;
++c;
c += c;
console.log(c);

//loose vs strict equality

let a1 = 5;
let b2 ="5";

if(a == b){
    console.log('This is Loose equality');
}

let n = 10;
let m = 10;

if(n === m){
    console.log('This is a Strice equality');
}

else{
    console.log('can not be comparison');
}


//Ternary operator

let age = 17;

let ans = (age >= 18)?"you can vote ":"you can not vote";

console.log(ans);


//concept of falsy and truthy
//falsy:false,undefined,NAN,0,'';
//Truthy:which is not false

console.log(false || 'raj');
console.log(false || false);
console.log(false || 'babbar');
console.log(false && truth);
console.log(false && false);
console.log(true && true);




